import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header  from "./Header";
import Banniere from "./Banniere"



class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                <Banniere/>
                    <Routes>
                        <Route path="/" element={<p>test</p>}/>
                        <Route path="/users" element={<p>Test2</p>} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
