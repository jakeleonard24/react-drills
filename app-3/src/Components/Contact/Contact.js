import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='contactBody'>
                <div className='contactTitle'>
                    <div>
                    <h1 className='contactTitleTitle'>Contact</h1>
                    </div>

                    <div>
                    <p className='contactTitleSubtitle'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <div className='contactContent'>
                    <div className='contactInputColumn'>
                        <input className='contactInput' placeholder='Name'/>
                        <input className='contactInput' placeholder='Email'/>
                        <input className='contactInput3' placeholder='Phone'/>
                    </div>
                    <div className='contactTextAreaColumn'>
                        <textarea placeholder='Your Message' className='contactTextArea'></textarea>
                    </div>

                </div>
                <div>
                    <button className='contactSendButton'>SEND MESSAGE</button>
                </div>

                </div>
        );
    }
}

export default Contact;