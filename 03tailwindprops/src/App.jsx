import "./App.css";
import Card from "./components/Card";

function App() {
  // let obj = {
  //   username: "Koustav",
  //   age: 25,
  // };

  // let newArr = [1, 2, 3];

  return (
    <>
      <h1>My Name is Koustav. I am from Kolkata.</h1>
      <Card username="Koustav" btnText="click me"/>
      <Card username="hitesh" />
    </>
  );
}

export default App;
