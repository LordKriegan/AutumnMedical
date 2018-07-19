import React, { Component } from 'react';
import ImgAAFP from './images/aafp_strong.jpg'
import ImgADA from './images/ada.jpg'
import Headshot from './images/drmohammedi.jpg'
class DrMohammedi extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Dr. Mohammedi, MD, MS, MS</h2>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <img className="img-responsive center-block headshot" src={Headshot} alt="headshot" />
                    </div>
                    <div className="col-xs-12 col-md-9">
                        <h3>About Me</h3>
                        <hr />
                        <p>Dr. Nasir A. Mohammedi founded the Autumn Medical Group in La Mirada California in 2005. He soon outgrew the small clinic and built a spacious upscale office in Whittier, California adjacent to Whittier Hospital Medical Center near the end of 2005. He is a distinguished graduate of the Chicago Medical School, and the University of California at San Diego. He has been in Whittier for 4 decades and continues to serve the community he grew up in. He works tirelessly to keep up with the leading edge of medicine to provide the best care possible to his patients. As a result of his high level of training, his years spent teaching in medicine, community service, and maintenance of his good standing as a Board Certified Family Medicine Specialist, he was awarded the Fellowship of the American Academy of Family Medicine in 2012. This is one of the highest honors awarded to physicians in Family Medicine.</p>
                        <p>The Degree of Fellow recognizes AAFP members who have distinguished themselves among their colleagues, as well as in their communities, by their service to Family Medicine, by their advancement of health care to the American people and by their professional development through medical education and research. Fellows of the AAFP are recognized as Champions of Family Medicine. They are the physicians who make family medicine the premier specialty in service to their community and profession. From a personal perspective, being a Fellow signifies not only 'tenure' but one's additional work in your community, within organized medicine, within teaching, and a greater commitment to continuing professional development and/or research.</p>

                        <h3>The Meaning of Fellowship</h3>
                        <hr />
                        <p>The Degree of Fellow was established in 1971 by the Congress of Delegates (revised in 1992) as an avenue for special recognition of those members of the AAFP who have distinguished themselves among their colleagues, as well as in their communities, by their service to Family Medicine, the advancement of health care to the American people and by their professional development through medical education and research. As a Fellow of the American Academy of Family Physicians, these distinguished individuals are entitled to all the privileges, ceremony and honor bestowed by this degree.</p>

                        <h3>Fellowship Pledge</h3>
                        <hr />
                        <p>As a Fellow of the American Academy of Family Physicians, I shall pursue these goals:
                    <ul>
                                <li>to provide comprehensive and continuing health care to my patients, placing their welfare above all else;</li>
                                <li>to exemplify and substantiate the highest traditions of my profession through an informed and scientific practice of Family Medicine,</li>
                                <li>and to strive for professional enrichment through a rigorous program of continuing education.</li>
                            </ul>
                            I pledge my full participation and talents to the fulfillment of these objectives because they are the principles upon which the Academy was founded and because by so doing, I can better serve my profession, myself and humankind.
                </p>

                        <h3>Credentials</h3>
                        <hr />
                        <p>
                            <ul>
                                <li>Bachelor of Science : Biology with emphasis on Cell Biology/ Biochemistry, UCSD</li>
                                <li>Masters of Science: Physiology</li>
                                <li>Masters of Science: Pathology</li>
                                <li>Medical Doctorate: The Chicago Medical School</li>
                                <li>Internship: California Hospital Medical Center (University of Southern California)</li>
                                <li>Residency: Family Practice, Whittier Presbyterian Intercommunity Hospital</li>
                                <li>Board Certified: Family Medicine</li>
                                <li>Member of:
                            <ul>
                                        <li>American Academy of Family Physicians</li>
                                        <li>American Medical Association</li>
                                        <li>Los Angeles Medical Association</li>
                                        <li>California Medical Association</li>
                                        <li>
                                            Professional Member of the American Diabetic Association
                                    <img className="img-responsive" src={ImgADA} alt="ADA" />
                                        </li>
                                        <li>
                                            Fellow of the American Academy of Family Practice
                                    <img className="img-responsive" src={ImgAAFP} alt="AAFP" />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DrMohammedi;