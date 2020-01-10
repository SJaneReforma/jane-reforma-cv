import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';
import $ from 'jquery';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    render() {
        
        return (
            <div className="main-contact pb-5 pt-5" id="section5">
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
                            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} >
                                <h4 className="text-center mb-4 font-weight-bold">CONTACT FORM</h4>
                                    <div className="grey-text">
                                        <MDBInput type="text" label="Your name" icon="user" id="in_name" name="in_name" value={this.state.name} onChange={this.onNameChange.bind(this)} group required />
                                        <MDBInput type="email" label="Your email" icon="envelope" group value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
                                        <MDBInput type="text" label="Subject" icon="tag" group value={this.state.subject} onChange={this.onSubjChange.bind(this)} required/>
                                        <MDBInput type="textarea" label="Your message" icon="pencil-alt" rows="2" value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>
                                    </div>
                                    <div className="text-center">
                                    <MDBBtn color="elegant" type="submit">
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

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onSubjChange(event) {
        this.setState({subject: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit (event) {
        event.preventDefault();
        this.sendFeedback()
    }

    resetForm(){
        this.setState({name: '', email: '', subject: '', message: ''});
    }

    sendFeedback() {
        const data = {
            service_id: 'gmail',
            template_id: 'template_PAre7b0C',
            user_id: 'user_9dj8XnIPMrkgsAzS2sYBa',
            template_params : {
                "from_name" : this.state.name,
                "reply_to" : this.state.email,
                "subject" : this.state.subject,
                "message" : this.state.message
            }
        };
            
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        })
        .then( 
        (response) => {
            alert('Your mail is sent!');
            window.location.reload();
         }, 
        
         (error) => {
            alert('Failed!');
         });
        
    }

}

export default Contact;