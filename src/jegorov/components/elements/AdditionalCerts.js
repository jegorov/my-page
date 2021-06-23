import React, {Component} from "react";
import {Box, CardMedia, Link} from "@material-ui/core";
import "../../styles/history.css"

class AdditionalCerts extends Component {

    constructor(props) {
        super(props);
        // this.imgSrc=props
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
                        <Box className={"study"}>{this.props.study}</Box>
                        <Box className={"additional-information-title"}>{this.props.years}</Box>
                    </Box>
                </Box>
                <Box>
                    {this.props.desc}
                </Box>

            </Box>

        );
    }
}

export default AdditionalCerts;
