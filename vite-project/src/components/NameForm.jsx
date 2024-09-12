import { useState } from "react";

function NameForm() {
  //Here we create the variable we want to use and we asign a usestate to be able to update its value
  const [name, setName] = useState("");

  //Here we create a function to update the variable value from the input
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Enter your name:</h2>
      {/* This allows the input to be  updated in real time */}
      <input type="text" value={name} onChange={handleInputChange} />
      {/* Here we display the input */}
      <p>Hi, {name}!</p>
    </div>
  );
}
export default NameForm;
