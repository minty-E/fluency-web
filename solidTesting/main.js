import { render } from 'solid-js/web';
import audioUploading from './audioUpload';

function App() {
    return (
        <div>
            <audioUploading />
        </div>
    );
}

render(App, document.getElementById('root'));