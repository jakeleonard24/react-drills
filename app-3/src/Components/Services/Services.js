import React, { Component } from 'react';
import './services.css'


class Services extends Component {
    render() {
        return (
            <div className='servicesBody'>
                <div className='servicesTitle'>
                    <div>
                    <h1 className='servicesTitleTitle'>Services</h1>
                    </div>

                    <div>
                    <p className='servicesTitleSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className='servicesContent'>
                    <div className='servicesCatagoryBox'>
                        <div className='servicesImageBox'>
                            <img className='servicesContentImage' src='https://d30y9cdsu7xlg0.cloudfront.net/png/24572-200.png' />
                        </div>
                        <div>
                            <h4>E-Commerce</h4>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>

                    </div>

                    <div className='servicesCatagoryBox'>
                        <div className='servicesImageBox'>
                            <img className='servicesContentImage' src='https://cdn2.iconfinder.com/data/icons/picons-essentials/57/desktop-512.png' />
                        </div>
                        <div>
                            <h4>E-Commerce</h4>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div >
                    

                    <div className='servicesCatagoryBox'>
                        <div className='servicesImageBox'>
                            <img className='servicesContentImage' src='https://cdn1.iconfinder.com/data/icons/professions-2/512/56-512.png' />
                        </div>
                        <div>
                            <h4>E-Commerce</h4>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;