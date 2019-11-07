import React from 'react';
import './Content.css';

class AboutUs extends React.Component {
    render() {
        return(
            <div className="aboutUs">
                <div className="container">
                    <h2 className="aboutTitle">About us </h2>
                    <p>We are a growing company that has over 10 branches all over the world. Our headquarters is located in Bishkek.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut cupiditate delectus enim est et eum explicabo in, iusto neque nisi omnis pariatur quae quidem repellendus sequi sit, unde, vero.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;