import ProductPage from "./Components/ProductPage"
import ProductHeader from "./Components/ProductHeader"
import ProductProvider from "./hooks/ProductContext"


const App = () => {

return (
<>
<ProductProvider>
<header className="w-auto relative  h-20 lg:h-25 ">
<nav className="absolute w-full  md:w-full lg:w-5xl lg:left-55 h-auto border-b border-Dark-Grayish-Blue">
 
  <ProductHeader />

</nav>
</header>


<main className="w-auto h-screen ">
  <ProductPage />

  <div className="place-self-center mt-20">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="github.com/KLapitan">Karl Lapitan</a>.
  </div>
</main>
</ProductProvider>
</>

)
}
export default App