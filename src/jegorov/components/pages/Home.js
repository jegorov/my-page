import {Box, Container} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import React, {Component} from 'react';

import '../../styles/style.css';
import history from "../../service/history";

class Home extends Component {

    constructor(props) {
        super(props);
        this.facebookUrl = "https://www.facebook.com/jegorov.je/"
        this.instagramUrl = "https://www.instagram.com/jegorovje/"
        this.linkedinUrl = "https://www.linkedin.com/in/egor-egorov/"

    }

    openLink = (link) => {
        window.open(link, "_self")
    }

    openSendEmailView = (address, subject) => {
        window.open(`mailto:${address}?subject=${subject}`)
    }

    openResumePage = () => {
        history.push("/resume")
    }

    render() {
        return (
            <Box className={"main-box"} >
                <Box className={"main-content-container"} style={{height:"92vh"}}>
                    <Box className={"h1"}>Jegor Jegorov</Box>
                    <Box className={"h2"}>Software engineer</Box>
                    <Box className={"main-btn-group"}>
                        <Box className={"menu-main-btn"} onClick={() => this.openResumePage()}>Resume</Box>
                        <Box className={"menu-main-btn"}
                             onClick={() => this.openSendEmailView("contact@jegorov.eu", "from jegorov.eu")}>Contact</Box>
                    </Box>
                </Box>
                <Box className={"media-link-container"} style={{height:"6vh", paddingBottom: "2vh"}}>
                    <FacebookIcon fontSize={'large'} className={"facebook-icon"}
                                  onClick={() => this.openLink(this.facebookUrl)}/>
                    <LinkedInIcon style={{marginLeft: "10px"}} fontSize={'large'} className={"linkedin-icon"}
                                  onClick={() => this.openLink(this.linkedinUrl)}/>
                    <InstagramIcon style={{marginLeft: "10px"}} fontSize={'large'}
                                   className={"instagram-icon"} onClick={() => this.openLink(this.instagramUrl)}/>
                </Box>
            </Box>
        );
    }
}

export default Home;
