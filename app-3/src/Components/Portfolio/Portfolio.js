import React, { Component } from 'react';
import './Portfolio.css'

class Portfolio extends Component {
    render() {
        return (
            <div className='portfolioBody'>
                <div className='portfolioTitle'>
                    <div>
                    <h1 className='portfolioTitleTitle'>Portfolio</h1>
                    </div>

                    <div>
                    <p className='portfolioTitleSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className='portfolioContent'>
                    <div className='portfolioContentRow'>
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                                <img className='portfolioContentImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-full.jpg' />
                            </div>

                            <div>
                                <h4>Threads</h4>
                                <p>Illustration</p>
                            </div>

                        </div>
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                                <img className='portfolioContentImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-full.jpg' />
                            </div>

                            <div>
                             <h4>Threads</h4>
                                <p>Illustration</p>
                            </div>

                        </div>
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                                <img className='portfolioContentImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-full.jpg' />
                            </div>
                            <div>
                                <h4>Threads</h4>
                                <p>Illustration</p>
                            </div>

                        </div>
                    </div>

                    <div className='portfolioContentRow'>
                        <div className='portfolioContentBox'>

                            <div className='portfolioContentImageBox'>
                                <img className='portfolioContentImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-full.jpg' />
                            </div>
                            <div>
                                <h4>Threads</h4>
                                <p>Illustration</p>
                            </div>
                            

                        </div>
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                                 <img className='portfolioContentImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-full.jpg' />
                            </div>
                            <div>
                                <h4>Threads</h4>
                                <p>Illustration</p>
                            </div>

                        </div>
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                                 <img className='portfolioContentImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-full.jpg' />
                            </div>
                            <div>
                                <h4>Threads</h4>
                                <p>Illustration</p>
                            </div>

                        </div>
                    </div>

                </div>

                </div>
        );
    }
}

export default Portfolio;