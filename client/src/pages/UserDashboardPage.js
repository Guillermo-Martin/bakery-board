import ItemCard from "./../components/ItemCard";
import Button from "./../components/Button";

function UserDashboardPage(){
  return (
    <div>
      {/* ---------- Picture and text content ---------- */}
      <div>
        <h1>Welcome, user!</h1>
        <p>Oakland Bakery</p>
        <p>3244 Temescal Ave.</p>
        <p>Oakland, CA 94609</p>
      </div>

      {/* ---------- Main content (display case and buttons) ---------- */}
      <div>
        {/* ----- Display case ----- */}
        <div>
          <h2>Display case:</h2>
          <p>Here's what you put up for sale:</p>
          <div>
            <ItemCard itemName={"Chocolate croissant"} itemPrice={"$3.99"} itemImg={"https://picsum.photos/200"} itemAlt={"something"} />
            <ItemCard itemName={"Chocolate croissant"} itemPrice={"$3.99"} itemImg={"https://picsum.photos/200"} itemAlt={"something"} />
            <ItemCard itemName={"Chocolate croissant"} itemPrice={"$3.99"} itemImg={"https://picsum.photos/200"} itemAlt={"something"} />
          </div>
        </div>


        {/* ----- Buttons ----- */}
        <div>
          <h2>What do you want to do?</h2>
          <Button>Sell a new item</Button>
          <Button>Sell existing item</Button>
        </div>
        
      </div>
    </div>
  );
}

export default UserDashboardPage;
