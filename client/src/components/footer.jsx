import React, { Component } from 'react';
import instagram from "../assets/instagram-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import About from "./company/about"; 
import Contact from "./company/contact"; 
import Services from "./company/services"; 
import FAQ from "./company/faq"; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from 'reactstrap';

class Footer extends Component {
    state = {  }
    render() { 
        return (  
          <Router>
          <footer>
            <div className='footer-div'>
              <h6><strong>Company</strong></h6>
              <p><a className='footer-text' href='/about' target='_blank '>About us</a></p>
              <p><a className='footer-text' href='/contact'>Contact us</a></p>
              <p><a className='footer-text' href='/services'>Services</a></p>
              <p><a className='footer-text' href='faq'>FAQ</a></p>
            </div>
            <div className='footer-div'>
            <h6><strong>Products</strong></h6>           
              <p><a className='footer-text' href='#'>Features</a></p>
              <p><a className='footer-text' href='#'>Android App</a></p>
              <p><a className='footer-text' href='#'>iOS App</a></p>
              
            </div>
            <div className='footer-div'>
            <h6><strong>Legal</strong></h6>
              <p><a className='footer-text' href='#'>Terms of Service</a></p>
              <p><a className='footer-text' href='#'>Privacy Policy</a></p>
              <p><a className='footer-text' href='#'>Billing Policy</a></p>
            </div>
            <div className='footer-div'>
            <h6><strong>Connect with us</strong></h6>
            <div style={{display:'flex', wrapFlex:'wrap', marginBottom:'1rem'}}>          
                  <img className='social' src={instagram} alt='instagram'/>
                  <img  className='social'  src={facebook} alt='facebook'/>
                  <img  className='social'  src={twitter} alt='twitter'/>
                 
            </div>
            <p className='footer-text'> dlinks@gmail.com</p>
              <p><a className='footer-text' href='tel:+ 234 809 042 6105'>+ 234 123 678 9876</a></p>
              <p><a className='footer-text' href='tel:+ 234 809 042 3576'>+ 234 965 729 5963</a></p>
            </div>
          </footer>
          <Route path="/about/" component={About} />
          <Route path="/faq/" component={FAQ} />          
          <Route path="/contact/" component={Contact} />
          <Route path="/services/" component={Services} />
          </Router>
          );
    }
}
 
export default Footer;