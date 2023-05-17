import Alert from "./components/Alert";
import ExeButton from "./components/ExeButton";
import ListGroup from "./components/ListGroup";

function App() {
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
      {/* <Alert>
        Hello <span> World</span>
      </Alert> */}
      <ExeButton /* color="red" */ onClick={handleOnClick}>MyBUtton</ExeButton>
    </div>
  );
}
export default App;
