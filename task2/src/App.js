import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";

class App extends Component {
    render(){
        return(
            <div className="App">
                <Header/>
                <div className="Background">
                </div>
                <Content/>
                <Sidebar/>
                <Footer/>
            </div>
        );
    }
}

export default App;
