import LoginForm from "./../components/LoginForm";

function LoginPage() {
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
