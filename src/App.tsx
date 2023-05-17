import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="App">
      {/* <ListGroup items={items} heading="Cities" onSelect={handleSelectItem} /> */}

      <Alert>
        Hello <span> World</span>
      </Alert>
    </div>
  );
}
export default App;
