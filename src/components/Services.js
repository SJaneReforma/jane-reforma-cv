import React from 'react';
import { MDBContainer, MDBAnimation, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

class Services extends React.Component {
    render() {  
        if(this.props.data) {
            var title = this.props.data.ServicesTitle;
            var description = this.props.data.ServicesDescription;
            var WB1 = this.props.data.ServicesWebDeb1;
            var WB2 = this.props.data.ServicesWebDeb2;
            var WB3 = this.props.data.ServicesWebDeb3;
        }
        return (
            <section className="my-5 services" id="section2">   
                    <div className="Services_Wrapper">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol lg="12">
                                    <MDBRow className="mb-3">
                                        <MDBCol xl="12" md="12" size="12">
                                            <h1 className="h1-responsive font-weight-bold my-3 text-center">{title}</h1>
                                            <p className="text-italic text-center">{description}</p>                                                                     
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBAnimation type="fadeInUp">  
                                        <MDBRow>
                                            <MDBCol className="mb-lg-0 mb-5" xl="4" md="12">
                                                <MDBCard>
                                                    <MDBCardBody>
                                                        <img className="d-flex justify-content-center text-center mx-auto pb-3" src="/images/icon1.png" width="70" alt=""/>
                                                        <MDBCardTitle className="text-center">Web Development</MDBCardTitle>
                                                            <MDBCardText>
                                                                {WB1}
                                                            </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>    
                                            </MDBCol>    
                                            <MDBCol className="mb-lg-0 mb-5" xl="4" md="4">
                                                <MDBCard>
                                                    <MDBCardBody>
                                                        <img className="d-flex justify-content-center text-center mx-auto pb-3" src="/images/icon3.png" width="70" alt=""/>
                                                        <MDBCardTitle className="text-center">Support</MDBCardTitle>
                                                            <MDBCardText>
                                                                {WB2}
                                                            </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>    
                                            </MDBCol> 
                                            <MDBCol xl="4" md="4">
                                                <MDBCard>
                                                    <MDBCardBody>
                                                        <img className="d-flex justify-content-center text-center mx-auto pb-3" src="/images/icon2.png" width="70" alt=""/>
                                                        <MDBCardTitle className="text-center">Maintenance</MDBCardTitle>
                                                            <MDBCardText>
                                                                {WB3}
                                                            </MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>    
                                            </MDBCol>                                                                               
                                        </MDBRow>       
                                    </MDBAnimation>                                                  
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>   
            </section>
        );
    }
}

export default Services;