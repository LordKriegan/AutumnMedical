import React, { Component } from 'react';

import Slider from 'react-slick'
class Page extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false
        };

        return (
            <div>
                <div className="col-xs-12 col-md-3">
                    <div className="hidden-xs hidden-sm">
                        {/* button group vertical */}
                        <div className="btn-group-vertical width100">
                            {
                                this.props.componentList.map((elem, i) => {
                                    return (
                                        <a key={i} className="btn btn-primary" onClick={() => this.slider.slickGoTo(i)}>{elem.title}</a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="hidden-md hidden-lg text-center">
                        {/* dropdown menu */}
                        <div className="dropdown" style={{ width: "100%" }}>
                            <button className="width100 btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Areas of Practice
                            <span className="caret"></span>
                            </button>
                            <ul className="width100 dropdown-menu" aria-labelledby="dropdownMenu1">
                                {
                                    this.props.componentList.map((elem, i) => {
                                        return (
                                            <li key={i}><a onClick={() => this.slider.slickGoTo(i)}>{elem.title}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-9">
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        {this.props.componentList.map((elem, i) => {
                            return (
                                <div className="pgBody" key={i}>{elem.component}</div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Page;
