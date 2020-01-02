import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';

class Contact extends React.Component {
    render() {
        if(this.props.data) {
            var networks= this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
          }
        return (
            <div className="main-contact pb-5 pt-5">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" className="mb-5 mb-lg-0">
                            <h4 className="text-center mb-4 font-weight-bold">CONTACT INFO</h4>                            
                            <p className=""><span className="font-weight-bold">Address: </span> San Pablo City, Laguna</p>
                            <p className=""><span className="font-weight-bold">Phone Number: </span> 00000000</p>
                            <p className=""><span className="font-weight-bold">Email Address: </span> janedreforma@gmail.com</p>
                            <p className=""><span className="font-weight-bold">Website: </span> https://jane-reforma-cv.herokuapp.com/</p>
                        </MDBCol>
                        <MDBCol md="6">
                            <form>
                                <h4 className="text-center mb-4 font-weight-bold">CONTACT FORM</h4>
                                    <div className="grey-text">
                                        <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right" />
                                        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                        <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                                        <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                                    </div>
                                    <div className="text-center">
                                    <MDBBtn color="elegant">
                                        Send <MDBIcon icon="paper-plane" className="ml-1" />
                                    </MDBBtn>
                                    </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }    
}

export default Contact;