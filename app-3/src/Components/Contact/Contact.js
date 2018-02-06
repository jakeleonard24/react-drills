import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    render() {
        return (
            <div id='contact' className='contactBody'>
                <div className='contactTitle'>
                    <div>
                    <h1 className='contactTitleTitle'>Contact</h1>
                    </div>

                    <div>
                    <p className='contactTitleSubtitle'>Contact me with employment opportunities, suggestions, or learning opportunities!</p>
                    </div>
                </div>

                <div className='contactContent'>
                    <div className='contactInputColumn'>
                        <input onChange={(e) => {this.setState({name: e.target.value})}} value={this.state.name} className='contactInput' placeholder='Name'/>
                        <input onChange={(e) => {this.setState({email: e.target.value})}} value={this.state.email} className='contactInput' placeholder='Email'/>
                        <input onChange={(e) => {this.setState({phone: e.target.value})}} value={this.state.phone} className='contactInput3' placeholder='Phone'/>
                    </div>
                    <div className='contactTextAreaColumn'>
                        <textarea onChange={(e) => {this.setState({message: e.target.value})}} value={this.state.message}  placeholder='Your Message' className='contactTextArea'></textarea>
                    </div>

                </div>
                <div>
                    <button onClick={() => {this.setState({name: '', email: '', phone: '', message:''})}} className='contactSendButton'>SEND MESSAGE</button>
                </div>

                </div>
        );
    }
}

export default Contact;