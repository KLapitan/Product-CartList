// modal it shows item preview when user click on image
import { useProductContext } from "../hooks/ProductContext";
import { useEffect } from "react"



const ImagePreviewModal = () => {

const {handleCloseModal,handleNextImage, handlePreviousImage, currentImageActive , productImages }=useProductContext()

useEffect(() => {

const handleEscape =(event) => {
if(event.key === 'Escape'){
  handleCloseModal();
}
};


// add when the modal open
window.addEventListener("keydown", handleEscape);

// remove when user unpress the escape button
return () => {
window.removeEventListener("keyup" , handleEscape)  

}



},[handleCloseModal])

return(
// modal background
<div className="hidden md:hidden lg:fixed  lg:inset-0 lg:bg-black/65 lg:flex lg:items-center lg:justify-center lg:h-auto lg:z-40 ">

{/* modal details */}
  <div className=" hidden lg:h-auto lg:w-auto lg:flex lg:flex-col  lg:rounded-lg lg:-mt-10  lg:p-2">

  {/* closebutton */}
<div className="lg:flex lg:flex-row lg:items-end lg:justify-end">
 <button className="group lg:relative lg:w-8 lg:h-8 lg:mb-2 cursor-pointer" onClick={handleCloseModal}>
  <img
    src="close-x-svgrepo-com.svg"
    className="lg:absolute lg:inset-0 lg:w-8 lg:h-8 opacity-100 group-hover:opacity-0 transition-opacity"
  />
  <img
    src="close-x-svg-orange-com.svg"
    className="lg:absolute lg:inset-0 lg:w-8 lg:h-8 opacity-0 group-hover:opacity-100 transition-opacity"
  />
</button>
</div>

<div className="lg:relative">

    {/* product  */}
      {productImages.length > 0 && (
        <img src={currentImageActive} alt={currentImageActive} className=" h-120 w-full object-fit lg:rounded-xl" />
      )}

    <div className=" lg:lg:absolute lg:top-55 lg:flex lg:flex-row lg:w-132 lg:justify-between lg:z-40 lg:-ml-6">

    {/* previous button */}
      <button 
      className="lg:w-10 lg:h-10 lg:rounded-full lg:bg-Whitee ">
      <img src="icon-previous.svg"
       alt="previous" 
       className="lg:place-self-center" onClick={handlePreviousImage} />
       </button>

    {/* next  button*/}
      <button 
      className="lg:w-10 lg:h-10 lg:rounded-full lg:bg-Whitee ">
      <img src="icon-next.svg" 
      alt="next-button" 
      className="lg:place-self-center" 
      onClick={handleNextImage} />
      </button>
    
    
    </div>

</div>



{/* product thumbnails */}
<div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mt-4 "> 
   <ul className="lg:relative  lg:flex lg:flex-row lg:w-100 lg:gap-3 lg:ml-10 " >
   {productImages.map((image) => (
<li key={image.id} 
><img src={image} alt={image} className="lg:rounded-lg lg:z-0  lg:w-20 lg:h-20 hover:bg-Orange-Pale "/>

{currentImageActive === image && (

<div className="lg:absolute lg:top-0 lg:bg-Whitee/40 lg:border-2 lg:border-Orange-Primary  lg:w-20 lg:h-20 lg:z-10 lg:rounded-lg "></div>
)}
</li>
))}
   
   
   </ul>
</div>
  </div>

</div>
)




}

export default ImagePreviewModal