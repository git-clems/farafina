import React, { useState } from 'react'
import './css/product.scss'
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";
/**
 * This function returns an element that contains the form for adding a new product
 * @returns {JSX.Element} the form for adding a new product
 */
export default function AdminProduct() {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  // const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [promo, setPromo] = useState('')

  const ref = collection(db,"products")

  const handleSave = async(e) => {
   e.preventDefault() 
  //  console.log(ref.current.value);

  const data = {
    image : image,
    name : name,
    description : description,
    // category : category,
    price : price,
    promo : promo,
  }

   try {
    addDoc(ref,data)
   } catch (error) {
    console.log(error.message);
   }
  console.log(data);
  }
  return (
    <div id='admin-product' className='page'>
      <form onSubmit={handleSave}>
        <label htmlFor="image">Image</label><br />
        <input type="text" name="image" id="image" placeholder='image' required onChange={(e) => setImage(e.target.value)} value={image} /><br />

        <label htmlFor="name">Nom</label><br />
        <input type="text" name="name" id="name" placeholder="Nom de l'article" onChange={(e) => setName(e.target.value)} value={name} /><br />

        <label htmlFor="description">Description</label><br />
        <textarea type="text" name="description" id="description" placeholder='Description' required onChange={(e) => setDescription(e.target.value)} value={description} /><br />

        <label htmlFor="price">Prix réel</label><br />
        <input type="text" name="price" id="price" placeholder='Prix réel' pattern="^-?\d*\.?\d+$" required onChange={(e) => setPrice(e.target.value)} value={price} /><br />

        <label htmlFor="promo">Prix de promo</label><br />
        <input type="text" name="promo" id="promo" placeholder='Prix promotionnel' pattern="^-?\d*\.?\d+$" onChange={(e) => setPromo(e.target.value)} value={promo} /><br />

        {/* <label htmlFor="category">Catégorie</label><br />
        <select name="category" id="category" required onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">Selectionner une catégorie</option>
          <option value="Cat 1">Cat 1</option>
          <option value="Cat 2">Cat 2</option>
          <option value="Cat 3">Cat 3</option>
        </select><br /> */}

        <button className='bg-[var(--primary)] rounded-md px-[10px] mt-[20px]' type='submit'>Enrégistrer</button><br />
      </form>
    </div>
  );
}