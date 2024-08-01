import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div id="login" className="page">
            <h1>Login page</h1>
            <span>Don't have a count ? <Link to={'/register'}>Register here</Link></span>
        </div>
    )
}

export default Login