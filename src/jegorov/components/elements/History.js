import React, {Component} from "react";
import {Box, CardMedia, Link} from "@material-ui/core";
import "../../styles/history.css"
import ReactMarkdown from 'react-markdown'

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount () {
        if (this.props.desc) {
            fetch(this.props.desc)
                .then(r => r.text())
                .then(data => {
                    this.setState({data: data})
                });
        }
    }

    openLink = (link) => {
        window.open(`https://${link}`, "_self")
    }
  
    isMobile = () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            return true;
          }else{
            // false for not mobile device
            return false;
          }

    }

    render() {
        
        return (
            <Box className={"history-box"}>
                <Box className={"flex-box"}>
                    <CardMedia className={"icon"} image={this.props.imgSrc}/>
                    <Box className={"history-description"}>
                        <Box className={"history-name"}>{this.props.name}</Box>
                        <Box className={"history-title"}>{this.props.title}</Box>
                        <Box className={"additional-information-title"}>{this.props.years}</Box>
                        <Box className={"additional-information-title"}>{this.props.location}</Box>
                        <Link className={"web-url"}
                              onClick={() => this.openLink(this.props.webUrl)}>{this.props.webUrl}</Link>
                    </Box>
                </Box>
                <br/>
                <Box>
                    {this.isMobile() ? <ReactMarkdown className="mobile-li">{this.state.data}</ReactMarkdown> : <ReactMarkdown>{this.state.data}</ReactMarkdown> }
                </Box>

            </Box>

        );
    }
}

export default History;
