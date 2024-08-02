import { Link } from 'react-router-dom'
import './css/itemHorizontalList.scss'
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons'
import { useEffect } from 'react'

const HorizontalItems = (props) => {

    const slideLeft = () => {
        const slider = document.querySelector('#horizontalItems > .slider')
        slider.scrollLeft = slider.scrollLeft - 100
    }
    const slideRight = () => {
        const slider = document.querySelector('#horizontalItems > .slider')
        slider.scrollLeft = slider.scrollLeft + 100
    }

    useEffect(() => {
        const items = document.querySelectorAll('.slider > .category')
        items.forEach(element => {
            element.style.borderRadius = props.borderRadius
        });
    })

    return (
        <div id="horizontalItems">
            <div onClick={slideLeft} className='icon h-[100%] align-items-center'>
                <ChevronCompactLeft size={'40px'} />
            </div>
            <div className='slider'>
                <Link to={'/category/classement-1'}>
                    <div className='category'>
                        <h4>Acheteur 1</h4>
                    </div>
                </Link>
                <Link to={'/category/classement-2'}>
                    <div className='category'>
                        <h4>Acheteur 2</h4>
                    </div>
                </Link>
                <Link to={'/category/classement-3'}>
                    <div className='category'>
                        <h4>Acheteur 3: encore plus gros</h4>
                    </div>
                </Link>
                <Link to={'/category/classement-4'}>
                    <div className='category'>
                        <h4>Acheteur 4</h4>
                    </div>
                </Link>
                <Link to={'/category/classement-5'}>
                    <div className='category'>
                        <h4>Acheteur 5</h4>
                    </div>
                </Link>
                <Link to={'/category/classement-6'}>
                    <div className='category'>
                        <h4>Acheteur 6</h4>
                    </div>
                </Link>
                <Link to={'/category/classement-7'}>
                    <div className='category'>
                        <h4>Acheteur 7</h4>
                    </div>
                </Link>
                <Link to={'/category/classement-8'}>
                    <div className='category'>
                        <h4>Acheteur 8</h4>
                    </div>
                </Link>
            </div>
            <div onClick={slideRight} className='icon h-[100%] align-items-center'>
                <ChevronCompactRight size={'40px'} />
            </div>
        </div>
    )
}

export default HorizontalItems