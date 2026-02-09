
import ImagePreviewModal from "../Modals/ImagePreviewModal"
import { useProductContext } from "../hooks/ProductContext"
import ProductCheckOut from "../Components/Product-checkOut"
import { useEffect } from "react"

// make the product dynamically changeable 

// const productImages = [
// {
//   id: 0,
//   src: "image-product-1.jpg",
//   thumbnail: "image-product-1-thumbnail.jpg",
//   alt:"image1"

// },
// {
//   id:1 ,
//   src: "image-product-2.jpg",
//   thumbnail: "image-product-2-thumbnail.jpg",
//   alt:"image2"

// },
// {
//   id: 2,
//   src: "image-product-3.jpg",
//   thumbnail: "image-product-3-thumbnail.jpg",
//   alt:"image3"

// },
// {
//   id: 3,
//   src: "image-product-4.jpg",
//   thumbnail: "image-product-4-thumbnail.jpg",
//   alt:"image4"

// },
// ]




const ProductPage = () => {

const {productData,productImages,activeImageIndex,productThumbnails,itemQuantity,showModal,setActiveImageIndex,handleNextImage, handlePreviousImage,handleOpenModal,handleIncreaseQuantity, handleDecreaseQuantity, handleAddToCart,isCheckOut,handleCloseModal,timeThankyouMessage,setTimeThankyouMessage,setIsCheckOut}=useProductContext()

useEffect(() => {
  const handleImagePreviewInLargeScreen = () => {
  if(window.innerWidth < 1024 ){
    handleCloseModal();
  } 
  
  }

window.addEventListener("resize", handleImagePreviewInLargeScreen)


return () => {
window.removeEventListener("resize", handleImagePreviewInLargeScreen)
}
},[handleCloseModal])



useEffect(() => {
  if(!isCheckOut) return; 

if(timeThankyouMessage === 0){
setIsCheckOut(false);
setTimeThankyouMessage(5);
return;
}
 
const timer = setInterval(() => {
setTimeThankyouMessage((prevTime) => prevTime -1)
},1000)


return () => clearInterval(timer)


},[timeThankyouMessage,isCheckOut])



return (

<section className="  md:flex md:flex-col lg:flex lg:flex-row md: items-center lg:items-center lg:justify-center lg:gap-16 lg:mt-10  ease-in ">
{isCheckOut  ? (<ProductCheckOut /> ):(
<>

{/* prdocutpicture div */}
<div className="md:w-lg md:p-2 lg:gap-3 lg:flex lg:flex-col z-0 lg:w-md ">



<div className="flex flex-row h-70   lg:h-100  lg:w-100 lg:rounded-xl relative overflow-hidden ">
  
{/* {productImages.length > 0 && (
<img src={productImages[imageIndex].src } alt={productImages[imageIndex].alt} onClick={handleOpenModal} className="h-full w-full object-fit lg:rounded-xl" />




)} */}

{productImages.length > 0  && (
<img src={productImages[activeImageIndex]} alt="product image" className=" h-full w-full  object-fit lg:rounded-xl ease-in " onClick={handleOpenModal}/>
) }


{/* div for  next/prev button */}
<div className="absolute w-full md:w-124 md:justify-between md:left-0  md:top-32   z-10 top-34  left-0  flex justify-between px-2 lg:top-46 md:flex lg:hidden " >
{/* previous button */}


 
 
<button className="bg-white w-10  h-10  rounded-full cursor-pointer" 
onClick={handlePreviousImage}
>
<img src="icon-previous.svg" alt="previous button" className="place-self-center w-3 h-4  "/>
</button>
 


{/* next button */}


<button className= "bg-white w-10 h-10 rounded-full cursor-pointer" 
onClick={handleNextImage} >
<img src="icon-next.svg" alt="next button"className=" w-3 h-4 place-self-center " />
</button>


</div>

</div>


{/* product images */}

{/* <ul className="hidden lg:flex lg:flex-row lg:w-100 lg:gap-3 ">
  <li><img src="image-product-1-thumbnail.jpg" className="lg:rounded-lg " alt="image1" /></li>
  <li><img src="image-product-2-thumbnail.jpg " className="lg:rounded-lg"   alt="image2" /></li>
  <li><img src="image-product-3-thumbnail.jpg" className="lg:rounded-lg" alt="image3" /></li>
  <li><img src="image-product-4-thumbnail.jpg" className="lg:rounded-lg" alt="image4" /></li>

</ul> */}

<ul className="relative hidden md:flex md:gap-5 md:mt-2 lg:flex lg:flex-row lg:w-100 lg:gap-3" >
{productThumbnails.map((image,index) => (
<li key={index} role="button" 
onClick={() => {
handleOpenModal();
setActiveImageIndex(index)
}
}
><img src={image} alt="prodct thumnails" className="lg:rounded-lg z-0  lg:relative hover:cursor-pointer "/>


{/* we compare the current productimage index and thumbnail index */}
{activeImageIndex === index && (

<div className="absolute top-0 bg-Whitee/40 border-2 border-Orange-Primary  lg:w-23 lg:h-23  md:w-27 md:h-27 z-10 lg:rounded-lg "></div>
)}
</li>
))}

</ul>


</div>




{/* product details */}
<div className="p-4 font-Kumbh-Sans lg:w-100  lg:h-sm lg:p-3 lg:flex-wrap  "
>
  <p className="text-xs text-Dark-Grayish-Blue font-bold mb-2 tracking-wider lg:mt-20 lg:mb-4">{productData?.company}
  </p>


  <p className="text-black font-extrabold text-2xl mb-2 lg:text-4xl lg:mb-7 ">{productData?.name}</p>


  <p className="text-sm text-Dark-Grayish-Blue tracking-tight mb-3 lg:mb-4">{productData?.description}</p>

<div className="flex  justify-between items-center lg:flex-col lg:items-start lg:gap-3">

<div className="flex flex-row gap-3 items-center ">
  <span className="text-3xl  font-bold">${productData?.currentPrice}.00</span>
<span className="bg-black rounded-lg text-sm h-7 w-12 text-center p-2 leading-3 font-bold  text-white">{productData?.discount}%</span>
</div>



<div className="lg:mb-4 ">
<span className="line-through text-Dark-Grayish-Blue text-md font-bold ">${productData?.oldPrice}.00</span>
</div>
</div>

{/* quantity selector div for 2 button */}
<div className="md:flex md:flex-row  md:items-center md:justify-center lg:flex lg:flex-row lg:items-center lg:gap-2 ">
<span className="flex flex-row w-full lg:w-35 justify-between items-center bg-Light-Grayish-Blue rounded-lg h-12 font-bold p-3 my-4 md:w-shrink ">


<button className=" text-Orange-Primary text-2xl"><img src="icon-minus.svg" alt="minusitem" className="h-2 w-5 hover:cursor-pointer"
onClick={handleDecreaseQuantity}
 /></button>

 {itemQuantity}

<button className="font-bold  text-Orange-Primary text-2xl  text-center " 
onClick={handleIncreaseQuantity}
>

<img src="icon-plus.svg" alt="add" className="h-5 hover:cursor-pointer" />
</button>

</span>



{/* add to cart button */}


<button className="bg-Orange-Primary hover:bg-Orange-Primary/80 active:bg-Orange-Primary/90 w-full lg:w-60 rounded-lg h-12 font-bold mb-20 md:mb-0 md:shadow-none lg:mb-0 lg:shadow-none shadow-[0_13px_20px_rgba(255,165,0,0.5)] flex flex-row justify-center items-center gap-3 text-black md:shrink cursor-pointer" onClick={handleAddToCart}> 
<picture>
<img src="icon-cart.svg" alt="cart"  className="w-4 "/>
</picture>

Add to Cart</button>


</div>
</div>



{showModal && 
<ImagePreviewModal />}

</>

)}


</section>
)
}

export default ProductPage