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
import UpdateObject from "./Managing State/Updating Objects/UpdateObject";
import UpdatingArray from "./Managing State/Updating Array/UpdatingArray";
import Exe from "./Managing State/Exe/Exe";
import Exe2 from "./Managing State/Exe/Exe2";
import Exe3 from "./Managing State/Exe/Exe3";
import ExpandableText from "./Managing State/Expandable/ExpandableText";
import BuildingForm from "./Building Form/Building Forms/BuildingForm";
import ReactHookForm from "./Building Form/ReactHookForm/ReactHookForm";

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
      {/* <Pure />
      <Pure />
      <Pure /> */}
      {/* <UpdateObject /> */}
      {/* <UpdatingArray /> */}
      {/* <Exe /> */}
      {/* <Exe3 /> */}
      {/* <ExpandableText maxChars={10}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nemo
        officia cupiditate, saepe maxime vel quasi enim perferendis repudiandae
        laudantium ducimus deserunt facilis nostrum aut laboriosam amet, aliquam
        quisquam distinctio harum molestias itaque sapiente sequi officiis
        porro. Vitae harum magnam corporis reiciendis ipsum dolores
        consequuntur? Et amet architecto eius quidem facilis ratione eos nobis
        inventore id consequuntur tempore quisquam eveniet, odio cum
        consectetur, rerum ea officia assumenda laborum repellat quos nihil ut
        vel neque. Excepturi consectetur debitis, ratione provident numquam
        repellendus tenetur facilis dolorum! Esse vero omnis minus harum quas,
        doloribus, facere, natus aspernatur corrupti quia itaque fugit ducimus
        ipsum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
        nemo officia cupiditate, saepe maxime vel quasi enim perferendis
        repudiandae laudantium ducimus deserunt facilis nostrum aut laboriosam
        amet, aliquam quisquam distinctio harum molestias itaque sapiente sequi
        officiis porro. Vitae harum magnam corporis reiciendis ipsum dolores
        consequuntur? Et amet architecto eius quidem facilis ratione eos nobis
        inventore id consequuntur tempore quisquam eveniet, odio cum
        consectetur, rerum ea officia assumenda laborum repellat quos nihil ut
        vel neque. Excepturi consectetur debitis, ratione provident numquam
        repellendus tenetur facilis dolorum! Esse vero omnis minus harum quas,
        doloribus, facere, natus aspernatur corrupti quia itaque fugit ducimus
        ipsum!
      </ExpandableText> */}

      {/* <BuildingForm /> */}
      <ReactHookForm />
    </div>
  );
}
export default App;
