import React from 'react';
import AboutUs from './AboutUs';
import Gallery from "./Gallery";

class Content extends React.Component{
    render(){
        return (
            <div className="content">
                <AboutUs/>
                <Gallery/>
            </div>
        );
    }
}


export default Content;