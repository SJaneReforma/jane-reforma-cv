import React from 'react';
import $ from 'jquery';
import Header from './components/Header.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myData: {}
    };
  }

  getMyData(){
    $.ajax({
      url:'/myData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({myData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getMyData();
  }

   render() {
      if(this.props.data) {
        var networks= this.props.data.social.map(function(network){
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
      }
      return (
         <div className="main">
         <Router>
               <Header data={this.state.myData.main} />
               <Switch>
                     <Route exact path="/">
                     </Route>
                     <Route exact path="/">
                        <About />
                     </Route>
               </Switch>
         </Router>
         <About data={this.state.myData.main} />
         <Services data={this.state.myData.main}/>
         <Portfolio data={this.state.myData.main} />
         <Contact data={this.state.myData.main} />   
         <Footer data={this.state.myData.main} />    
         </div>
      );
   }
}
export default App;