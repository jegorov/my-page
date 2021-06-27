import React, {Component, useRef} from "react";
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


import History from "../elements/History";
import ReactMarkdown from "react-markdown";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';



class Resume extends Component {

    componentDidMount() {
        fetch(briefDescMd)
            .then(r => r.text())
            .then(data => {
                this.setState({desc: data})
            });
        fetch(skills)
            .then(r => r.text())
            .then(data => {
                this.setState({skills: data})
            });
    }

    constructor() {
        super();
        this.state = {}
        this.pdfExportComponent = React.createRef();
    }

    openResumePage = () => {
        history.push("/")
    }

    handleExportWithComponent  = (event) => {
        this.pdfExportComponent.current.save();
    }

    render() {
        let isIos = ['iPhone', 'iPod','iPad'].includes(window.navigator.platform);
        let iosPadding = isIos ? "20vh":"5vh";
        let isDownloadBtnVisible = !(['Android', 'BlackBerry'].includes(window.navigator.platform) || isIos);
        return (
            <Box className={"main-box"}>


                <Box className={"main-resume-container"} style={{paddingBottom: iosPadding}}>
                    <Box className={"menu-main-btn"} onClick={() => this.openResumePage()}>Home</Box>
                    {isDownloadBtnVisible ? <Box className={"menu-main-btn"} onClick={() => this.handleExportWithComponent()}>Download</Box> : null}
                    <PDFExport id={"resume_container"} margin={5}  fileName={"resume_jegorov.pdf"} ref={this.pdfExportComponent} paperSize={"A3"}>
                        <Box className={"header-box"}>
                            <Box className={"brief-description-block "} style={{zIndex: "4"}}>
                                <Box className={"h1"}>
                                    Jegor Jegorov
                                </Box>
                                <br/>
                                <Box className={"h2"}>
                                    Software Engineer
                                </Box>
                                <br/>
                                <Box className={"h3"}>
                                    <ReactMarkdown>{this.state.desc && this.state.desc}</ReactMarkdown>
                                </Box>
                            </Box>
                            <Box className={"inside-main-box"} style={{zIndex: "5"}}>
                                {/*<Box className={"image-box"}>*/}
                                <CardMedia className={"image"} image={photoImgUrl}/>
                                {/*</Box>*/}
                            </Box>
                        </Box>
                        <br/>
                        <Box style={{height: "100%", position: "relative"}}>
                            <Box className={"title-box"}>
                                Work Experience
                            </Box>
                            <History imgSrc={hrImgUrl} name={"HireRight"} title={"Software Engineer"}
                                     location={"Tallinn, Estonia"}
                                     years={"March, 2021 - Present"} webUrl={"hireright.com"} desc={hrDescMd}/>
                            <History imgSrc={sberImgUrl} name={"Sberbank Technology"} title={"Software Engineer"}
                                     location={"Moscow, Russia"}
                                     years={"July, 2018 - February, 2021"} webUrl={"sberbank.com"} desc={sberDescMd}/>
                            <History imgSrc={gridnineImgUrl} name={"Gridnine Systems"} title={"Software Engineer"}
                                     location={"Moscow, Russia"}
                                     years={"January, 2018 - July, 2018"} webUrl={"gridnine.com"}
                                     desc={gridnineDescMd}/>

                            <Box className={"title-box"}>
                                Education
                            </Box>
                            <History imgSrc={bonchImgUrl}
                                     name={"The Bonch-Bruevich Saint Petersburg State University of Telecommunications"}
                                     title={"Bachelor's degree,Information Technology"}
                                     location={"Saint-Petersburg, Russia"} years={"2013 - 2017"}
                                     webUrl={"sut.ru/eng"}/>
                            <Box className={"title-box"}>
                                Additional Certificates
                            </Box>
                            <History imgSrc={bonchImgUrl}
                                     name={"The Bonch-Bruevich Saint Petersburg State University of Telecommunications"}
                                     title={"Training: Translation And Interpretation SPBSUT (Eng-Rus)"}
                                     location={"Saint-Petersburg, Russia"} years={"2014-2017"}/>
                            <History imgSrc={redhatImgUrl}
                                     name={"RedHat"}
                                     title={"Introduction to Containers, Kubernetes, and Red Hat OpenShift (DO180)"}
                                     years={"2019"}/>
                            <Box className={"title-box"}>
                                Skills
                            </Box>
                            <Box className={"skills-box"}>
                                <ReactMarkdown>{this.state.skills && this.state.skills}</ReactMarkdown>
                            </Box>
                            <Box style={{height: iosPadding}}/>
                        </Box>
                    </PDFExport>
                </Box>
            </Box>
        )
    }
}

export default Resume;
