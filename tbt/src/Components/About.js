import React, { Component } from "react";
import "../styles/main.css";
import BG from "../others/BG1.png";

class About extends Component{
    render() {
        return (
            <React.Fragment>
                <div className="space"></div>
                <div className="AboutGrad" style={{ backgroundImage: `url("${BG}")` }}>
                What do you really look for when you are in a new city away from home, friends and family?
                <br />
                Well, you look for exactly what you are away from. 
                <br />
                In a nutshell, that is what Stayrific is all about with an advantage – we help you meet your goals, keep you safe and make the best of technology to solve your daily problems. 
                <br />
                A comfortable home to come to after a hectic day at college or work; friends living close by yet making sure you get your space and 
                <br />
                a family that will take care of all your needs.
                </div>
                <div className="space"></div>
            </React.Fragment>
        )
    }
}

export default About;