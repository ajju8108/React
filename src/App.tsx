import { useState } from "react";
import Alert from "./components/Alert";
import ExeAlert from "./components/Exe1/ExeAlert";
import ExeButton from "./components/Exe1/ExeButton";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Exe1/Like";

function App() {
  const [alertVisible, setalertVisible] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleOnClick = () => {
    console.log("button clicked");
  };

  return (
    <div className="App">
      {/* <ListGroup items={items} heading="Cities" onSelect={handleSelectItem} /> */}

      {/* {alertVisible && (
        <ExeAlert onClose={() => setalertVisible(false)}>My Alert</ExeAlert>
      )} */}
      {/* <ExeButton onClick={() => setalertVisible(true)}>MyBUtton</ExeButton> */}
      {/* <BsFillCalendarFill color="red" size={60} /> */}
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}
export default App;
