import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { About } from "./pages/About/About";
import Error from "./pages/Error/Error";
import Property from "./pages/Property/Property";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/property/:id" element={<Property/>} />
            <Route path="*" element={<Error defaultState={{ status: 404 }} />}/>
        </Routes>
    )
}
  
export default Router;