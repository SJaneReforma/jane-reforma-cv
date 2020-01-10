import React from 'react';
import { MDBContainer, MDBMask, MDBBtn, MDBView, MDBRow, MDBCol, MDBCardBody, MDBIcon } from 'mdbreact';

class Portfolio extends React.Component {

    render() { 
        if(this.props.data) {
            var portfolioList= this.props.data.portfolioList.map((port) =>
                <MDBCol md="4" xl="4" className="mb-4">
                    <MDBView className="overlay rounded z-depth-2" waves>
                        <img src={port.imageLink} alt="" width="350" height="233"/> 
                        <a href={port.btnLink}>
                            <MDBMask overlay="white-slight" />
                        </a>
                    </MDBView>
                    <MDBCardBody className="pb-0">
                            <p className="mb-0">{port.desc}</p>
                            <MDBBtn href={port.btnLink} color="success" rounded>
                                {port.btnText}
                            </MDBBtn>
                    </MDBCardBody>
                </MDBCol>    
            )
          }
        return (
            <section className="text-center my-5" id="section4">
                <h2 className="h1-responsive font-weight-bold my-5">Portfolio</h2>
                <MDBContainer>
                    <MDBRow className="d-flex justify-content-center">
                        {portfolioList}        
                    </MDBRow>
                </MDBContainer>     
       
            </section>
        );
    }
}

export default Portfolio;