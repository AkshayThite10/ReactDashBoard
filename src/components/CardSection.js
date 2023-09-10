import React, { Component } from 'react'

export class CardSection extends Component {
    render() {
        return (
            <div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important'}}>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '20px'}}>Class A</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0)"}}>
                                66
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '20px'}}>Class B</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0)" }}>
                                112
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '20px'}}>Class C</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0)" }}>
                                80
                            </p>
                        </div>
                    </div>

                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '20px'}}>Class D</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0)" }}>
                                55
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '20px'}}>Class E</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(51, 255, 0)" }}>
                                25
                            </p>
                        </div>
                    </div>
                </section>
                <div>
                    <div style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '50px', marginTop: '20px', marginBottom: '30px',
                        fontWeight: '700', color: "#fcdf03", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>
                        Graphs and Statistics
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSection