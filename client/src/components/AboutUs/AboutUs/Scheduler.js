import React, {Component} from 'react';

class Scheduler extends Component {
    componentDidMount () {
        //https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa thank you Alex McMillan
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return(
                <div className="calendly-inline-widget" data-url="https://calendly.com/yopappy0/60min" style={{minWidth:"320px", height:"580px"}}></div>
        );
    }
}

export default Scheduler;