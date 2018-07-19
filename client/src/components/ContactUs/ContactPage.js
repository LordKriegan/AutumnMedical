import React, {Component} from 'react';
import ContactInfo from './ContactUs/ContactInfo';
import Scheduler from './ContactUs/Scheduler';

class ContactPage extends Component {
    render() {
        return(
            <div className="col-xs-12 pgBody text-center">
                <div className="row contactInfo">
                    <div className="col-xs-12">
                        <ContactInfo />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <Scheduler />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;