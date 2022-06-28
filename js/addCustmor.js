// import _ from './bootstrap.js'
// const R = require('./bootstrap');
// import { customers as _customers } from "../js/bootstrap";
import { R } from './bootstrap';


let Customername
function myFunction() {

    // let Customername = document.getElementById("customerName").value;
     Customername = document.forms["myForm"]["name"].value;

    console.log(Customername);


  }




R.customers.push(Customername);
 console.log(customers);