import React, {Component} from "react";
import {Box} from "@material-ui/core";

import '../../styles/style.css';
import history from "../../service/history";

class Resume extends Component {

    openResumePage = () => {
        history.push("/")
    }

    render() {
        return (
            <Box className={"main-box"} >
                <Box className={"menu-main-btn"} onClick={() => this.openResumePage()}>Home</Box>
                Resume
            </Box>
        )
    }
}

export default Resume;
