import React from 'react';
import './Content.css';

class Card extends React.Component{
    render() {
        return (
            <div className='card'>
                <img src={this.props.image} alt=""/>
            </div>
        );
    }
}

export default Card;