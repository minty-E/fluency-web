import { corsHeaders } from './cors.js';

$(document).ready(function() {
    $("#uploadButton").on('click', function() {
        console.log("clicked")
        const audioInput = document.getElementById('audioInput');
        const file = audioInput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('audio', file);

            $.ajax({
                type: 'POST',
                url: 'https://uzlnqvnuvuybwzbieomy.supabase.co/storage/v1/object/audioFiles/',
                data: formData,
                processData: false,
                contentType: false,
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6bG5xdm51dnV5Ynd6Ymllb215Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzkzMzE0NiwiZXhwIjoyMDA5NTA5MTQ2fQ.jeJAhv7fwHIufl3Oe0kpka_WJF8l4oZJV8ViAPNJUPI');
                },
                success: function (data) {
                    console.log("audio uploaded", data);
                },
                error: function (data) {
                    console.log("error uploading audio", data);
                }

            });
        } else {
            alert('Select an audio file to uploaded')
        }
    });
});