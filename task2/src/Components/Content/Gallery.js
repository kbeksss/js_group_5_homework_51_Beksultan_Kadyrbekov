import React from 'react';
import Card from "./Card";
import './Content.css'

class Gallery extends React.Component{
    render() {
        return (
            <div className="gallery">
                <h2>Gallery</h2>
                <Card image="http://lorempixel.com/output/nature-q-c-400-300-3.jpg"/>
                <Card image="http://lorempixel.com/output/nature-q-c-400-300-8.jpg"/>
                <Card image="http://lorempixel.com/output/nature-q-c-400-300-4.jpg"/>
                <Card image="http://lorempixel.com/output/nature-q-c-400-300-5.jpg"/>
                <Card image="http://lorempixel.com/output/nature-q-c-400-300-2.jpg"/>
                <Card image="http://lorempixel.com/output/nature-q-c-400-300-1.jpg"/>
                <Card image="http://lorempixel.com/output/nature-q-c-400-300-6.jpg"/>
            </div>
        );
    }
}

export default Gallery;