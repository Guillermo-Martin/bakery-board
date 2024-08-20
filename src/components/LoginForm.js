import { useState } from "react";

function LoginForm() {
  // ---------- State ----------
  const [formInputs, setFormInputs] = useState({});
  
  // ---------- Functions ----------
  // handling multiple inputs:  https://stackoverflow.com/questions/63710791/react-hooks-handle-multiple-inputs
  const handleInputs = (event) => {
    // get the name and value from the form inputs
    const inputName = event.target.name;
    const inputValue = event.target.value;

    // update the state for the form (take the previous state, add it to a new object,
    // add the input's name and value to a new object, return the new object, and use
    // it to update the form state)
    setFormInputs(prevState => ({...prevState, [inputName]:inputValue}));
  };

  // ---------- JSX to return ----------
  return (
    <div>
      <p>Login form</p>

      {/* ---------- Form ---------- */}
      <form>
        <label>Username</label>
        <input type="text" id="username" name="username" value={formInputs.username || ""} onChange={handleInputs} />

        <label>Password</label>
        <input type="text" id="password" name="password" value={formInputs.password || ""} onChange={handleInputs} />

        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
