import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {

    state = {
        nameInp: "",
        emailInp: "",
        phoneNumInp: "",
        msgInp: ""
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    clearForm = (e) => {
        if (e) { e.preventDefault(); }
        this.setState({
            nameInp: "",
            emailInp: "",
            phoneNumInp: "",
            msgInp: ""
        }, () => console.log("Form Cleared!"));
    }

    submitMsg = (e) => {
        e.preventDefault();
        if (!(this.state.nameInp) ||
            !(this.state.emailInp) ||
            !(this.state.phoneNumInp) ||
            !(this.state.msgInp)) {
            alert("Missing Information!")
        } else {
            alert("Under Construction!")
        }

    }
    
    render() {
        return (
            <div>
                <h1 className="text-center">Contact Us!</h1>
                <hr />
                <form id="contactForm">
                    {/*name*/}
                    <div class="form-group">
                        <label for="nameInp">Name:</label>
                        <input onChange={this.onChangeHandler} value={this.state.nameInp} type="text" class="form-control" id="nameInp" placeholder="John Doe" />
                    </div>
                    {/*email*/}
                    <div class="form-group">
                        <label for="emailInp">E-mail:</label>
                        <input onChange={this.onChangeHandler} value={this.state.emailInp} type="email" class="form-control" id="emailInp" placeholder="your@email.com" />
                    </div>
                    {/*phone number*/}
                    <div class="form-group">
                        <label for="phoneNumInp">Phone Number:</label>
                        <input onChange={this.onChangeHandler} value={this.state.phoneNumInp} type="tel" class="form-control" id="phoneNumInp" placeholder="123-456-7890" />
                    </div>
                    {/*message*/}
                    <div class="form-group">
                        <label for="msgInp">Message:</label>
                        <textarea style={{ resize: "none" }} onChange={this.onChangeHandler} value={this.state.msgInp} class="form-control" rows="5" id="msgInp" placeholder="Please leave me a message!"></textarea>
                    </div>
                    <div class="btn-group pull-right" role="group" aria-label="...">
                        <button onClick={this.submitMsg} type="submit" class="btn btn-info">Submit</button>
                        <button onClick={this.clearForm} type="button" class="btn btn-danger">Clear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;
