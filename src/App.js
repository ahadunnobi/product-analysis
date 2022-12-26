import { Route, Routes } from "react-router";
import "./App.css";
import About from "./componant/About/About";
import A404 from "./componant/Aleart/A404";
import Blog from "./componant/Blog/Blog";
import Dasboard from "./componant/Dashboard/Dasboard";
import Header from "./componant/Header/Header";
import Home from "./componant/Home/Home";
import Review from "./componant/Review/Review";

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dasboard></Dasboard>}></Route>
        <Route path="/bolg" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<A404></A404>}></Route>
      </Routes>
    </div>
  );
}

export default App;
