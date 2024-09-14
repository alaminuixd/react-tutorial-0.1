import MyCard from "./partial/MyCard";
import "./Bootstrap.css";

function BootStrap() {
  return (
    <div className="card-container">
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </div>
  );
}

export default BootStrap;
