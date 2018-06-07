import React from 'react';

import ContactInfo from './AboutUs/ContactInfo';
import ContactForm from './AboutUs/ContactForm';
import Directions from './AboutUs/Directions';
import InsuranceInfo from './AboutUs/InsuranceInfo';
import Scheduler from './AboutUs/Scheduler';

export default [
    {
        title: "Contact Info",
        component: <ContactInfo />
    },
    {
        title: "Directions",
        component: <Directions />
    },
    {
        title: "Insurance Info",
        component: <InsuranceInfo />
    },
    {
        title: "Contact Us",
        component: <ContactForm />
    },
    {
        title: "Schedule an Appointment",
        component: <Scheduler />
    }

]