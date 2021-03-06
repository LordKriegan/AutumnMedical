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
        const {nameInp, emailInp, phoneNumInp, msgInp} = this.state;
        if (nameInp && msgInp && (emailInp || phoneNumInp)) { //scenario: name, msg are filled, either email or phoneNum is filled
            const newMessage = {
                name: nameInp,
                email: emailInp || null,
                phoneNum: phoneNumInp || null,
                message: msgInp
            }
            axios({
                method: "POST",
                url: "/api/messages",
                data: newMessage
            })
            .then((response) => {
                console.log(response)
                this.clearForm();
            })
            .catch((error) => {
                console.error(error);
            })
        } else {
            alert("missing information!");
        }
    }
    
    render() {
        return (
            <div>
                <form id="contactForm">
                    {/*name*/}
                    <div className="form-group">
                        <label htmlFor="nameInp">Name:</label>
                        <input onChange={this.onChangeHandler} value={this.state.nameInp} type="text" className="form-control" id="nameInp" placeholder="John Doe" />
                    </div>
                    {/*email*/}
                    <div className="form-group">
                        <label htmlFor="emailInp">E-mail:</label>
                        <input onChange={this.onChangeHandler} value={this.state.emailInp} type="email" className="form-control" id="emailInp" placeholder="your@email.com" />
                    </div>
                    {/*phone number*/}
                    <div className="form-group">
                        <label htmlFor="phoneNumInp">Phone Number:</label>
                        <input onChange={this.onChangeHandler} value={this.state.phoneNumInp} type="tel" className="form-control" id="phoneNumInp" placeholder="123-456-7890" />
                    </div>
                    {/*message*/}
                    <div className="form-group">
                        <label htmlFor="msgInp">Message:</label>
                        <textarea style={{ resize: "none" }} onChange={this.onChangeHandler} value={this.state.msgInp} className="form-control" rows="5" id="msgInp" placeholder="Please leave us a message!"></textarea>
                    </div>
                    <div className="btn-group pull-right" role="group" aria-label="...">
                        <button onClick={this.submitMsg} type="submit" className="btn btn-info">Submit</button>
                        <button onClick={this.clearForm} type="button" className="btn btn-default">Clear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;
