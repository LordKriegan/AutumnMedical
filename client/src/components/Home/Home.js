import React, { Component } from 'react';
import ComponentList from '../AreasOfPractice/ComponentList';
import Page from '../Page';

class Home extends Component {

    render() {
        return (
            <div className="col-xs-12 pgBody text-center">
                <h2>Welcome...</h2>
                <hr />
                <p>At the Autumn Medical Group Family medicine clinic, our focus is your health and wellness. You deserve an individually focused wellness plan that includes personalized screening, risk assessment, preventative care and comprehensive treatment.</p>
                <p>We understand that your family and those around you impact your health and wellness and that their health and wellness are important to you.</p>
                <p>This is the advantage of having a Family Medicine Physician caring for you and the ones you care about. We treat families and individuals of all ages, from birth to your golden years. We provide the entire spectrum of medical care from Pediatrics and Women’s health, to Geriatrics, Sports medicine, Internal medicine, Injuries, Preventive Medicine, Cosmetic and Aesthetic medicine, Cardiac health, Complete Diabetes care, Complete and comprehensive exams to screen for illnesses, cancers, and chronic diseases that if caught early may easily be treated.</p>
                <p>Alternative (Natural) and Complimentary medicine is also considered an important aspect of health in our office.</p>

                <Page pageTitle="Areas of Practice" componentList={ComponentList} />
            </div>
        );
    }
}

export default Home;