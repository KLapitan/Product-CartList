const ProdcutHeader = () => {
return(
<section className="h-20 flex flex-row justify-between items-center  p-3 lg:p-0" >


<div className="lg:flex lg:flex-row lg:gap-10 lg:items-center border ">

<div className="flex flex-row  items-center  gap-2 border">
{/* hambuger menu */}
<picture>
<img src="icon-menu.svg" alt="humberger menu" />
</picture>

{/* logo sneakers */}
<picture>
<img src="logo.svg" alt=" logo" />
</picture>
</div>


{/* nav links */}
<div className="hidden md:hidden lg:block">
<ul className="  lg:flex lg:flex-row lg:gap-5 lg:text-Dark-Grayish-Blue font-Kumbh-Sans  lg:text-md ">
<li>Collections</li>
<li>Men </li>
<li>Women</li>
<li>About</li>
<li>Contact</li>

</ul>
</div>

</div>



<div className="flex flex-row gap-4 lg:gap-7 items-center justify-center border">
<picture>
<img src="icon-cart.svg" alt="cart-icon"  />
</picture>

<picture>
<img src="image-avatar.png" alt="avatar" className="w-8 h-8 lg:w-15 lg:h-15" />
</picture>

</div>


</section>
)
}
export default ProdcutHeader