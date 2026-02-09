import { createContext, useContext ,useEffect ,useState } from "react";


const navLinks = ["Collections", "Men", "Women", "About", "Contact" ]


// so all the logic and data where based on how many items on the cart thats why the add and delete cart was not having a arguement value  

// normally we passed some id on this function but since we only have one product and one cart item we can just directly delete the cart item without passing any id or value since we only have one cart item and one product data

const ProductContext = createContext()



const ProductProvider =({ children }) => {

// data of the product
const [productData,setProductData] = useState(null)

// state for product quantity
const [productQuantity,setProductQuantity]=useState({})

// get product images from product data
const productImages = productData?.images ?? [];

// image index state 
const [activeImageIndex ,setActiveImageIndex] = useState(0)

const productThumbnails = productData?.thumbnails ?? [];

const currentImageActive = productImages[activeImageIndex]

// check if the product have already have quantity if true it show but it not it will show 0
const itemQuantity = productQuantity?.quantity ?? 0 

const [cartItems,setCartItems] = useState([])

const [cartNumberOfItems,setCartNumberOfItems]=useState(false)

// const [currentImageThumbnailActive,setCurrentImageThumbnailActive] = useState(null)

// const hideButton = imageIndex === 0 ? true : false

// immage preview modal state
const [showModal,setShowModal]=useState(false)

//  hamburger modal state
const [showLinkModal,setShowLinkModal]=useState(false)

// cart item list modal state
const [itemCartList,setItemCartList]=useState(false)


const [isCheckOut,setIsCheckOut] = useState(false)

const [timeThankyouMessage,setTimeThankyouMessage] = useState(5)



useEffect(() => {
const fetchProductData = async () => {

try{
  const response = await fetch('/data.json')
  const data = await response.json()
  setProductData(data)

console.log("Product data fetched:", data)

}
catch (error){
console.error("Error fetching product data:", error)
}


}

fetchProductData()
}, [])



const handleNextImage = () => {
setActiveImageIndex(prev => prev === productImages.length -1 ? 0 : prev + 1)

}
const handlePreviousImage = () => {
setActiveImageIndex(prev  => prev === 0 ? productImages.length - 1 : prev - 1)
}

const handleTogggleCartItemList = () => {
setItemCartList(prev => !prev)
}



const handleOpenHumburgerModal =() => {
setShowLinkModal(true)
console.log("humberger modal opened")
}

const handleCloseHumburgerModal =() => {

setShowLinkModal(false)
}


const handleOpenModal = () => {

setShowModal(true)
console.log("modal opened")
}

const handleCloseModal = () => {
setShowModal(false)
}

const handleIncreaseQuantity =() => {
// check natin ung product id if product id is equal to id then create quanty property and increase 1 

const updateProductQuantity = prev =>  ({...prev, quantity: (prev.quantity  ?? 0 ) + 1});

setProductQuantity(updateProductQuantity)


}
const handleDecreaseQuantity =() => {

// same logic sa add quantity pero magdedecrese naman tayo tas if ung item quantity is 0 or less wag na magdecrease kaya may math.x and 0 ung border line nung quantity

const updateProductQuantity = prev => ({...prev, quantity: Math.max(0, prev.quantity -1)}) 

setProductQuantity(updateProductQuantity)
}



// handle add to cart function 

const handleAddToCart = () => {

const price = productData?.currentPrice

// add these quantity/append to data of the product // problem we adding the whole object isntead of the quantity only


if(itemQuantity === 0) return //do nothing

const updateQuantityObject= [{price , quantity:itemQuantity}]

setCartItems(updateQuantityObject)
setCartNumberOfItems(true)

console.log("Cart Items:", updateQuantityObject)

}

const handleDeleteCartitem = () => {
setCartItems([])
setProductQuantity({quantity: 0})
console.log("Cart item deleted", itemQuantity)

}

const handleCheckOut = () => {

const total = cartItems.reduce((sum,item) => sum + item.price * item.quantity,0)

const updatedTotal = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
console.log("shopping cart checkout",updatedTotal)
setIsCheckOut(true)
setItemCartList(false)
setCartItems([])
setProductQuantity({quantity: 0})
}



return (

<ProductContext.Provider value={{navLinks,productData, productQuantity,productImages,activeImageIndex,productThumbnails,currentImageActive,itemQuantity,cartItems,showModal,cartNumberOfItems,showLinkModal,itemCartList,setActiveImageIndex,handleNextImage, handlePreviousImage,handleOpenHumburgerModal,handleCloseHumburgerModal,handleOpenModal,handleCloseModal,handleIncreaseQuantity, handleDecreaseQuantity, handleAddToCart, handleTogggleCartItemList,handleDeleteCartitem,handleCheckOut,isCheckOut,timeThankyouMessage,setTimeThankyouMessage,setIsCheckOut}} >


{children}
</ProductContext.Provider>
)

}
export default ProductProvider



export const useProductContext = () => useContext(ProductContext)