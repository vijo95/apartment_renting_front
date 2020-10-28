import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Cookie from 'universal-cookie'

import axios from 'axios'
import { newCustomer } from './constants'

import BaseRouter from "./routes";
import Layout from './container/pages/Layout'
import './App.css';

const alphanumeric = 'qwertyuiopasdfghjklzxcvbnm-0123456789'

export default class App extends Component {

  state = {
    cookie: null,
  }

  componentDidMount() {
    const cookie = new Cookie();
    const customer_cookie = localStorage.getItem("customer_id")
    //console.log(customer_cookie)
    if(customer_cookie !== null){
      cookie.set('customer_id', customer_cookie, {path:'/'})
      this.setState({
        cookie: customer_cookie
      })
    } else {
      var len = Math.floor(Math.random() * 33) + 32;
      cookie.set('customer_id', this.randomStr(len,alphanumeric), {path:'/'})
      this.setState({
        cookie: cookie.get('customer_id')
      }, this.createNewCustomer(cookie.get('customer_id')))
      localStorage.setItem("customer_id",cookie.get('customer_id'))
    }
  }

  createNewCustomer = (cookie) => {
    axios
      .post(newCustomer,{
        customer_cookie_id:cookie
      })
      .catch(err =>{
        console.log(err)
      })
  }

  randomStr(len, arr) { 
    var ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans +=  
          arr[Math.floor(Math.random() * arr.length)]; 
    } 
    return ans; 
  } 

  render() {
    const {cookie} = this.state
    if(cookie !== null){
      return (
        <Router>
          <Layout cookie={this.state.cookie}>
            <BaseRouter />
          </Layout>
        </Router>
      )
    } else {
      return null
    }
  }
}



