import "./App.css"
import Private from "./Private";
import Login from "./components/Login/Login";
import { useAuth } from "./hooks/useAuth";
function App() {
  const { token } = useAuth();
  if (token) {
    return <Private />;
  }
  return <Login />;
}

export default App;
