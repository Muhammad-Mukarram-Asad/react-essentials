import React, { useReducer, useState } from "react";
import "./App.css";

function Header(props) {
  const { name, year } = props;
  return (
    <header>
      <h1>{name} Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Chicken tikka",
  "Chicken Malai Boti",
  "chicken Malai handi",
  "Beef kabab",
  "Beef Stake",
];

// Making ano objects from the above array

const dishObjects = items.map((item, i) => ({
  id: i + 1,
  title: item,
}));

function Main({ dishes, openStatus, onStatusChange }) {
  return (
    <React.Fragment>
      <div>
        <button onClick={() => onStatusChange(true)}>
          {" "}
          I want to be open{" "}
        </button>
        <h1>
          Welcome to this beautiful restaurant!!{" "}
          {openStatus ? "Open" : "Closed"}
        </h1>
      </div>
      <section>
        <img
          src={
            "https://t4.ftcdn.net/jpg/06/97/39/41/360_F_697394120_SRPrchx64unWDwjzkEdRg0ZMKVZefwSK.jpg"
          }
          // width={200}
          height={200}
          alt="Vite image"
        />
        <ol>
          {dishes.map((dish) => {
            return (
              <li key={dish.id} style={{ listStyle: "none", color: "black" }}>
                {dish.title}
              </li>
            );
          })}
        </ol>
      </section>
    </React.Fragment>
  );
}
function App() {
  // const [status, setStatus] = useState(true); // refactor it through useReducer
  const [status, toggle] = useReducer((status) => !status, true);
  return (
    <div className="main_div">
      <h1>The restaurant is current {status ? "Open" : "Closed"}.</h1>
      <button onClick={toggle}>{status ? "Open" : "Close"}</button>
      <Header name={"Mukarram's"} year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatusChange={toggle} />
    </div>
  );
}

export default App;
