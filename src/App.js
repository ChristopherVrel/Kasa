import "./App.scss";
import Router from "./Router";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Router></Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
