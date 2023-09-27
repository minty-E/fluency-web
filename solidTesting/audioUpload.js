import { createSignal } from "solid-js";

function audioUploading() {
    const [audioFile, setAudioFile] = createSignal(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAudioFile(file);
    };

    return(
        <div>
            <h1>Audio Uploading Test</h1>
            <input type="file" accept="audio/*" onChange={handleFileChange} />
            {audioFile() && (
            <div>
                <h2>Selected File: {audioFile().name}</h2>
                <audio controls>
                    <source src={URL.createObjectURL(audioFile())} type="audio/mpeg"/>
                    Your Browser does not support the audio element.
                </audio>
            </div>
            )}
        </div>
    );
}
export default audioUploading;