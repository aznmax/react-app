import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Banniere from "./Banniere";
import Homepage from "./Homepage";
import Footer from "./Footer";
import About from "./About";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <BrowserRouter>
                    <Banniere />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;
