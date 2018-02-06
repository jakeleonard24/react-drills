import React, { Component } from 'react';
import './Portfolio.css'

class Portfolio extends Component {
    render() {
        return (
            <div id='portfolio'>
            <div  className='portfolioBody'>
                <div className='portfolioTitle'>
                    <div>
                    <h1 className='portfolioTitleTitle'>Portfolio</h1>
                    </div>

                    <div>
                    <p className='portfolioTitleSubtitle'>Some of the sites and projects I've done.</p>
                    </div>
                </div>

                <div className='portfolioContent'>
                    <div className='portfolioContentRow'>
                
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                                <a href='https://typeoneinfo.now.sh/#/'><img className='portfolioContentImage' src='http://www.t1dliving.com/wp-content/uploads/2017/01/t1dliving.png' /></a>
                            </div>

                            <div>
                                <h4>Type 1 Info</h4>
                                <p>News/Testimonial page for people with Type 1</p>
                            </div>

                        </div>
                
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                            <a href='http://badgr.life/'> <img className='portfolioContentImage' src='http://www.skydiving.com/wp-content/uploads/2017/03/page-content-skydiving-b.jpg' /> </a>
                            </div>

                            <div>
                             <h4>Badgr</h4>
                                <p>Social Media App. Mobile View only. Right-click, select inspect, CTRL + SHIFT + M</p>
                            </div>

                        </div>
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                                <a href='https://texter.now.sh/'> <img className='portfolioContentImage' src='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/1/31/1391196023079/Apps-008.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=3733c199ada5b1522c63c6748c27f4d9' /></a>
                            </div>
                            <div>
                                <h4>Text App</h4>
                                <p>App allows you to send yourself or someone else a quick text reminder from your browser.</p>
                            </div>

                        </div>
                        
                    </div>

                    <div className='portfolioContentRow'>
                        <div className='portfolioContentBox'>

                            <div className='portfolioContentImageBox'>
                               <a href='https://github.com/jakeleonard24/First-Native-App'> <img className='portfolioContentImage' src='data:image/png;base64,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' /></a>
                            </div>
                            <div>
                                <h4>Album Browser</h4>
                                <p>Basic React Native App</p>
                            </div>
                            

                        </div>
                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                                 <a href='http://showdata.surge.sh/'> <img className='portfolioContentImage' src='http://www.schoolatoz.nsw.edu.au/detresources/iStock_000015151608Small_LSvpzPdLDE_l.png' /></a>
                            </div>
                            <div>
                                <h4>Data Display</h4>
                                <p>Very basic app using ChartJS that shows examples of graphs and allows a user to create a graph.</p>
                            </div>

                        </div>

                        <div className='portfolioContentBox'>
                            <div className='portfolioContentImageBox'>
                               <a href='http://basictodo.surge.sh/'><img className='portfolioContentImage' src='https://cdn.vox-cdn.com/thumbor/msZchpvmqFU7RQ0_M_8bqEvahIk=/0x0:5760x3840/1200x675/filters:focal(2420x1930:3340x2850)/cdn.vox-cdn.com/uploads/chorus_image/image/56578693/akrales_170907_1974_0026_02.1504880732.jpg' /></a>
                            </div>
                            <div>
                                <h4>Basic To-Do App</h4>
                                <p>No CSS - Uses Outside Api</p>
                            </div>

                        </div>
                        
                    </div>

                </div>

                </div>
                </div>
        );
    }
}

export default Portfolio;