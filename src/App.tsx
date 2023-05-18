import { useState } from "react";
import Alert from "./components/Alert";
import ExeAlert from "./components/ExeAlert";
import ExeButton from "./components/ExeButton";
import ListGroup from "./components/ListGroup";

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
      <ListGroup items={items} heading="Cities" onSelect={handleSelectItem} />

      {/* {alertVisible && (
        <ExeAlert onClose={() => setalertVisible(false)}>My Alert</ExeAlert>
      )}
      <ExeButton onClick={() => setalertVisible(true)}>MyBUtton</ExeButton> */}
    </div>
  );
}
export default App;
