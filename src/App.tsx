/* import { useState } from "react";
import Alert from "./components/Alert/Alert";
import ExeAlert from "./components/Exe1/ExeAlert";
import ExeButton from "./components/Exe1/ExeButton";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Exe1/Like"; */

import { useState } from "react";
import StateStructer from "./Managing State/state structer/StateStructer";
import Pure from "./Managing State/Pure Component/Pure";

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
  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  /* const [isVisible, setVisibility] = useState(false);
  const handleClick = () => {
    console.log(isVisible);
    setVisibility(true);
    console.log(isVisible);
  }; */
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

      {/* <Nav cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}
      {/*  <button onClick={handleClick}>Show</button> */}
      {/* <StateStructer /> */}
      <Pure />
      <Pure />
      <Pure />
    </div>
  );
}
export default App;
