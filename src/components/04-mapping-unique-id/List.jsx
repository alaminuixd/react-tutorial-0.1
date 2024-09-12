import React from "react";
import "../00-card/Card.css";
import { v4 as uuidv4 } from "uuid";
const todos = [
  {
    id: uuidv4(),
    title: "Todo 1",
    descr:
      "Join us for a family reunion where we celebrate our bonds and create lasting memories.",
  },
  {
    id: uuidv4(),
    title: "Todo 2",
    descr:
      "Don't miss our annual business meeting where important company milestones will be discussed.",
  },
  {
    id: uuidv4(),
    title: "Todo 3",
    descr:
      "Celebrate the love and commitment of John and Jane's 25th wedding anniversary.",
  },
];
function List() {
  return (
    <div>
      {todos &&
        todos.map((todo) => {
          const { id, title, descr } = todo;
          return (
            <div className="card" key={id}>
              <h2 className="card-title">{title}</h2>
              <p className="card-content">{descr}</p>
            </div>
          );
        })}
    </div>
  );
}

export default List;
