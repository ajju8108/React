/* import { useState } from "react";
import Alert from "./components/Alert/Alert";
import ExeAlert from "./components/Exe1/ExeAlert";
import ExeButton from "./components/Exe1/ExeButton";
import ListGroup from "./components/ListGroup";
import { BsFillCalendarFill } from "react-icons/bs";
import Like from "./components/Exe1/Like"; */
import { useEffect, useRef, useState } from "react";
import ReactHookForm from "./Building Form/ReactHookForm/ReactHookForm";
import ExpenseList from "./Expense Tracker/components/ExpenseList";
import ExpenseFilter from "./Expense Tracker/components/ExpenseFilter";
import { Category } from "@mui/icons-material";
import ExpenseForm from "./Expense Tracker/components/ExpenseForm";
import categories from "./Expense Tracker/categories";

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

  /*   const [selectedcategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);
  const visibleExpenses = selectedcategory
    ? expenses.filter((e) => e.category === selectedcategory)
    : expenses; */

  /* Connecting to backend*/

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });
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
      {/* <ReactHookForm /> */}
      {/* <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) =>
            console.log(setSelectedCategory(category))
          }
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      /> */}

      {/* Connecting the backends */}
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}
export default App;
