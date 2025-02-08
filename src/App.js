// import "./App.css";
import "./index.css";
import natureImage from "./images/image3783.png";
import Header from "./Header";

function App() {
  let displayData = () => {
    alert("Welcome to our first event");
  };
  let addData = (a, b) => {
    // console.log(a + b);
    alert(a + b);
    // document.write(addData);
  };

  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
