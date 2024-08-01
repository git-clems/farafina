import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './css/button.scss'

const Button = (props) => {
    const style = {
        button : {
            borderRadius : props.radius
        }
    }
    return (
        <Link className="myButton rounded justify-content-center align-content-center" to={props.to} style={style.button}>
            <h5 className="text-black">{props.title}</h5>
            <FontAwesomeIcon className="icon" icon={props.icon} />
        </Link>
    )
}

export default Button