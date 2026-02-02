import { useEffect, useState } from "react"
import ImagePreviewModal from "./ImagePreviewModal"

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

// quantity state
const [itemQuantity,setItemQuantity]=useState(0)

const [addQuantity,setAddQuantity]=useState({})


// data of the product
const [productData,setProductData] = useState(null)

// get product images from product data
const productImages = productData?.images ?? [];

// image index state 
const [activeImageIndex ,setActiveImageIndex] = useState(0)

const productThumbnails = productData?.thumbnails ?? [];

const currentImageActive = productImages[activeImageIndex]



// const [currentImageThumbnailActive,setCurrentImageThumbnailActive] = useState(null)

// const hideButton = imageIndex === 0 ? true : false

const [showModal,setShowModal]=useState(false)


useEffect(() => {
const fetchProductData = async () => {

try{
  const response = await fetch('/data.json')
  const data = await response.json()
  setProductData(data)

console.log("Product data fetched:", data)

}
catch (error){
console.error("Error fetching product data:", error)
}


}

fetchProductData()
}, [])



const handleNextImage = () => {
setActiveImageIndex(prev => prev === productImages.length -1 ? 0 : prev + 1)

}
const handlePreviousImage = () => {
setActiveImageIndex(prev  => prev === 0 ? productImages.length - 1 : prev - 1)
}


const handleOpenModal = () => {

setShowModal(true)
console.log("modal opened")
}

const handleCloseModal = () => {
setShowModal(false)
}


const handleIncreaseQuantity =() => {
setItemQuantity(prev => prev +1)
}
const handleDecreaseQuantity =() => {
setItemQuantity(prev => prev -1)
}




return (
<section className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-20 lg:mt-10">

{/* prdocutpicture div */}
<div className="lg:gap-3 lg:flex lg:flex-col ">
<div className="flex flex-row h-70 relative    lg:h-100  lg:w-100 lg:rounded-xl overflow-hidden  ">
  
{/* {productImages.length > 0 && (
<img src={productImages[imageIndex].src } alt={productImages[imageIndex].alt} onClick={handleOpenModal} className="h-full w-full object-fit lg:rounded-xl" />




)} */}

{productImages.length > 0  && (
<img src={productImages[activeImageIndex]} alt="product image" className="h-full w-full object-fit lg:rounded-xl " onClick={handleOpenModal}/>
) }


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
{productThumbnails.map((image,index) => (
<li key={index} role="button" 
onClick={() => {
handleOpenModal();
setActiveImageIndex(index)
}
}
><img src={image} alt="prodct thumnails" className="lg:rounded-lg z-0  lg:relative "/>


{/* we compare the current productimage index and thumbnail index */}
{activeImageIndex === index && (

<div className="absolute top-0 bg-Whitee/40 border-2 border-Orange-Primary  w-23 h-23 z-10 lg:rounded-lg "></div>
)}
</li>
))}

</ul>


</div>




{/* product details */}
<div className="p-3 font-Kumbh-Sans lg:w-100 border lg:h-sm lg:p-3 lg:flex-wrap "
>
  <p className="text-xs text-Dark-Grayish-Blue font-bold mb-2 tracking-wider lg:mt-20 lg:mb-4">{productData?.company}
  </p>


  <p className="text-black font-extrabold text-2xl mb-2 lg:text-4xl lg:mb-7 ">{productData?.name}</p>


  <p className="text-sm text-Dark-Grayish-Blue tracking-tight mb-3 lg:mb-4">{productData?.description}</p>

<div className="flex  justify-between items-center lg:flex-col lg:items-start lg:gap-3">

<div className="flex flex-row gap-2 items-center ">
  <span className="text-3xl  font-bold">${productData?.currentPrice}</span>
<span className="bg-black/75 rounded-lg text-md h-6 w-14 text-center font-bold text-white">{productData?.discount}%</span>
</div>

<div className="lg:mb-4">
<span className="line-through text-Dark-Grayish-Blue text-md font-bold ">${productData?.oldPrice}</span>
</div>
</div>

{/* quantity selector */}
<div className="lg:flex lg:flex-row lg:items-center lg:gap-2 ">
<span className="flex flex-row w-full lg:w-35 justify-between items-center bg-Light-Grayish-Blue rounded-lg h-12 font-bold p-3 my-4 border">


<button className=" text-Orange-Primary text-2xl"><img src="icon-minus.svg" alt="minusitem" className="h-2 w-5"
onClick={handleDecreaseQuantity}
 /></button>
{itemQuantity}
 

<button className="font-bold  text-Orange-Primary text-2xl  text-center " 
onClick={handleIncreaseQuantity}
>

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
<ImagePreviewModal onClose={handleCloseModal} productImages={productImages} imageIndex={activeImageIndex} currentImageActive={currentImageActive} onNext={handleNextImage} onPrevious={handlePreviousImage} />
)}



</section>
)
}

export default ProductPage