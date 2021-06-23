import React, {Component} from "react";
import {Box, CardMedia} from "@material-ui/core";
import "../../styles/job-history.css"

class JobHistory extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box >
                <Box style={{display: "flex"}}>
                    <CardMedia className={"icon"} image={this.props.imgSrc}/>
                    <Box>
                        <Box className={"company-title"}>{this.props.universityName}</Box>
                        <Box className={"job-title"}>{this.props.study}</Box>
                        <Box className={"additional-information-title"}>{this.props.years}</Box>
                        <Box className={"additional-information-title"}>{this.props.location}</Box>
                    </Box>
                </Box>
                <Box>
                    {this.props.desc}
                </Box>

            </Box>

        );
    }
}

export default JobHistory;
