import React, { useState } from 'react'
import './css/newProduct.scss'
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore";


export default function AdminProduct() {

  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState(null)
  const [price, setPrice] = useState(null)
  const [promo, setPromo] = useState(null)

  // const [nameError, setNameError] = useState('')
  // const [imageError, setImageError] = useState(null)
  // const [descriptionError, setDescriptionError] = useState('')
  // const [categoryError, setCategoryError] = useState(null)
  // const [priceError, setPriceError] = useState(null)
  // const [promoError, setPromoError] = useState(null)

  const ref = collection(db,"products")

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImage(URL.createObjectURL(file));
      console.log(image)
    }
  };

  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   if (!image) {
  //     alert("Veuillez sélectionner une image.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('file', image);

  //   try {
  //     await axios.post('https://example.com/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     alert('Image téléchargée avec succès !');
  //   } catch (error) {
  //     console.error('Erreur lors du téléchargement de l\'image', error);
  //     alert('Erreur lors du téléchargement de l\'image.');
  //   }
  // };

  const handleSave = async(e) => {
    e.preventDefault()


    
    const data = {
      image : image,
      name : name,
      description : description,
      category : category,
      price : price,
      promo : promo,
    }

   try {
    addDoc(ref,data).then((e)=>{
      alert("Saved")
    })
    console.log("Saved");
    
   } catch (error) {
    console.log(error.message);
   }
  console.log("les données : ",data);
  }
  return (
    <div id='admin-product' className='page'>
      <form>
        <div className='line-1'>
          <div>
            <label htmlFor="name">Nom <span>*</span></label><br />
            <input type="text" name="name" id="name" placeholder="Nom de l'article" onChange={(e) => setName(e.target.value)} value={name} required/><br />

            <label htmlFor="description">Description <span>*</span></label><br />
            <textarea type="text" name="description" id="description" placeholder="Faire une breve description de l'article" required onChange={(e) => setDescription(e.target.value)} value={description} /><br />
          </div>

          <div>
            <label htmlFor="price">Catégorie <span>*</span></label> <br />
            {/* <input type="text" name="Category" id="Category" placeholder="La catégorie de l'article" pattern="^-?\d*\.?\d+$" required onChange={(e) => setCategory(e.target.value)} value={category} /><br /> */}
            <select name="category" id="category"  required onSelect={(e) => setCategory(e.target.value)} >
              <option>Selectionner une catégorie</option>
              <option value="category 1">Category 1</option>
              <option value="category 2">Category 2</option>
              <option value="category 3">Category 3</option>
              <option value="category 4">Category 4</option>
              <option value="category 5">Category 5</option>
              <option value="category 6">Category 6</option>
              <option value="category autre">Autre</option>
            </select><br />

            <label htmlFor="price">Prix réel <span>*</span></label> <br />
            <input type="number" min={0.0} name="price" id="price" placeholder="Prix réel de l'article hors promotion" pattern="^-?\d*\.?\d+$" required onChange={(e) => setPrice(e.target.value)} value={price} /><br />

            <label htmlFor="promo">Prix de promo </label> <br />
            <input type="number" min={0.0} name="promo" id="promo" placeholder='Prix promotionnel' pattern="^-?\d*\.?\d+$" onChange={(e) => setPromo(e.target.value)} value={promo} /><br />
          </div>

          <div>
              <label htmlFor="image">Image <span>*</span></label><br />
                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                />
                <div className='image'>
                {image && (
                  <div>
                    {
                      <img src={image} alt="Aperçu"  width={200} height={200}/>
                    }
                  </div>
                )} <br />
              </div>
            </div>
        </div>
        <div className='line-2 d-flex align-items-center justify-end'>
            <button className='bg-[var(--primary)] rounded-md px-[10px] mt-[20px]' type='submit' onClick={handleSave}>Enrégistrer</button>
        </div>
      </form>
    </div>
  );
}