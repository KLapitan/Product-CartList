const ProductPage = () => {
return (
<section>
<div className="h-70 relative  border">
  <picture>
  <img src="image-product-1.jpg" alt="product image" className="h-full w-full object-fit" />
  </picture>
</div>

<div className="p-3 font-Kumbh-Sans ">
  <p className="text-xs text-Dark-Grayish-Blue font-bold mb-2 tracking-wider">SNEAKER COMPANY</p>
  <p className="text-black font-extrabold text-2xl mb-2">Fall Limited Edition Sneakers</p>


  <p className="text-sm text-Dark-Grayish-Blue tracking-tight mb-3">  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

<div className="flex  justify-between items-center ">

<div className="flex flex-row gap-2 items-center">
  <span className="text-3xl  font-bold">$125.00</span>
<span className="bg-black/75 rounded-lg text-md h-6 w-14 text-center font-bold text-white">50%</span>
</div>

<div>
<span className="line-through text-Dark-Grayish-Blue text-md font-bold">$250.00</span>
</div>
</div>

<div>
<span className="flex flex-row w-full justify-between items-center bg-Light-Grayish-Blue rounded-lg h-12  p-3 my-4 border">
<button className="font-bold text-Orange-Primary text-2xl"><img src="icon-minus.svg" alt="minusitem" className="h-2 w-5" /></button>
0
 

<button className="font-bold  text-Orange-Primary text-2xl  text-center ">

<img src="icon-plus.svg" alt="add" className="h-5" />
</button>

</span>


<button className="bg-Orange-Primary w-full rounded-lg h-12 font-bold mb-20 shadow-[0_13px_20px_rgba(255,165,0,0.5)] flex flex-row justify-center items-center gap-3 text-black"> 
<picture>
<img src="icon-cart.svg" alt="cart"  className="w-4 "/>
</picture>

Add to Cart</button>


</div>
</div>



</section>
)
}

export default ProductPage