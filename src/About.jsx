import React from 'react'
import Common from "./Common";
import web from "../src/images/team.png";
const About=()=> {
    return (
        <>
         <Common name="Welcome to About Page" visit="/contact" imgSrc={web} btnname="Contact us"/>
        </>
    )
}

export default About;
