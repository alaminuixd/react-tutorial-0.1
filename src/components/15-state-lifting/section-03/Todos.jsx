import Todo from "./Todo";
import "./Todos.css";
function Todos(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </ul>
  );
}
export default Todos;
