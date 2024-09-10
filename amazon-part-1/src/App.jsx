import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./componenet/header/Header";
import Lowerheader from "./componenet/header/Lowerheader";
import Carouseleffect from "./componenet/carousel/Carouseleffect";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Lowerheader />
      <Carouseleffect />
    </>
  );
}

export default App;
