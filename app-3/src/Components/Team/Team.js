import React, { Component } from 'react';
import './Team.css'

class Team extends Component {
    render() {
        return (
            
            <div id='team' className='teamBody'>
                <div className='teamTitle'>
                    <div>
                    <h1 className='teamTitleTitle'>Technologies</h1>
                    </div>

                    <div>
                    <p className='teamTitleSubtitle'>The list of technologies I currently know.</p>
                    </div>
                </div>
                <div className='teamContent'>
                    <div className='teamCatagoryBox'>
                        <div className='teamImageBox'>
                            <img className='teamContentImage' src='https://lh3.googleusercontent.com/sJ7FfF6GUZ7h7d7fKFn8EGOKk6G4bV8022se1iLZTjCz3ygTgbEunRTH0zEgRJRPTz78F87MyvTKGyBQdSQppHFAY_Km6wRm4FvBQLkaxnyU4hoyQw6RXDqtfQmqUwTKC1sKMTEOVjF2tz_hTIoykxzV41PfEUT13y8ff-vuspaNMx2lSHM0eXrr3rb1IbSswmbhXcbUOkoAqZRxLvoBGxcMlGhcUOayyoMqAaUqSmQP3Zlh8K9KCU-eUFG2LAdQDLRncwtneXKioj6ESnV2Xrkj-yPSmCCnYeL0OigpCI1p9azKE5nxJY1ZxtQulo-qxgga_0wmCDALFs5pNq6AS-f7qWJ5C8R5Qi2uP5jLDKOufw-1CWz9dQ2HSxGyNfepHqbzAYjPxPCrrRr0bMryUAIn8Zkv1jV33ob-SQ2-2D4OjiteBo6B43UAURddDJiYF3bwvPekwziK0O6GYpEcI6XTfMHFBXyHCLBkv2OSvtlmkn3yrDKpFaWDvUQmrUs4Skt7SqGDHS9TbnOwlSEL0dC16RCluFCLGTSjmLS9N6ikijpzfufRAZClMb2Nd9kSWwrd1sa8K9FpCfP4CZ4jWgQBKiso8QlXJc33PTFUollKC3qJ--GxvjYhTxbzm67hxyanJIvU2rog0IFVA9AKUGgNfsT13di5iTw=s400-no' />
                        </div>
                        <div>
                            <h4>Jake Leonard</h4>
                        </div>
                        <div>
                            <p>Web Developer</p>
                        </div>
                        <div className='teamIconRow'>
                            <div className='iconImageBox'>
                                <a href='https://github.com/jakeleonard24'>
                                <img className='logoImage'  src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='' />
                                </a>
                            </div>
                           
                            <div className='iconImageBox'>
                                <a href='https://www.linkedin.com/in/leonardjake/'>
                                <img className='logoImage'  src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='' />
                                </a>
                            </div>
                            
                    
                        </div>

                        <div className='skillRow'>
                                <img className='skillIcon' src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' /><img className='skillIcon' src='https://www.shareicon.net/data/512x512/2016/07/08/117367_logo_512x512.png' /><img  className='skillIcon' src='http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png' /><img className='skillIconEx' src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/landscape/nodejslogo.png?1499963356' /><img className='skillIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png' /><img className='skillIcon'  src='data:image/png;base64,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' />
                        </div>

                    </div>

                    
                    

                    

                    
                </div>

                     <div className='teamBottomContent'> 
                        <p>My preffered stack is the PERN stack.  PostgreSQL, Express, ReactJS NodeJS.  I feel completely confident that I can build, or teach myself what is required to build, anything using this stack.  I am also always trying to learn new things.  I am currently learning React Native and plan to soon learn Vue.js.</p>
                    </div>
            </div>
        );
    }
}

export default Team;