import React, {Component} from "react";
import {Avatar, Box, CardMedia, Container, Divider, Grid, Typography} from "@material-ui/core";
import Image from "material-ui-image";


import '../../styles/style.css';
import '../../styles/resume.css';
import history from "../../service/history";
import photoImgUrl from "../../../resources/image/jegorov_main.jpg";
import hrImgUrl from "../../../resources/image/hr.png";
import sberImgUrl from "../../../resources/image/sber.png";
import gridnineImgUrl from "../../../resources/image/gridnine.webp";

import bonchImgUrl from "../../../resources/image/spbsut.png";


import gridnineDescMd from "../../../resources/text/gridnine_desc.md";
import sberDescMd from "../../../resources/text/sber_desc.md";
import hrDescMd from "../../../resources/text/hr_desc.md";


import JobHistory from "../elements/JobHistory";
import UniversityHistory from "../elements/UniversityHistory";


class Resume extends Component {

    openResumePage = () => {
        history.push("/")
    }

    render() {
        return (
            // <Box className={"main-box"} style={{filter: "blur(4px)"}}>
            <Box className={"main-box"}>

                <Box className={"menu-main-btn"} onClick={() => this.openResumePage()}>Home</Box>
                <Container className={"main-resume-container "}>
                    <Box className={"header-box"}>
                        <Box className={"brief-description-block h2"} style={{zIndex: "4"}}>
                            Jegor Jegorov
                            <br/>
                            <br/>
                            Software Developer
                        </Box>
                        <Box className={"inside-main-box"} style={{zIndex: "5"}}>
                            <Box className={"image-box"}>
                                <CardMedia style={{height: "100%", width: "100%"}} image={photoImgUrl}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{ height: "100%", position: "relative"}}>
                        <Box className={"title-box"}>
                            Work Experience
                        </Box>
                        <JobHistory imgSrc={hrImgUrl} companyName={"HireRight"} location={"Tallinn, Estonia"}
                                    years={"March, 2021 - Present"} desc={hrDescMd}/>
                        <JobHistory imgSrc={sberImgUrl} companyName={"Sberbank Technology"} location={"Moscow, Russia"}
                                    years={"July, 2018 - February, 2021"} desc={sberDescMd}/>
                        <JobHistory imgSrc={gridnineImgUrl} companyName={"Gridnine Systems"} location={"Moscow, Russia"}
                                    years={"January, 2018 - July, 2018"} desc={gridnineDescMd}/>

                        <Box className={"title-box"}>
                            Education
                        </Box>
                        <UniversityHistory imgSrc={bonchImgUrl}
                                           universityName={"The Bonch-Bruevich Saint Petersburg State University of Telecommunications "}
                                           study={"Bachelor's degree,Information Technology,"}
                                           location={"Saint-Petersburg, Russia"} years={"2013 - 2017"}
                                           desc={gridnineDescMd}/>
                        <Box className={"title-box"}>
                            Additional Certificates
                        </Box>
                    </Box>
                </Container>

            </Box>
        )
    }
}

export default Resume;
