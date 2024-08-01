import "../css/loading.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

function Loading() {
    return (
        <div className="loading d-flex justify-content-center align-items-center page">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading