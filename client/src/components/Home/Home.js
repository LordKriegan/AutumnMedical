import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import Blog from './Blog';

class Home extends Component {
    state = {
        blog: ""
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: "/api/blog"
        })
            .then((response) => {
                let blogData = [];
                for (let key in response.data.data) {
                    blogData.push(response.data.data[key])
                }
                if (blogData.length > 0) {
                    this.setState({
                    blog: blogData
                });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        const settings = {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        };
        let images = [];
        for (let i = 0; i < 9; i++) {
            images.push(require('./images/' + i + '.jpg'))
        }
        return (
            <div className="col-xs-12 pgBody text-center">
                <h2>Welcome...</h2>
                <hr />
                <Slider {...settings}>
                    {images.map((elem, i) => {
                        return (
                            <img className="slideshowImg" src={elem} key={i} alt={"slideshowImg" + i} />
                        );
                    })}
                </Slider>
                <p>At the Autumn Medical Group Family medicine clinic, our focus is your health and wellness. You deserve an individually focused wellness plan that includes personalized screening, risk assessment, preventative care and comprehensive treatment.</p>
                <p>We understand that your family and those around you impact your health and wellness and that their health and wellness are important to you.</p>
                <p>This is the advantage of having a Family Medicine Physician caring for you and the ones you care about. We treat families and individuals of all ages, from birth to your golden years. We provide the entire spectrum of medical care from Pediatrics and Women’s health, to Geriatrics, Sports medicine, Internal medicine, Injuries, Preventive Medicine, Cosmetic and Aesthetic medicine, Cardiac health, Complete Diabetes care, Complete and comprehensive exams to screen for illnesses, cancers, and chronic diseases that if caught early may easily be treated.</p>
                <p>Alternative (Natural) and Complimentary medicine is also considered an important aspect of health in our office.</p>
                {
                    (this.state.blog) ? 
                    <div className="row">
                        <h2>Recent News...</h2>
                        {
                            (this.state.blog) ?
                            <Blog blogData={this.state.blog} /> :
                            ""
                        }
                    </div> :
                    ""
                }
                
            </div>
        );
    }
}

export default Home;