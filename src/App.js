import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Typio - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Typio - Light mode";
    }
  }; //Dark Mode enabled or not
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Typio"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
