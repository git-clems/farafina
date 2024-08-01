import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
    const interval = 5000
    return (
        <Carousel fade>
            <Carousel.Item interval={interval}>
                <img src={require('../assets/images/Page1.png')} alt="" />
                <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img src={require('../assets/images/Page2.png')} alt="" />
                <Carousel.Caption>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={interval}>
                <img src={require('../assets/images/Page3.png')} alt="" />
                <Carousel.Caption>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MyCarousel