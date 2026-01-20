import ProductPage from "./ProductPage"
import ProductHeader from "./ProductHeader"

const App = () => {
return (
<>
<header className="w-auto h-20 border border-green-500">
<nav>
  <ProductHeader />
</nav>
</header>


<main className="w-auto h-auto border border-red-500">
  <ProductPage />

</main>
</>

)
}
export default App