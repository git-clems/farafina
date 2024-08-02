import { useParams } from "react-router-dom"
import Page404 from "./page404";
import Button from "../../components/button"
import '../css/detail.scss'
import { Dash, Plus } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import DisplayProduct from '../../components/product'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Loading from "./loading";
import BarChart from "../../components/chart";


const Detail = () => {
    const [select,setSelect] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [number, setNumber] = useState(1)
    const param = useParams()

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const docRef = doc(db, "products", param.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                  setSelect(docSnap.data())
                  setIsLoading(false)
                } else {
                  console.log("No such document!");
                  return null;
                }
              } catch (error) {
                console.error("Error fetching document:", error);
                return null;
              }
        }
        fetchData()
    }, [param.id,isLoading])

    useEffect(() => {
        const numberInner = document.querySelector('.select-product-number')
        numberInner.innerHTML = number
        const dash = document?.querySelector('.dash')
        if (number === 1) {
            dash.style.color = "rgba(128,128,128,0.5)"
        }
        if (number > 1) {
            dash.style.color = "rgb(0,0,0)"
        }
    }, [number])

    return (
            <div id="detail" className="page">
                {
                    select ?
                        <>
                            <div className="l-1">
                                <div className="col-1 f-flex-wrap">
                                    <div className="image">
                                        {
                                            isLoading ? <Loading/>
                                            :
                                        <img src={select.image} alt="..." />
                                        }
                                    </div>
                                    <div className="d-flex flex-column justify-content-between" style={{ padding: 10, marginTop: 20}}>
                                        <div>
                                            <h4 className="title">{select.name}</h4>
                                            {
                                                select.promo ?
                                                    <>
                                                        <span className="text-gray-400 line-through">${select.price}</span>
                                                        <h5 className="ml-[10px]">${select.promo}</h5>
                                                    </>
                                                    :<h5>${select.price}</h5>
                                            }
                                        </div>
                                        <div style={{ width: "100%" }}>
                                            <div className="
                                            align-items-center
                                                d-flex
                                                justify-content-end
                                                -webkit-user-select-none
                                                -ms-user-select-none
                                                user-select-none"
                                            >
                                                <span className="mr-[20px]">Nombre de produits</span>
                                                <div className="d-flex">
                                                    <Dash onClick={() => { number - 1 < 1 ? setNumber(1) : setNumber(number - 1) }}
                                                        className="icon dash w-[30px] h-[30px] cursor-pointer border-solid border-grey-200" />
                                                    <span className="select-product-number min-w-[50px] h-[30px] d-flex justify-content-center align-items-center text-[25px]"></span>
                                                    <Plus onClick={() => setNumber(number + 1)} className="icon plus w-[30px] h-[30px] cursor-pointer" />
                                                </div>
                                            </div>
                                            <div className='mt-[10px]'>
                                                <Button radius = {50} title={"Ajouter au panier"}></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {
                                    select.description?
                                    <div className="col-2">
                                        <h5>Détails</h5>
                                        {
                                            <>
                                                <p>
                                                    {select.description}
                                                </p>
                                            </>
                                        }
                                    </div>
                                    : null
                                }

                                {
                                    select.brand && select.from ?
                                    <div className="col-2">
                                        <h5>Caractéristiques</h5>
                                        {
                                            select.brand ?
                                            <ul>
                                                <li><strong>Brand : </strong>{select.brand}</li>
                                                <li><strong>Country : </strong>{select.from}</li>
                                                <li><strong>Catégory : </strong>{select.category}</li>
                                            </ul>
                                            : null
                                        }
                                    </div>:null
                                }
                            </div>
                            <div className="l-3">
                                <div className="product-chart">
                                    <BarChart></BarChart>
                                </div>
                                <div className="fiche-descriptive">

                                </div>
                            </div>
                            <div className="l-2">
                                <h4>Des produits qui pourraient vous interesser</h4>
                                <DisplayProduct></DisplayProduct>
                            </div>
                        </>
                        : <Page404></Page404>
                }
            </div>
        )
}

export default Detail