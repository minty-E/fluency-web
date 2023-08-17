$(document).ready(function() {
    let mediaRecorder;
    let recordedChunks = [];
    let isRecording = false;
    console.log('script.js loaded');

    const startButton = $("#startRecording");
    const stopButton = $("#stopRecording");

    startButton.on("click", startRecording);
    startButton.on("click", printingLogs);
    stopButton.on("click", stopRecording);

    function printingLogs() {
        console.log('debugging properly');
    }
    function startRecording() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = function(event) {
                    if (event.data.size > 0) {
                        recordedChunks.push(event.data);
                    }
                };
                mediaRecorder.onstop = function() {
                    saveRecording();
                };

                startButton.attr("disabled", true);
                stopButton.attr("disabled", false);
                isRecording = true;
                startButton.text("Recording...");

                mediaRecorder.start();
            })
            .catch(function(err) {
                console.error("Error accessing microphone: ", err);
            });
    }

    function stopRecording() {
        console.log('stop recording called');
        if(isRecording) {
            console.log('stop recording successfully called');
            mediaRecorder.stop();
            startButton.attr("disabled", false);
            stopButton.attr("disabled", true);
            isRecording = false;
            startButton.text("Start Recording");

        }
    }

    function saveRecording() {
        console.log("saveRecording called");
        const blob = new Blob(recordedChunks, { type: "audio/mpeg" });
        
        const url = document.createElement("a");
        url.href = URL.createObjectURL(blob);
        url.download = "recording.mp3";
        url.click();

        recordedChunks = [];
    }
});
