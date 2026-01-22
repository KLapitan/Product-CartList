import ProductPage from "./ProductPage"
import ProductHeader from "./ProductHeader"

const App = () => {
return (
<>
<header className="w-auto relative  h-20 lg:h-25 border-green-500">
<nav className="absolute w-5xl left-54  h-full border-b border-Dark-Grayish-Blue">
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