function Button({ children }){
  // ---------- Functions ----------
  const handleOnClick = () => {
    console.log("you clicked on me!");
  }

  return <button onClick={handleOnClick}>{children}</button>;
};

export default Button;
