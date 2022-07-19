import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/material";
import AuthProvider from "./components/contexts/AuthContext";
import NavBar from "./components/NavBar";
import RoutersInfo from "./components/RoutersInfo";
function App() {
  return (
    <Container maxWidth="sm">
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
