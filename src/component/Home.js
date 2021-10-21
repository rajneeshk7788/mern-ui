import React, { useState } from 'react';
import product from '../config/gallary_config'
import Image3 from '../image/online-shopping-store-with-mobile-application-digital-marketing-and-sale-banner-background-free-vector.webp';
import MobileCard from './mo_card';
// import ImageSlider from './carousel';



const Home= () =>{
 
    const [items, setItems] = useState(product);

    const filterItem =(category)=>{
        const updatedList = product.filter((curElem)=>{
            return curElem.catagory===category;
        });
        setItems(updatedList);
    };
  

    return(
        <>
        <img src={Image3} alt="image not found"  width="1210px" height="453px" id="Shop_image" />
         {/* <ImageSlider/> */}
        <nav className="nav_button">
            <div>
                <h1 id="Buy_Now">Buy Now</h1>
            </div>
            
            <div id="button">
                <button onClick={()=>filterItem("Samsang")}><h4>Samsang</h4></button>
                <button onClick={()=>filterItem("Nokia")}><h4>Nokia</h4></button>
                <button onClick={()=>filterItem("Mi")}><h4>Radmi</h4></button>
                <button onClick={()=>filterItem("Oppo")}><h4>Oppo</h4></button>
                <button onClick={()=>filterItem("Vivo")}><h4>Vivo</h4></button>
                <button onClick={()=>setItems(product)}><h4>All</h4></button>

            </div>            
        </nav>
        <MobileCard items={items} />
        </>
        
    )
}


export default Home;