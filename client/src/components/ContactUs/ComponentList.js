import React from 'react';

import ContactInfo from './ContactUs/ContactInfo';
import InsuranceInfo from './ContactUs/InsuranceInfo';
import Scheduler from './ContactUs/Scheduler';

export default [
    {
        title: "Contact Us",
        component: <ContactInfo />
    },
    {
        title: "Insurance Info",
        component: <InsuranceInfo />
    },
    {
        title: "Schedule an Appointment",
        component: <Scheduler />
    }

]