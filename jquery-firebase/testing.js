// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
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
            var storageRef = ref(storage, "audioFiles/" + file.name);
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('File uploaded successfully');
                
                // Get the download URL
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    console.log('Audio file available at', downloadURL);
                });
            }).catch((error) => {
                console.error('Error uploading audio:', error);
            });
        } else {
            alert('Select an audio file to upload');
        }
    });
});