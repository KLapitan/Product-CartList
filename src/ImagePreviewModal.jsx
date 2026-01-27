// modal it shows item preview when user click on image



const ImagePreviewModal = ({onClose,productImages,currentImageActive}) => {



return(
<div className="lg:fixed  lg:inset-0 lg:bg-black/65 lg:flex lg:items-center lg:justify-center lg:h-auto ">

{/* modal details */}
  <div className=" lg:h-auto lg:w-auto lg:flex lg:flex-col  lg:rounded-lg lg:-mt-10 ">

  {/* closebutton */}
<div className="lg:flex lg:flex-row lg:items-end lg:justify-end">
 <button className="group lg:relative lg:w-8 lg:h-8 lg:mb-2 cursor-pointer" onClick={onClose}>
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


    {/* product  */}
      {productImages.length > 0 && (
        <img src={currentImageActive.src } alt={currentImageActive.alt} className="h-120 w-full object-fit lg:rounded-xl" />
      )}




{/* product thumbnails */}
<div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mt-4 "> 
   <ul className="lg:relative  lg:flex lg:flex-row lg:w-100 lg:gap-3 lg:ml-10 " >
   {productImages.map((image) => (
<li key={image.id} 
><img src={image.thumbnail} alt={image.alt} className="lg:rounded-lg lg:z-0  lg:w-20 lg:h-20 hover:bg-Orange-Pale "/>

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