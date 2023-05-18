/* import { useState } from "react";
import Alert from "./components/Alert/Alert";
import ExeAlert from "./components/Exe1/ExeAlert";
import ExeButton from "./components/Exe1/ExeButton";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Exe1/Like"; */

import { useState } from "react";
import Cart from "./Managing State/Sharing State/Cart";
import Nav from "./Managing State/Sharing State/Nav";

function App() {
  /*  const [alertVisible, setalertVisible] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleOnClick = () => {
    console.log("button clicked");
  }; */
  {
    /* Managing State */
  }
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div className="App">
      {/*  <ListGroup items={items} heading="Cities" onSelect={handleSelectItem} />

      {alertVisible && (
        <ExeAlert onClose={() => setalertVisible(false)}>My Alert</ExeAlert>
      )}
      <ExeButton onClick={() => setalertVisible(true)}>MyBUtton</ExeButton>
      <BsFillCalendarFill color="red" size={60} />
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      /> */}

      {/* Managing State */}

      <Nav cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}
export default App;
