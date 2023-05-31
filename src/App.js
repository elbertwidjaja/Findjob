import "./App.css";
import AuthProvider from "./context/AuthContext/provider";
import EmailLogin from "./pages/authentication/EmailLogin";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <EmailLogin />
      </div>
    </AuthProvider>
  );
}

export default App;
