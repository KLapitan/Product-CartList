import ProductPage from "./ProductPage"
import ProductHeader from "./ProductHeader"

const App = () => {
return (
<>
<header className="w-auto relative  h-20 lg:h-25 border-green-500">
<nav className="absolute w-full   lg:w-5xl lg:left-54  h-auto border-b border-Dark-Grayish-Blue">
  <ProductHeader />
</nav>
</header>


<main className="w-auto h-screen ">
  <ProductPage />

</main>
</>

)
}
export default App