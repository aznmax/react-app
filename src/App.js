import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import Footer from "./Footer";
import About from "./About";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
