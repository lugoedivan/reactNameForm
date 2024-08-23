import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Enter your name:</h2>
      <input type="text" value={name} onChange={handleInputChange} />
      <p>Hi, {name}!</p>
    </div>
  );
}
export default NameForm;
