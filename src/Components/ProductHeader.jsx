import { useProductContext } from "../hooks/ProductContext"
import LinkModal from "../Modals/LinkModal"
import ProductCartItemList from "../Components/Product-cart-list"


const ProdcutHeader = () => {


const {cartItems,handleOpenHumburgerModal,showLinkModal,navLinks, handleTogggleCartItemList ,itemCartList} =useProductContext()

const cartQuantity = cartItems[0]?.quantity?? 0

return(
<section className="h-20 flex flex-row justify-between items-center  p-3 lg:p-0" >


<div className="lg:flex lg:flex-row lg:gap-10 lg:items-center  lg:h-20 ">

<div className="flex flex-row  items-center  gap-2  relative" >
{/* hambuger menu */}
<picture>
<img src="icon-menu.svg" alt="humberger menu"  onClick={handleOpenHumburgerModal} className="lg:hidden md:hidden"/>
</picture>

{/* logo sneakers */}
<picture>
<img src="logo.svg" alt=" logo" />
</picture>
</div>






{/* nav links */}
<div className="hidden md:hidden lg:block">
<ul className="lg:h-20 lg:items-center  lg:flex lg:flex-row lg:gap-5 lg:text-Dark-Grayish-Blue font-Kumbh-Sans  lg:text-md ">
{navLinks.map((link,index) => (
<li key={index} className=" hover:border-b-4  hover:text-black  hover:translate-y-0 hover:border-b-Orange-Primary cursor-pointer hover:leading-20 ">{link}</li>
))}

</ul>
</div>

</div>



<div className="flex flex-row gap-4 lg:gap-7 items-center justify-center ">

<div className="relative ">
<picture>
<img src="icon-cart.svg" alt="cart-icon" onClick={handleTogggleCartItemList} className="relative w-10 cursor-pointer" />
</picture>

<span
  className={`${cartQuantity > 0 ? "block" : "hidden"} w-5 h-4 bg-Orange-Primary absolute -top-2 left-6 rounded-full text-center text-white ease-in text-xs font-Kumbh-Sans `}
>
  {cartQuantity}
</span>

</div>


<picture>
<img src="image-avatar.png" alt="avatar" className="w-8 h-8 lg:w-15 lg:h-15 hover:ring-1 " />
</picture>

</div>

{showLinkModal && <LinkModal />}

{itemCartList && <ProductCartItemList />}
</section>
)
}
export default ProdcutHeader