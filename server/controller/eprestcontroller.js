var superagent = require('superagent');
var config = require('../config/config');
var https = require('https');
var path = require('path');
var fs = require('fs');
var jwt    = require('jsonwebtoken');
var rootPath = path.normalize(__dirname+'/../../');

exports.doGet = function(req, res) {
  var queryString = req.query;
  var backendServer = req.headers['x-backend-env'];
  var token = req.jwtPayload;
  console.log('TOKEN IS', token)
  var apiUrl = config[backendServer].apiUrl;
  var certPath = config[backendServer].certPath;
  var cert = fs.readFileSync(certPath);
  var id = token.body.sub;
  var pwd = token.body.permissions;
  console.log('ID AND PWD IS' + id +' & '+pwd);
  console.log("Query String is ", req.query);

    superagent.get(apiUrl+'/api/rest/get')
    .auth(id,pwd)
    .cert(cert)
    .query(req.query)
    .set('Accept', 'application/json')
    .set('X-Force-Content-Type', 'application/json')
    .set('X-Context-geo', req.headers['x-context-geo'])
    .set('X-Context-Group', req.headers['x-context-group'])
    .set('X-Context-Id', req.headers['x-context-id'])
    .end((err, api_res)=> {
      if(err) {
        console.log("Error from API", api_res.status);
        res.send({status: "0", message: 'ET_000', items: []});
      } else {
        console.log("HTTP STATUS CODE = "+api_res.status);
        res.send(api_res.body);
      }
    });
};

exports.doPost = function(req, res) {
  // superagent.post('http://localhost:9080/services/epricer/v2/ibm/api/rest/post')
  // .auth('kiranchowdhury@in.ibm.com','********')
  // .send(req.body)
  // .set('accept','json')
  // .end((err, apiresp)=>{
  //   console.log("Raw Response", apiresp.body);
  //   //console.log("Response from ePricer", JSON.stringify(apiresp.body));
  //   res.send(apiresp.body);
  // });

};


/*
* MOCK DATA SERVICE --- For which back end services are not ready yet
*/

exports.getCustomers = function(req, res) {
  console.log('Get Customers Api Called');
 var customers = createDummyCustomers();
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    customers: customers,
    count: customers.length
  }
  res.send(resp);
}

exports.createCustomer = function(req, res) {
  console.log('Createting customer', req.body);
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    customer: req.body
  }
  res.send(resp);
  }


exports.getAllTrainingLibrary = function(req, res) {
  console.log('Get getAllTrainingLibrary Api Called');
  var trainingLibrary = createDummyTrainingLibrary();
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    trainingLibrary: trainingLibrary,
    count: trainingLibrary.length
  }
  res.send(resp);
}

createDummyCustomers = function(){
  customers = [];
  for(var i=0; i<100; i++) {
    customers.push({
      id: 'CustId-'+i,
      name: 'Cust Name-'+i,
      contactName: 'Cust Contact-'+i,
      noOfUsers: i*12,
      email: 'custemai_'+i+'@'+'Cust Name-'+i+'.com',
      phone: '00'+i+'1011',
      address: 'Cust Address-'+i
    })
  }
  return customers;
}

createDummyTrainingLibrary = function(){
  let date = new Date();
  trainingLibrary = [];
  for(var i=0; i<100; i++) {
    trainingLibrary.push({
      id: 'id' + i,
      equipment: 'Equipment '+ i,
      trainingName: 'Training Name ' + i,
      date: date
    })
  }
  return trainingLibrary;
}
