// import "./App.css";
import "./index.css";
import natureImage from "./images/image3783.png";
import Header from "./Header";
import { useState } from "react";

function App() {
  // usestate
  let temple = "";
  let [count, setCount] = useState(1);
  let [pshow, setPshow] = useState(true);
  // let n = 10;
  // if (pshow) {
  //   temple = (
  //     <>
  //       <button className="btn btn-primary" onClick={() => setPshow(!pshow)}>
  //         Hide
  //       </button>
  //       <p>Wlcome to our new website</p>
  //     </>
  //   );
  // } else {
  //   temple = (
  //     <button className="btn btn-primary" onClick={() => setPshow(!pshow)}>
  //       Show
  //     </button>
  //   );
  // }

  if (pshow) {
    temple = <Card />;
  } else {
    temple = "";
  }

  let displayData = () => {
    setCount(count + 1);
    // n = n + 1;
    // console.log(n);
    // alert("Welcome to our first event");
  };
  let addData = (a, b) => {
    console.log(a + b);
    alert(a + b);
    // document.write(addData);
  };

  return (
    <div className="App">
      <Header />
      <br />
      {temple}
      <br />
      {/* <p>Welcome to our website</p> */}
      <img src={natureImage} />

      <h1 className="text-[9px] text-red-900 font-bold">
        Hello Welcome to the tailwind css project
      </h1>
      <button className="btn btn-primary" onClick={displayData}>
        Save
      </button>
      <br />
      <br />

      <button
        className="btn btn-danger text-white"
        onClick={() => addData(10, 20)}
      >
        Add Data
      </button>
      <br />
      <br />
      {/* {n} */}
      {count}
      <br />
    </div>
  );
}

let Card = () => {
  return <h2>Hello welcome to our website</h2>;
};
export default App;
