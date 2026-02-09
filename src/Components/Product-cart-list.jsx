
import { useProductContext } from "../hooks/ProductContext"

const ProductCartItemList = () => {

const {cartItems,productData,handleDeleteCartitem,handleCheckOut, }=useProductContext()



const hasItemsInCart = cartItems.length > 0






return (
<div className="absolute top-22 left-2 xs:left-28 xs:top-20 sm:w-80 sm:left-90 sm:top-21 md:left-120 shadow-lg ease-in  w-73  lg:w-84  h-60  bg-white rounded-lg z-40   lg:top-19   lg:left-194 lg:shadow-xl">

<div className="border-b-2 border-b-gray-300   h-14">
<p className="p-4 font-Kumbh-Sans font-bold text-lg">Cart</p>
</div>

<div>

{hasItemsInCart ? (
<>
<ul>
  {cartItems.map((item, index) => (
    <li key={index} className="flex items-center gap-4 p-4  flex-row">
      <div>
     <img src={productData?.images[0]} alt={productData?.name} className="w-13 h-12 rounded-md" />
      </div>
<div>
    <p className="text-xs  font-Kumbh-Sans text-Dark-Grayish-Blue">{productData.name}</p>
    <p className="text-md font-Kumbh-Sans text-Dark-Grayish-Blue ">
     $ {item.price}.00 x {item.quantity}<span className="font-bold text-black"> ${item.price * item.quantity}.00</span>
    </p>
</div>

<div className="p-2">
<img src="icon-delete.svg" alt="delete item" className="w-4 h-4 cursor-pointer"  onClick={handleDeleteCartitem}/>
</div>
    </li>
  
  ))}

</ul>

<div className="p-2 flex items-center justify-center">
<button className="rounded-lg bg-Orange-Primary w-69 lg:w-72 h-12 font-Kumbh-Sans font-bold "
onClick={handleCheckOut}
>Checkout</button>
</div>

</>

):(


<p className="p-4 font-Kumbh-Sans font-bold text-lg text-Dark-Grayish-Blue text-center mt-10">Your cart is empty.</p>

)}

</div>


</div>



)
}
export default ProductCartItemList