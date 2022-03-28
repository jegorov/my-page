import {Box} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import React, {Component} from 'react';

import '../../styles/style.css';
import history from "../../service/history";

class Home extends Component {

    constructor(props) {
        super(props);
        this.facebookUrl = "https://www.facebook.com/jegorov.je/"
        this.instagramUrl = "https://www.instagram.com/jegorovje/"
        this.linkedinUrl = "https://www.linkedin.com/in/egor-egorov/"
        this.twitterUrl = "https://twitter.com/jegorovje"
        this.telegramUrl = "https://t.me/jegorov_eu"
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
        let iosPadding = window.navigator.platform === 'iPhone' ? "80vh":"92vh";

        return (
            <Box className={"main-box custom-bg"} style={{marginBottom: iosPadding}} >
                <Box className={"main-content-container"} style={{height:iosPadding}}>
                    <Box className={"h1 custom-text"}>Jegor Jegorov</Box>
                    <Box className={"h2 custom-text"} style={{marginTop:"1vh"}}>Software engineer</Box>
                    <Box className={"main-btn-group"}>
                        <Box className={"menu-main-btn"} onClick={() => this.openResumePage()}><span className="btn-lbl">Resume</span></Box>
                        <Box className={"menu-main-btn"}
                             onClick={() => this.openSendEmailView("contact@jegorov.eu", "from jegorov.eu")}><span className="btn-lbl">Contact</span></Box>
                    </Box>
                </Box>
                <Box className={"media-link-container"}>
                    <FacebookIcon fontSize={'large'} className={"facebook-icon"}
                                  onClick={() => this.openLink(this.facebookUrl)}/>
                    <LinkedInIcon style={{marginLeft: "10px"}} fontSize={'large'} className={"linkedin-icon"}
                                  onClick={() => this.openLink(this.linkedinUrl)}/>
                    <InstagramIcon style={{marginLeft: "10px"}} fontSize={'large'}
                                   className={"instagram-icon"} onClick={() => this.openLink(this.instagramUrl)}/>
                    <TwitterIcon style={{marginLeft: "10px"}} fontSize={'large'}
                                   className={"twitter-icon"} onClick={() => this.openLink(this.twitterUrl)}/>
                    <TelegramIcon style={{marginLeft: "10px"}} fontSize={'large'}
                                   className={"telegram-icon"} onClick={() => this.openLink(this.telegramUrl)}/>
                </Box>
            </Box>
        );
    }
}

export default Home;
