import LoginForm from "./components/LoginForm";
import ItemCard from "./components/ItemCard";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>My app</h1>
      <LoginForm />
      <ItemCard itemName="Croissant" itemDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." itemPrice="$5.99" itemImg="https://picsum.photos/300" imgAlt="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <ItemCard itemName="Bread" itemDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." itemPrice="$5.99" itemImg="https://picsum.photos/300" imgAlt="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <ItemCard itemName="Cookie" itemDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." itemPrice="$5.99" itemImg="https://picsum.photos/300" imgAlt="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Button>Button #1</Button>
      <Button>Button #2</Button>
      <Button>Button #3</Button>
    </div>
  );
}

export default App;
