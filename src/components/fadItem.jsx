import { useEffect } from 'react';
import './css/fadItem.scss'

const FadItem = () => {

    var index = 0;
    useEffect(() => {
        showDivs(index);
    })

    function plusDivs() {
        index = index + 1;
        showDivs(index);
    }


    function showDivs() {
        var imgs = document.querySelectorAll('#fad > .mySlides')
        var i;
        if (index + 1 > imgs.length) {
            index = 0
        }
        for (i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none";
        }
        imgs[index].style.display = "block";
    }

    setInterval(() => {
        plusDivs()
    }, 2000);

    return (
        <div id="fad">
            <img className='mySlides' src={require('../assets/images/Page1.png')} alt="..." />
            <img className='mySlides' src={require('../assets/images/Page2.png')} alt="..." />
            <img className='mySlides' src={require('../assets/images/Page3.png')} alt="..." />
        </div>
    )
}

export default FadItem