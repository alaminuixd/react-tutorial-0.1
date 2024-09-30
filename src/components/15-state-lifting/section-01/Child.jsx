function Child(props) {
  const data = "Lifted data from the child component.";

  const handleClick = () => {
    props.onChildData(data); // Send the data to the parent when the button is clicked
  };

  return (
    <div>
      <h1>I am from the child component</h1>
      <h1>{props.data}</h1>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
