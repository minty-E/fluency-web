// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase


$(document).ready(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyB2zCM_mj8Wj-XRFS3SBXAcNDDvHBX-SfI",
        authDomain: "testing-jquery-8088f.firebaseapp.com",
        projectId: "testing-jquery-8088f",
        storageBucket: "testing-jquery-8088f.appspot.com",
        messagingSenderId: "617765066780",
        appId: "1:617765066780:web:41031b3c41e18a323267d9"
    };

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    $("#uploadButton").on('click', function() {
        console.log("clicked")
        var audioInput = document.getElementById('audioInput');
        var file = audioInput.files[0];
        if (file) {
            var storageRef = firebase.storage().ref();
            var fileRef = storageRef.child('audio/' + file.name);
            var uploadTask = fileRef.put(file);

            uploadTask.on('state_changed', function(snapshot){
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, function(error) {
                console.log("error uploading audio");
            }, function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                    console.log('audio file available at', downloadURL);
                });
            });
        } else {
            alert('Select an audio file to uploaded')
        }
    });
});