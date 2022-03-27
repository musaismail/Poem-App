
import PoemList from "./PoemList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoemDetails from "./PoemDetail";
import Favourite from "./Favourite";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/:title" element={<PoemDetails />} />
        <Route exact path="/my-favorite" element={<Favourite />} />
        <Route exact path="/" element={<PoemList />} />
      </Routes>
    </Router>
  );
}

export default App;