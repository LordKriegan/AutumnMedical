import React, { Component } from 'react';
import ContactForm from './ContactForm';
class ContactInfo extends Component {
    render() {
        return (
            <div className="text-center">
                <h2>Contact Us</h2>
                <hr />
                <div className="row">
                    <div className="col-xs-4">
                        <h3>Hours of Operation</h3>
                        <div>
                            Mon-Fri: 9am-5pm<br />
                            Sat-Sun: To be announced
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <h3>Address</h3>
                        <div>
                            9200 Colima Rd. Suite 207<br />
                            Whittier, CA 90605
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <h3>Phone Number</h3>
                        <div>
                            <a id="phoneNum" href="tel:1-562-945-2128">(562) 945-2128</a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <h3>Leave us a message!</h3>
                        <hr />
                        <ContactForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;