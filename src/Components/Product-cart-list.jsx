import { useProductContext } from "../hooks/ProductContext"

const ProductCartItemList = () => {

const {cartItems,productData,handleDeleteCartitem }=useProductContext()


const hasItemsInCart = cartItems.length > 0

return (
<div className="absolute top-22 left-2 w-76  h-60  bg-white rounded-lg z-40   lg:top-19   lg:left-182 lg:shadow-lg">

<div className="border-b border-b-Dark-Grayish-Blue h-17">
<p className="p-4 font-Kumbh-Sans font-bold text-lg">Cart</p>
</div>

<div>

{hasItemsInCart ? (
<ul>
  {cartItems.map(item => (
    <li key={item.id} className="flex items-center gap-4 p-4  flex-row">
      <div>
     <img src={productData?.images[0]} alt={productData?.name} className="w-12 h-12 rounded-md" />
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

):(


<p className="p-4 font-Kumbh-Sans font-bold text-lg text-Dark-Grayish-Blue text-center mt-10">Your cart is empty.</p>

)}

</div>
<div className="p-2 flex items-center justify-center">
<button className="rounded-lg bg-Orange-Primary w-69 h-15 font-Kumbh-Sans font-bold ">Checkout</button>
</div>


</div>



)
}
export default ProductCartItemList