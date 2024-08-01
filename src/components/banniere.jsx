import AutoplayCarrous from "./autoplayCarous"
import MyCarousel from "./carousel"
import './css/baniere.scss'

const Baniere = () => {
    return (
        <>
            <aside className='slides'>
                <AutoplayCarrous></AutoplayCarrous>
            </aside>
            <aside className='caroussel'>
                <MyCarousel></MyCarousel>
            </aside>
        </>
    )
}

export default Baniere