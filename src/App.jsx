import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ClassComponent from "./pages/ClassComponent";
import MountingPage from "./pages/MountingPage";
import UseEffectPage from "./pages/UseEffectPage";
import UpdatePage from "./pages/UpdatePage";
import DisplayCharacters from "./pages/DisplayCharcters";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MountingPage />} />
        <Route path="/class-component" element={<ClassComponent />} />
        <Route path="/page3" element={<UseEffectPage />} />
        <Route path="/page4" element={<UpdatePage />} />
        <Route path="/page5" element={<DisplayCharacters />} />
      </Routes>
    </>
  );
}

export default App;
