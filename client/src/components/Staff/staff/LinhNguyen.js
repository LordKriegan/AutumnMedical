import React, { Component } from 'react';

class LinhNguyen extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Linh Nguyen, FNP-BC</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-3">
                        <img src="http://via.placeholder.com/160x160" alt="headshot" />
                    </div>

                    <div className="col-xs-12 col-md-9">
                        <p>
                            Linh is a family nurse practitioner and certified aesthetic consultant (CAC-level 5) for Bloom Medical Group. She also has extensive experience as a critical care nurse from Loma Linda, CA. She is a proud double Bruin from UCLA where she completed her undergraduate and graduate school. Linh joined Bloom in 2012 and works closely with Dr. Mohammedi in all of his offices. She is constantly learning about new skin care advancements and practice management to help improve the quality, safety, and service of care we provide to our patients. Linh is also our Bloom Botox/Beauty Party coordinator. She loves tailoring each party to her client’s individual needs and making them feel rejuvenated and pampered. Linh believes, 
                            <blockquote>
                                <q>
                                    Beauty is about enhancing what you have and letting yourself shine through.
                                </q>
                            </blockquote>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinhNguyen;