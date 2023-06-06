import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthContext/provider";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
