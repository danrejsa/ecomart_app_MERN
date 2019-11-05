import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BuyCar extends Component {
    state = {  }
    render() { 
        return ( 
          
            <Container style={{marginTop:'3rem', marginBottom:'3rem'}}>
                <h3 style={{color:'gray', textAlign:'center'}}> Car Order and Purchase</h3>
                 <article class="card">
            <div class="card-body p-5">
     


            
            <ul class="nav bg radius nav-pills nav-fill mb-3" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active show" data-toggle="pill" href="#nav-tab-card">
                    <i class="fa fa-credit-card"></i> Credit Card</a></li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href='#' >
                    <i class="fab fa-paypal"></i>  Paypal</a></li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
                    <i class="fa fa-university"></i>  Bank Transfer</a></li>
            </ul>
            
            <div class="tab-content">
            <div class="tab-pane fade active show" id="nav-tab-card">
                <p class="alert alert-success">Card Details</p>
                <form role="form">
                <label for="username">Full name (on the card)</label>
<div class="input-group">
	<div class="input-group-prepend">
		<span class="input-group-text"><i class="fa fa-user"></i></span>
	</div>
	<input type="text" class="form-control" name="username" placeholder="" required=""/>
</div> 


<div class="form-group">
<label for="cardNumber">Card number</label>
<div class="input-group">
	<div class="input-group-prepend">
		<span class="input-group-text"><i class="fa fa-credit-card"></i></span>
	</div>
	<input type="text" class="form-control" name="cardNumber" placeholder=""/>
</div> 
</div> 

            
                <div class="row">
                    <div class="col-sm-8">
                        <div class="form-group">
                            <label><span class="hidden-xs">Expiration</span> </label>
                            <div class="input-group">
                                <input type="number" class="form-control" placeholder="MM" name=""/>
                                <input type="number" class="form-control" placeholder="YY" name=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
                            <input type="number" class="form-control" required=""/>
                        </div> 
                    </div>
                </div> 
                <button class="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
                </form>
            </div> 
            <div class="tab-pane fade" id="nav-tab-paypal">
            <p>Paypal is easiest way to pay online</p>
            <p>
            <button type="button" class="btn btn-primary"> <i class="fab fa-paypal"></i> Log in my Paypal </button>
            </p>
            <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div class="tab-pane fade" id="nav-tab-bank">
            <p>Bank accaunt details</p>
            <dl class="param">
              <dt>BANK: </dt>
              <dd> THE WORLD BANK</dd>
            </dl>
            <dl class="param">
              <dt>Accaunt number: </dt>
              <dd> 12345678912345</dd>
            </dl>
            <dl class="param">
              <dt>IBAN: </dt>
              <dd> 123456789</dd>
            </dl>
            <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. </p>
            </div> 
            </div> 
            
            </div> 
            </article>
            </Container>
          
         );
    }
}
 
export default BuyCar;