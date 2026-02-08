import { useEffect } from "react";
import { useProductContext } from "../hooks/ProductContext"

const LinkModal = () => {

const {handleCloseHumburgerModal ,navLinks} = useProductContext();


useEffect(() => {

const handleEscape = (event) => {
if (event.key === "Escape"){

handleCloseHumburgerModal();
}

}
window.addEventListener("keydown", handleEscape);

return () => {
window.removeEventListener("keyup", handleEscape)

}





},[handleCloseHumburgerModal])

return (


<div className="fixed inset-0 z-999 bg-Blackk/70 md:hidden lg:hidden   ">

<div className="w-50 h-full bg-white flex flex-col p-3">

<div className="h-15 mt-2">

<img src="icon-close.svg" alt="close button"  onClick={handleCloseHumburgerModal}/>
</div>

<ul className="gap-4 flex flex-col">
{navLinks.map((link,index) => (
<li key={index} className="font-Kumbh-Sans text-md font-bold ">{link}</li>
))}

</ul>


</div>



</div>


)

}
export default LinkModal