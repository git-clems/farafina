import { useState } from 'react'
import './css/filter.scss'

const Filter = () => {

    const [filterPrice, setFilterPrice] = useState(10000)

    const FilterPrice = () => {
        const price = document.querySelector('#filter-price')
        setFilterPrice(price.value)
    }

    return (
        <div id="items-filter">
            <span>Filter</span>
            <div className="filter-list">
                <div className='d-flex align-items-center justify-content-between w-[100%]'>
                    <span>$10</span>
                    <span>${filterPrice}</span>
                </div>
                <input className="mb-[10px] h-[2px]" onChange={FilterPrice} type="range" name='price' id='filter-price'
                    value={filterPrice} max={10000} min={10} step={10} width={'100%'}
                />
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter edxt</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter grezs</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter wzx</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter xd</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter juj</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter vgf</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter esc</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter e</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter ythgfr</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter zddtr</span>
                <span className='filter-item'><input type="checkbox" name="filter" id="" /> Filter -èjèhygt</span>
            </div>
        </div >
    )
}

export default Filter