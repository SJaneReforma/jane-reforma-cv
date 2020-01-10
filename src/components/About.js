import React from 'react';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBAnimation, MDBProgress } from 'mdbreact';

class About extends React.Component {
    
    render() {  
        if(this.props.data) {
            var description= this.props.data.AboutDescription;
            var occupation= this.props.data.occupation;
        }
        
        return (
            <section className="my-5 about-me" id="section2">   
                    <div className="AboutMeWrapper">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol lg="5" xs="12" className="text-center text-lg-left">
                                    <img className="img-fluid" src="/images/home-right.png" alt=""/>
                                </MDBCol>
                                <MDBCol lg="7" xs="12">
                                    <MDBRow className="mb-3">
                                        <MDBCol xl="12" md="12" size="12">
                                            <MDBAnimation type="fadeInDown">
                                                <h1 className="h1-responsive font-weight-bold text-lg-left text-center">ABOUT ME</h1>
                                            </MDBAnimation>
                                            <p className="black-text font-weight-bold font-italic text-lg-left text-center">{occupation}</p>       
                                            <MDBAnimation type="fadeInDown">                                                                      
                                                <p className="black-text text-justify">{description}</p>
                                            </MDBAnimation>  
                                            <MDBBtn href="https://www.dropbox.com/s/8vje9n2791jmnmd/Sherry_Jane_D._Reforma_UP_CV_121719.doc?dl=0" className="d-flex justify-content-center btn-dl-cv" color="elegant">Download CV</MDBBtn>
                                        </MDBCol>
                                    </MDBRow>                 
                                </MDBCol>
                            </MDBRow>
                            <h1 className="h1-responsive font-weight-bold my-3 text-center pt-3">MY SKILLS</h1>
                            <MDBAnimation type="fadeInUp">  
                                <MDBRow className="mb-3">
                                    <MDBCol xl="4" md="4">
                                        <p className="font-weight-bold">HTML/HTML5</p>
                                        <MDBProgress material value={95} height="20px"> 95% </MDBProgress> 

                                        <p className="pt-3 font-weight-bold">CSS/CSS3</p>
                                        <MDBProgress material value={90} height="20px"> 90% </MDBProgress>   

                                        <p className="pt-3 font-weight-bold">Sass</p>
                                        <MDBProgress material value={85} height="20px"> 85% </MDBProgress>    

                                        <p className="pt-3 font-weight-bold">Bootstrap/MDBootsrap</p>
                                        <MDBProgress material value={90} height="20px"> 90% </MDBProgress>     

                                    </MDBCol>
                                    <MDBCol xl="4" md="4">
                                        <p className="font-weight-bold">Javascript</p>
                                        <MDBProgress material value={85} height="20px">85% </MDBProgress> 

                                        <p className="pt-3 font-weight-bold">JQuery</p>
                                        <MDBProgress material value={85} height="20px"> 85% </MDBProgress>  

                                        <p className="pt-3 font-weight-bold">Angular JS</p>
                                        <MDBProgress material value={70} height="20px"> 70% </MDBProgress>                                            

                                        <p className="pt-3 font-weight-bold">ReactJs</p>
                                        <MDBProgress material value={55} height="20px"> 55% </MDBProgress>    
                                                   
                                    </MDBCol>
                                    <MDBCol xl="4" md="4">
                                        <p className="font-weight-bold">WordPress</p>
                                        <MDBProgress material value={85} height="20px"> 85% </MDBProgress>

                                        <p className="pt-3 font-weight-bold">EDM</p>
                                        <MDBProgress material value={95} height="20px"> 95% </MDBProgress>

                                        <p className="pt-3 font-weight-bold">Git</p>
                                        <MDBProgress material value={90} height="20px"> 90% </MDBProgress>   

                                        <p className="pt-3 font-weight-bold">Photoshop</p>
                                        <MDBProgress material value={80} height="20px"> 80% </MDBProgress>   
                                                                                                    
                                    </MDBCol>
                                </MDBRow>
                            </MDBAnimation>  
                        </MDBContainer>
                    </div>   
            </section>
        );
    }
}

export default About;