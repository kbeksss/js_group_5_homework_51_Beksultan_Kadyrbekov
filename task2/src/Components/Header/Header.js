import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <header className="main-header">
                <div className="container main-header__container">
                    <h2><a href="#">Some Interesting Website</a></h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Vacancies</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;