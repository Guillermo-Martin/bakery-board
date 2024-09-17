import LoginForm from "./../components/LoginForm";

// get access to the redux store
import { useSelector } from "react-redux";

function LoginPage() {
  // get info from redux store
  const item = useSelector((state) => {
    return (state.item + state.counter);
  });

  // console.log the item in the redux store
  console.log("line 12", item);


  return (
    <div>
      {/* ---------- Image and text content ---------- */}
      <div>
        <img src="https://picsum.photos/200" alt="random" />
        <h1>Bakery Board</h1>
        <p>A place to reduce waste by selling unsold food</p>
      </div>
      

      {/* --------- Login form ---------- */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
