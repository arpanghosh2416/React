import BookContainer from "./container/BookContainer";
import CartContainer from "./container/CartContainer";
import HomeContainer from "./container/HomeContainer";
import ProductContainer from "./container/ProductContainer";

function App() {
  return (
    <div className="m-2">
      <h1 className="text-4xl text-center font-semibold">Redux with React - Recap</h1>
      <div className="my-10 flex justify-center items-center">
        <CartContainer />
      </div>
      <div className="flex justify-between items-center">
        <HomeContainer /><BookContainer /><ProductContainer />
      </div>
    </div>
  );
}

export default App;
