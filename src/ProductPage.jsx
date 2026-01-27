import { useState } from "react"
import ImagePreviewModal from "./ImagePreviewModal"

// make the product dynamically changeable 

const productImages = [
{
  id: 0,
  src: "image-product-1.jpg",
  thumbnail: "image-product-1-thumbnail.jpg",
  alt:"image1"

},
{
  id:1 ,
  src: "image-product-2.jpg",
  thumbnail: "image-product-2-thumbnail.jpg",
  alt:"image2"

},
{
  id: 2,
  src: "image-product-3.jpg",
  thumbnail: "image-product-3-thumbnail.jpg",
  alt:"image3"

},
{
  id: 3,
  src: "image-product-4.jpg",
  thumbnail: "image-product-4-thumbnail.jpg",
  alt:"image4"

},
]



const ProductPage = () => {


const [imageIndex ,setImageIndex] = useState(0)

const currentImageActive = productImages[imageIndex]

// const hideButton = imageIndex === 0 ? true : false

const [showModal,setShowModal]=useState(false)


const handleNextImage = () => {
setImageIndex(prev => prev === productImages.length -1 ? 0 : prev + 1)

}
const handlePreviousImage = () => {
setImageIndex(prev  => prev === 0 ? productImages.length - 1 : prev - 1)

}


const handleOpenModal = (e) => {

setShowModal(true)
console.log("modal opened")
}

const handleCloseModal = () => {
setShowModal(false)
}





return (
<section className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-20 lg:mt-10">

{/* prdocutpicture div */}
<div className="lg:gap-3 lg:flex lg:flex-col ">
<div className="flex flex-row h-70 relative    lg:h-100  lg:w-100 lg:rounded-xl overflow-hidden  ">
  
{productImages.length > 0 && (
<img src={productImages[imageIndex].src } alt={productImages[imageIndex].alt} onClick={handleOpenModal} className="h-full w-full object-fit lg:rounded-xl" />

)}


{/* div for button */}
<div className="absolute w-full z-10 top-34  left-0  flex justify-between px-2 lg:top-46 md:hidden lg:hidden" >
{/* previous button */}


 
 
<button className="bg-white w-10  h-10  rounded-full" 
onClick={handlePreviousImage}
>
<img src="icon-previous.svg" alt="previous button" className="place-self-center w-3 h-4 "/>
</button>
 


{/* next button */}


<button className= "bg-white w-10 h-10 rounded-full"
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

<ul className="relative hidden lg:flex lg:flex-row lg:w-100 lg:gap-3" >
{productImages.map((image) => (
<li key={image.id} role="button" 
onClick={handleOpenModal}
><img src={image.thumbnail} alt={image.alt} className="lg:rounded-lg z-0  "/>

{currentImageActive === image && (

<div className="absolute top-0 bg-Whitee/40 border-2 border-Orange-Primary  w-23 h-23 z-10 lg:rounded-lg "></div>
)}
</li>
))}

</ul>


</div>
{/* product details */}
<div className="p-3 font-Kumbh-Sans lg:w-100 border lg:h-sm lg:p-3 lg:flex-wrap "
>
  <p className="text-xs text-Dark-Grayish-Blue font-bold mb-2 tracking-wider lg:mt-20 lg:mb-4">
  SNEAKER COMPANY</p>


  <p className="text-black font-extrabold text-2xl mb-2 lg:text-4xl lg:mb-7 ">Fall Limited Edition Sneakers</p>


  <p className="text-sm text-Dark-Grayish-Blue tracking-tight mb-3 lg:mb-4">  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

<div className="flex  justify-between items-center lg:flex-col lg:items-start lg:gap-3">

<div className="flex flex-row gap-2 items-center ">
  <span className="text-3xl  font-bold">$125.00</span>
<span className="bg-black/75 rounded-lg text-md h-6 w-14 text-center font-bold text-white">50%</span>
</div>

<div className="lg:mb-4">
<span className="line-through text-Dark-Grayish-Blue text-md font-bold ">$250.00</span>
</div>
</div>

{/* quantity selector */}
<div className="lg:flex lg:flex-row lg:items-center lg:gap-2 ">
<span className="flex flex-row w-full lg:w-35 justify-between items-center bg-Light-Grayish-Blue rounded-lg h-12 font-bold p-3 my-4 border">
<button className=" text-Orange-Primary text-2xl"><img src="icon-minus.svg" alt="minusitem" className="h-2 w-5" /></button>
0
 

<button className="font-bold  text-Orange-Primary text-2xl  text-center ">

<img src="icon-plus.svg" alt="add" className="h-5" />
</button>

</span>


<button className="bg-Orange-Primary w-full lg:w-60 rounded-lg h-12 font-bold mb-20 lg:mb-0 lg:shadow-none shadow-[0_13px_20px_rgba(255,165,0,0.5)] flex flex-row justify-center items-center gap-3 text-black"> 
<picture>
<img src="icon-cart.svg" alt="cart"  className="w-4 "/>
</picture>

Add to Cart</button>


</div>
</div>



{showModal && (
<ImagePreviewModal onClose={handleCloseModal} productImages={productImages} imageIndex={imageIndex} currentImageActive={currentImageActive} />
)}



</section>
)
}

export default ProductPage