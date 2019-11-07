import React from 'react';
import '../../App.css';
import './Footer.css';

class Footer extends React.Component{
    render() {
        return (
            <div className="Footer">
                <div className="contacts">
                    <span>You can contact us via:</span><br/>
                    <span>Phone numbers: +996 778 78 78 78</span><br/>
                    <span>Phone numbers: +996 558 58 58 58</span><br/>
                </div>
                <div className="copyright">
                    <p>All rights reserved</p>
                    <p>	&copy; Beksultan Kadyrbekov</p>
                </div>
            </div>
        );
    }
}

export default Footer;