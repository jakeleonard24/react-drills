import React, { Component } from 'react';
import './Logo.css'

class Logo extends Component {
    render() {
        return (
            <div className='logoContent'>
                <div className='logoLogo'>
                    <img className='logoImageSize' src='https://blackrockdigital.github.io/startbootstrap-agency/img/logos/envato.jpg'/>
                </div>
                <div className='logoLogo'>
                    <img className='logoImageSize'  src='https://blackrockdigital.github.io/startbootstrap-agency/img/logos/designmodo.jpg'/>
                </div>
                <div className='logoLogo'>
                    <img className='logoImageSize'  src='https://blackrockdigital.github.io/startbootstrap-agency/img/logos/themeforest.jpg'/>
                </div>
                <div className='logoLogo'>
                    <img className='logoImageSize'  src='https://blackrockdigital.github.io/startbootstrap-agency/img/logos/creative-market.jpg'/>
                </div>
                
            </div>
        );
    }
}

export default Logo;