import './css/autoplayCarous.scss'

const AutoplayCarrous = () => {
    return (
        <div class="wrapper">
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src={require("../assets/images/Page1.png")} alt="..." />
                    </div>
                    <div class="slide">
                        <img src={require("../assets/images/Page2.png")} alt="..." />
                    </div>
                    <div class="slide">
                        <img src={require("../assets/images/Page3.png")} alt="..." />
                    </div>

                </div>
            </div>
        </div>
    )
}


export default AutoplayCarrous