import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About";
import Homepage from "./pages/Homepage"
import Property from "./pages/LocationPage";
import Error from "./pages/Error";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/AppartmentPage/:id" element={<Property />} />
                        <Route path="/*" element={<Error />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
