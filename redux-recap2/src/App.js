import Book from "./component/Book";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Product from "./component/Product";

function App() {
  console.log("LOGGER: App.js:");

  return (
    <div className="m-2">
      <h1 className="text-4xl text-center font-semibold">Redux with React - Recap</h1>
      <div className="my-10 flex justify-center items-center">
        <Cart />
      </div>
      <div className="flex justify-between items-start">
        <Home /><Book /><Product />
      </div>
    </div>
  );
}

export default App;
