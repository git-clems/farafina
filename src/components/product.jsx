import { Link } from 'react-router-dom'
import './css/product.scss'
// import { products } from "../data/products"
// import { getToTop } from './scollUp'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect, useState } from 'react'
import { getToTop } from './scollUp'

function Product ({product}) {
    return (
        <Link key={product.id}
        className="product-item
            -webkit-user-select-none
            -ms-user-select-none
            user-select-none"
            to={`/produit/${product.id}`} onClick={getToTop}>
            <div className='image'>
                <img src={product.image} alt="..." /> <br />
            </div>
            <div className='m-[10px]'>
                <p className='overflow-hidden text-ellipsis text-nowrap'>{product.name}</p>
                <div>
                    {
                        product.promo ?
                            <div>
                                <span className='text-gray-500 line-through'>${product.price}</span>
                                <span className='ml-[10px]'>${product.promo}</span>
                            </div>
                            :
                            <span>${product.price}</span>
                    }
                </div>
            </div>
        </Link>
    )
}

function DisplayProduct() {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsRef = collection(db, "products");
                const snapshot = await getDocs(productsRef);
                const dataArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                // console.log(dataArray);
                setData(dataArray)
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className='display-products'>
                {data.map((product) => { return (<Product product={product}></Product>) })}
            </div>
        </>
    )
}

export default DisplayProduct