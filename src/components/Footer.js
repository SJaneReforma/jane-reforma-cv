import React from 'react';
import { MDBFooter, MDBContainer } from 'mdbreact';

class Footer extends React.Component {
    render() {
        if(this.props.data) {
            var networks= this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
          }
        return (
            <div className="main-footer">
                <MDBFooter className="font-small pt-5 pb-2" id="footer">
                    <MDBContainer>
                        <div className="d-flex justify-content-center">
                            <span className="initial"><strong>JD</strong></span>
                        </div>
                    </MDBContainer>
                    <div className="text-center py-3">
                        <MDBContainer fluid>
                            <ul className="social pb-3">
                                {networks}
                            </ul>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Jane.com </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>  
            </div>
        );
    }    
}

export default Footer;