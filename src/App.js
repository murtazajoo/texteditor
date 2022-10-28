import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const theme = {
    light: {
      backgroundColor: "#c5feff90",
      color: "#051d24",
      text: "light",
    },
    blue: {
      backgroundColor: "#051d24",
      color: "#c5feff90",
      text: "info",
    },
    dark: {
      backgroundColor: "#333",
      color: "#f9f9f9",
      text: "dark",
    },
  };

  const [mode, setmode] = useState(theme.light);
  const [alert, setAlert] = useState(null);

  const alertMaker = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const themeHandle = (clr) => {
    let bodyBg = document.body;
    if (clr === "light") {
      setmode(theme.light);
      bodyBg.style.backgroundColor = theme.light.backgroundColor;
      alertMaker("Light Mode Enabled", "dark");
      document.title = "TextUtlis - Light Mode";
    } else if (clr === "dark") {
      setmode(theme.dark);
      bodyBg.style.backgroundColor = theme.dark.backgroundColor;
      alertMaker("Dark Mode Enabled", "light");
      document.title = "TextUtlis - Dark Mode";
    } else {
      setmode(theme.blue);
      bodyBg.style.backgroundColor = theme.blue.backgroundColor;
      alertMaker("Abyss Theme Enabled", "light");
      document.title = "TextUtlis - Abyss Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Learning" mode={mode} themeHandle={themeHandle} />
        <Alert alert={alert} />
        <div className="container mt-1">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Words Tool"
                  mode={mode}
                  alertMaker={alertMaker}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
