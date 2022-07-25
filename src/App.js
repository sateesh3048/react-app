import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AuthProvider from "./components/contexts/AuthContext";
import NavBar from "./components/NavBar";
import RoutersInfo from "./components/RoutersInfo";
function App() {
  return (
    <Container fluid>
      <AuthProvider>
        <Router>
          <NavBar />
          <RoutersInfo />
        </Router>
      </AuthProvider>
    </Container>
  );
}

export default App;
