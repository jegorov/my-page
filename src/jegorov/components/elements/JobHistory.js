import React, {Component} from "react";
import {Box, CardMedia, Link, Typography} from "@material-ui/core";
import "../../styles/history.css"
import ReactMarkdown from 'react-markdown'

class JobHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        // fetch(this.props.desc)
        //     .then((response) => this.setState({data: response.text()}));
        fetch(this.props.desc)
            .then(r => r.text())
            .then(data => {
                this.setState({data:data})
            });
    }

    openLink = (link) => {
        window.open(`https://${link}`, "_self")
    }


    render() {
        var src = "# Load the markdown document"

        return (
            <Box className={"history-box"}>
                <Box style={{display: "flex"}}>
                    <CardMedia className={"icon"} image={this.props.imgSrc}/>
                    <Box className={"history-description"}>
                        <Box className={"company-title"}>{this.props.companyName}</Box>
                        <Box className={"job-title"}>Software Engineer</Box>
                        <Box className={"additional-information-title"}>{this.props.years}</Box>
                        <Box className={"additional-information-title"}>{this.props.location}</Box>
                        <Link className={"web-url"}
                              onClick={() => this.openLink(this.props.webUrl)}>{this.props.webUrl}</Link>
                    </Box>
                </Box>
                <br/>
                <Box>
                    <ReactMarkdown>{this.state.data}</ReactMarkdown>
                </Box>

            </Box>

        );
    }
}

export default JobHistory;
