import logo from "./logo.svg";
import Header from "./components/elements/Header/Header";
import Home from "./components/Home/Home";

import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setMovie, setPerPage } from "./redux/movie/movie.actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMovie());
    dispatch(setPerPage());
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
