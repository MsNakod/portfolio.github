import React from "react";

function Technology()
{
    return (
        <div className="container mt-5" style={{width:500}}>
            <h1 className="title-text">Technologies known</h1>

            <div className="skill-box">
                <span className="title">HTML</span>
                <div className="skill-bar">
                    <span className="skill-per html">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                    <span className="skill-per css">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                    <span className="skill-per javascript">
                        <span className="tooltip">60%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                    <span className="skill-per nodejs">
                        <span className="tooltip">40%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                    <span className="skill-per reactjs">
                        <span className="tooltip">70%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">EmbededJS</span>
                <div className="skill-bar">
                    <span className="skill-per expressjs">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>
        </div>
    )
 }


export default Technology;