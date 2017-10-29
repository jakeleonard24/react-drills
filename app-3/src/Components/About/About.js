import React, { Component } from 'react';
import './About.css'

class About extends Component {
    rightStyle = {
        textAlign: 'right'
    }

    leftStyle = {
        textAlign: 'left',
        marginLeft: '20px'
    }
    render() {
        return (
            <div className='aboutBody'>
            <div className='aboutTitle'>
                    <div>
                    <h1 className='aboutTitleTitle'>About</h1>
                    </div>

                    <div>
                    <p className='aboutTitleSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className='aboutContentLeft'>
                    <div className='timelineListLeft'>
                        <div className='timelineBlurbLeft'>
                            <h3>2009-2011
                            Our Humble Beginnings </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>

                        </div>
                        <div className='imageAndLine'>
                        <img className='timelineImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/about/1.jpg' />
                     
                        </div>
                        
                    </div>
                    </div>

                    <div className='aboutContentRight'>
                    <div className='timelineListRight'>
                        <div className='timelineBlurbRight'>
                            <h3>March 2011
                            An Agency is Born</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>

                        </div>
                        <div>
                     
                        <img className='timelineImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/about/2.jpg' />
                        </div>
                    </div>
                    </div>

                    <div className='aboutContentLeft'>
                    <div className='timelineListLeft'>
                        <div className='timelineBlurbLeft'>
                            <h3>December 2012
                            Transition to Full Service </h3>
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>

                        </div>
                        <div>
                            <img className='timelineImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/about/3.jpg' />
                        </div>
                    </div>
                    </div>

                    <div className='aboutContentRight'>
                    <div className='timelineListRight'>
                        <div className='timelineBlurbRight'>
                            <h3>July 2014
                            Phase Two Expansion </h3>
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>

                        </div>
                        <div>
                        <img className='timelineImage' src='https://blackrockdigital.github.io/startbootstrap-agency/img/about/4.jpg' />
                        </div>
                    </div>
                    </div>
                    


                

                </div>
        );
    }
}

export default About;