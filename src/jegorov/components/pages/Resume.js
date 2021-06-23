import React, {Component} from "react";
import {Avatar, Box, CardMedia, Container, Divider, Grid, Typography} from "@material-ui/core";


import '../../styles/style.css';
import '../../styles/resume.css';
import history from "../../service/history";
import photoImgUrl from "../../../resources/image/jegorov_main.jpg";
import hrImgUrl from "../../../resources/image/hr.png";
import sberImgUrl from "../../../resources/image/sber.png";
import gridnineImgUrl from "../../../resources/image/gridnine.webp";
import redhatImgUrl from "../../../resources/image/red_hat.png";


import bonchImgUrl from "../../../resources/image/spbsut.png";


import gridnineDescMd from "../../../resources/text/gridnine_desc.md";
import sberDescMd from "../../../resources/text/sber_desc.md";
import hrDescMd from "../../../resources/text/hr_desc.md";
import briefDescMd from "../../../resources/text/brief_description.md";
import skills from "../../../resources/text/skills.md";




import JobHistory from "../elements/JobHistory";
import UniversityHistory from "../elements/UniversityHistory";
import AdditionalCerts from "../elements/AdditionalCerts";
import ReactMarkdown from "react-markdown";


class Resume extends Component {

    componentDidMount () {
        fetch(briefDescMd)
            .then(r => r.text())
            .then(data => {
                this.setState({desc:data})
            });
        fetch(skills)
            .then(r => r.text())
            .then(data => {
                this.setState({skills:data})
            });
    }

    constructor() {
        super();
        this.state = {}

    }
    openResumePage = () => {
        history.push("/")
    }

    render() {
        return (
            <Box className={"main-box"}>

                <Box className={"menu-main-btn"} onClick={() => this.openResumePage()}>Home</Box>
                {/*<Box className={"menu-main-btn"} onClick={() => this.openResumePage()}>Download</Box>*/}

                <Container className={"main-resume-container "}>
                    <Box className={"header-box"}>
                        <Box  className={"brief-description-block "} style={{zIndex: "4"}}>
                            <Box className={"h1"} fontSize={"4rem"}>
                            Jegor Jegorov
                            </Box>
                            <br/>
                            <Box className={"h1"} fontSize={"2rem"}>
                            Software Developer
                            </Box>
                            <br/>
                            <Box className={"h3"}>
                                <ReactMarkdown>{this.state.desc && this.state.desc }</ReactMarkdown>
                            </Box>
                        </Box>
                        <Box className={"inside-main-box"} style={{zIndex: "5"}}>
                            <Box className={"image-box"}>
                                <CardMedia style={{height: "90%", width: "100%", marginLeft:"40%", marginTop:"10%"}} image={photoImgUrl}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{height: "100%", position: "relative"}}>
                        <Box className={"title-box"}>
                            Work Experience
                        </Box>
                        <JobHistory imgSrc={hrImgUrl} companyName={"HireRight"} location={"Tallinn, Estonia"}
                                    years={"March, 2021 - Present"} webUrl={"hireright.com"} desc={hrDescMd}/>
                        <JobHistory imgSrc={sberImgUrl} companyName={"Sberbank Technology"} location={"Moscow, Russia"}
                                    years={"July, 2018 - February, 2021"} webUrl={"sberbank.com"} desc={sberDescMd}/>
                        <JobHistory imgSrc={gridnineImgUrl} companyName={"Gridnine Systems"} location={"Moscow, Russia"}
                                    years={"January, 2018 - July, 2018"} webUrl={"gridnine.com"} desc={gridnineDescMd}/>

                        <Box className={"title-box"}>
                            Education
                        </Box>
                        <UniversityHistory imgSrc={bonchImgUrl}
                                           universityName={"The Bonch-Bruevich Saint Petersburg State University of Telecommunications"}
                                           study={"Bachelor's degree,Information Technology,"}
                                           location={"Saint-Petersburg, Russia"} years={"2013 - 2017"}
                                           webUrl={"sut.ru/eng"}/>
                        <Box className={"title-box"}>
                            Additional Certificates
                        </Box>
                        <AdditionalCerts imgSrc={bonchImgUrl}
                                         universityName={"The Bonch-Bruevich Saint Petersburg State University of Telecommunications"}
                                         study={"Training: Translation And Interpretation SPBSUT (Eng-Rus)"}
                                         location={"Saint-Petersburg, Russia"} years={"2014-2017"}
                                         webUrl={"sut.ru/eng"}/>
                        <AdditionalCerts imgSrc={redhatImgUrl}
                                         universityName={"RedHat"}
                                         study={"Introduction to Containers, Kubernetes, and Red Hat OpenShift (DO180)"}
                                         years={"2019"}
                                         webUrl={"sut.ru/eng"}/>
                        <Box className={"title-box"}>
                            Skills
                        </Box>
                        <Box className={"skills-box"}>
                            <ReactMarkdown>{this.state.skills && this.state.skills }</ReactMarkdown>
                        </Box>
                    </Box>
                </Container>

            </Box>
        )
    }
}

export default Resume;
