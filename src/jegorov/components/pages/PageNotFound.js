import React, {Component} from "react";
import '../../styles/empty-page-style.css';

class PageNotFound extends Component {


    render() {

        return (
            <a>
                <header className="top-header">
                </header>

                <div>
                    <div className="starsec"/>
                    <div className="starthird"/>
                    <div className="starfourth"/>
                    <div className="starfifth"/>
                </div>


                <div className="lamp__wrap">
                    <div className="lamp">
                        <div className="cable"/>
                        <div className="cover"/>
                        <div className="in-cover">
                            <div className="bulb"/>
                        </div>
                        <div className="light"/>
                    </div>
                </div>
                <section className="error">
                    <div className="error__content">
                        <div className="error__message message">
                            <h1 className="message__title">404 Page Not Found</h1>
                        </div>
                    </div>
                </section>

            </a>
        )
    }
}

export default PageNotFound;
