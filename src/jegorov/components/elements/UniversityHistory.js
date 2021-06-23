import React, {Component} from "react";
import {Box, CardMedia, Link} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

import "../../styles/history.css"

class UniversityHistory extends Component {


    constructor(props) {
        super(props);
    }

    openLink = (link) => {
        window.open(`https://${link}`, "_self")
    }

    render() {
        return (
            <Box className={"history-box"}>
                <Box style={{display: "flex"}}>
                    <CardMedia className={"icon"} image={this.props.imgSrc}/>
                    <Box className={"history-description"}>
                        <Box className={"company-title"}>{this.props.universityName}</Box>
                        <Box className={"job-title"}>{this.props.study}</Box>
                        <Box className={"additional-information-title"}>{this.props.years}</Box>
                        <Box className={"additional-information-title"}>{this.props.location}</Box>
                        <Link className={"web-url"}
                              onClick={() => this.openLink(this.props.webUrl)}>{this.props.webUrl}</Link>
                    </Box>
                </Box>
            </Box>

        );
    }
}

export default UniversityHistory;
