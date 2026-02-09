import { useProductContext } from "../hooks/ProductContext"

const ProductCheckOut = () => {
const {timeThankyouMessage}=useProductContext();

return(
<div className="bg-white  w-full h-60 rounded-lg flex flex-col items-center justify-center gap-4  lg:w-96 lg:h-72">
<p className="font font-Kumbh-Sans text-Dark-Grayish-Blue text-center font-bold ">

THANKS FOR YOUR PURCHASE!
</p>

<p className="text-center text-Dark-Grayish-Blue text-wrap text-lg">check your email for the order confirmation......{timeThankyouMessage}</p>


</div>


)
}

export default ProductCheckOut