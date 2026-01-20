const ProdcutHeader = () => {
return(
<section className="h-20 flex flex-row justify-between items-center border p-3 " >

<div className="flex flex-row  items-center  gap-2 border">
<picture>
<img src="icon-menu.svg" alt="humberger menu" />
</picture>

<picture>
<img src="logo.svg" alt=" logo" />
</picture>
</div>
<div className="flex flex-row gap-4 items-center justify-center border">

<picture>
<img src="icon-cart.svg" alt="cart-icon"  />
</picture>

<picture>
<img src="image-avatar.png" alt="avatar" className="w-8 h-8" />
</picture>

</div>


</section>
)
}
export default ProdcutHeader