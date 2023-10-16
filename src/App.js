import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Routes path="/*">
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<Project />} />
        {/* <Route path="/project/billy" element={<Billy />} />
        <Route path="/project/everypage" element={<Everypage />} /> */}
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
