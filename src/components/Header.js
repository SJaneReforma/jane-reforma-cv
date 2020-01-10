import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBMask, MDBView, MDBAnimation} from 'mdbreact';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        collapse: false,
        isWideEnough: false,
      };
      this.onClick = this.onClick.bind(this);
    }
  
    onClick() {
      this.setState({
        collapse: !this.state.collapse,
      });
    }
  
    render() {

      if(this.props.data) {
          var greetings = this.props.data.greetings;
          var name = this.props.data.name;
          var occupation= this.props.data.occupation;
          var networks= this.props.data.social.map(function(network){
              return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
          })
      }

      return (
        <div className="main-wrapper" id="section1">
          <header className="mainHeader">
              <MDBNavbar className="" color="white" fixed="top" dark expand="md" scrolling transparent>
                <MDBNavbarBrand href="/">
                  <strong>JR</strong>
                </MDBNavbarBrand>
                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav className="text-uppercase mx-auto" left>
                            <MDBNavItem active>
                                <MDBNavLink className="pr-3 smoothscroll" to="#section1">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="smoothscroll" to="#section2">About</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="smoothscroll" to="#section3">Service</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="smoothscroll" to="#section4">Portfolio</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="smoothscroll" to="#section5">Contact Us</MDBNavLink>
                            </MDBNavItem>                   
                        </MDBNavbarNav>
                    </MDBCollapse>
              </MDBNavbar>
  
            <MDBView src="/images/bg.jpg">
                <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                    <span className="pb-3">{greetings}</span>  
                    <h1>I am {name}</h1>
                    <MDBAnimation type="lightSpeedIn">
                        <h5 className="">{occupation}</h5>
                    </MDBAnimation>
                    <hr />
                    <ul className="social pb-3">
                        {networks}
                    </ul>
                    <MDBAnimation type="bounce" infinite>
                        <p className="scrolldown scroll-more pt-3">
                            <a className="smoothscroll" href="#section1"><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
                        </p>
                    </MDBAnimation>
                </MDBMask>
            </MDBView>
          </header>
        </div>
      );
    }
  }

  export default Header;