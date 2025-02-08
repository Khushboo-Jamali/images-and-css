// import "./App.css";
import "./index.css";
import natureImage from "./images/image3783.png";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={natureImage} />
      <h1 className="text-[9px] text-red-900 font-bold">
        Hello Welcome to the tailwind css project
      </h1>
    </div>
  );
}

export default App;
