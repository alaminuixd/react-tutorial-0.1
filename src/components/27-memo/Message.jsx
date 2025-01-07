import React, { memo, useState } from "react";

const Message = memo(({ messageCount, onMessageCount }) => {
  const [toggle, setToggle] = useState(false);
  console.log("message rendering");
  return (
    <div>
      <h1>Message Component {messageCount}</h1>
      <button onClick={(e) => onMessageCount()}>Increment Message</button>
      {toggle ? <h2>On</h2> : <h2>Off</h2>}
      <button onClick={(e) => setToggle(!toggle)}>Change</button>
    </div>
  );
});

export default Message;
