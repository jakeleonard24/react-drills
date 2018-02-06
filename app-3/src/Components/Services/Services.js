import React, { Component } from 'react';
import './services.css'


class Services extends Component {
    render() {
        return (
            <div id='services'>  
            <div  className='servicesBody'>
                <div className='servicesTitle'>
                    <div>
                    <h1 className='servicesTitleTitle'>Services</h1>
                    </div>

                    <div>
                    <p className='servicesTitleSubtitle'>What can you expect when you hire me?</p>
                    </div>
                </div>
                <div className='servicesContent'>
                    <div className='servicesCatagoryBox'>
                        <div className='servicesImageBox'>
                            <img className='servicesContentImage' src='http://freevector.co/wp-content/uploads/2010/12/191-cell-phone1.png' />
                        </div>
                        <div>
                            <h4>Mobile Design</h4>
                        </div>
                        <div>
                            <p>Make your website mobile responsive. Go ahead, try this page on your mobile device.</p>
                        </div>

                    </div>

                    <div className='servicesCatagoryBox'>
                        <div className='servicesImageBox'>
                            <img className='servicesContentImage' src='https://cdn2.iconfinder.com/data/icons/picons-essentials/57/desktop-512.png' />
                        </div>
                        <div>
                            <h4>Web Developement</h4>
                        </div>
                        <div>
                            <p>Get your site looking great and functioning like a dream with React|Redux|JavaScript|HTML|CSS.
                            </p>
                        </div>
                    </div >
                    

                    <div className='servicesCatagoryBox'>
                        <div className='servicesImageBox'>
                            <img className='servicesContentImage' src='http://pledgie.com/assets/campaigns/23315/medium/database-logo.png?1390316899' />
                        </div>
                        <div>
                            <h4>Manage Data</h4>
                        </div>
                        <div>
                            <p>Use RESTful API's and store your data efficiently with PostgreSQL|Node.js|Express.js.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Services;