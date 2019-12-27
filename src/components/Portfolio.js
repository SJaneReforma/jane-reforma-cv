import React from 'react';
import { MDBContainer, MDBMask, MDBBtn, MDBView, MDBRow, MDBCol, MDBCardBody, MDBIcon } from 'mdbreact';

class Portfolio extends React.Component {

    render() { 
        return (
            <section className="text-center my-5" id="section3">
                <h2 className="h1-responsive font-weight-bold my-5">Portfolio</h2>
                <MDBContainer>
                    <MDBRow className="d-flex justify-content-center">
                            <MDBCol md="4" xl="4" className="mb-4">
                                <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="/images/web-development.png"
                                    alt=""
                                    width="350"
                                    height="233"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                                </MDBView>
                                <MDBCardBody className="pb-0">
                                <a href="#!" className="green-text">
                                    <h5 className="font-weight-bold mt-2 mb-3">
                                    <MDBIcon fas icon="eye" className="pr-2" />
                                    Marketing
                                    </h5>
                                </a>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit cupidatat proident
                                    voluptatem quia numquam.
                                </p>
                                <MDBBtn href="https://www.xyzprinting.com/en-US/home" color="success" rounded>
                                    View more
                                </MDBBtn>
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol md="4" xl="4" className="mb-4">
                                <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="/images/web-development-2.png"
                                    alt=""
                                    width="350"
                                    height="233"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                                </MDBView>
                                <MDBCardBody className="pb-0">
                                <a href="#!" className="blue-text">
                                    <h5 className="font-weight-bold mt-2 mb-3">
                                    <MDBIcon icon="eye" className="pr-2" />
                                    Entertainment
                                    </h5>
                                </a>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit cupidatat proident
                                    voluptatem quia numquam.
                                </p>
                                <MDBBtn href="https://tvplus.abs-cbn.com/" color="success" rounded>
                                    View more
                                </MDBBtn>
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol md="4" xl="4" className="mb-4">
                                <MDBView className="overlay rounded z-depth-2" waves>
                                <img
                                    src="/images/web-development-3.jpg"
                                    alt=""
                                    width="350"
                                    height="233"
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                                </MDBView>
                                <MDBCardBody className="pb-0">
                                <a href="#!" className="brown-text">
                                    <h5 className="font-weight-bold mt-2 mb-3">
                                    <MDBIcon icon="eye" className="pr-2" />
                                    Entertainment
                                    </h5>
                                </a>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                    amet, consectetur, adipisci velit cupidatat proident
                                    voluptatem quia numquam.
                                </p>
                                <MDBBtn href="https://corporate.abs-cbn.com/lingkodkapamilya/" color="success" rounded>
                                    View more
                                </MDBBtn>
                                </MDBCardBody>
                            </MDBCol>
                    </MDBRow>
                </MDBContainer>        
            </section>
        );
    }
}

export default Portfolio;