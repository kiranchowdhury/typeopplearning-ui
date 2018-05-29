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
 // console.log('Get Customers Api Called');
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
  // console.log('Createting customer', req.body);
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    customer: req.body
  }
  res.send(resp);
  }

  exports.removeCustomer = function(req, res) {
    var resp = {
      status: 1,
      code: 'OK',
      message: 'success',
      customer: req.body
    }
    res.send(resp);
  }


exports.getAllTrainingLibrary = function(req, res) {
 // console.log('Get getAllTrainingLibrary Api Called');
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

exports.getInvoiceList = function(req, res) {
  // console.log('Get getAllTrainingLibrary Api Called');
   var invoiceList = createDummyInvoiceList();
   var resp = {
     status: 1,
     code: 'OK',
     message: 'success',
     invoiceList: invoiceList,
     count: invoiceList.length
   }
   res.send(resp);
 }

 exports.getTrainingEquipmentCategory = function(req, res) {
  // console.log('Get getAllTrainingLibrary Api Called');
   var equipmentCategory = createDummyEquipmentCategory();
   var resp = {
     status: 1,
     code: 'OK',
     message: 'success',
     equipmentCat: equipmentCategory,
     count: equipmentCategory.length
   }
   res.send(resp);
 }

exports.getAllCertificates = function(req, res) {
  var certificateList = createDummyCertificates();
  console.log('====creating certificate response==');
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    certificates: certificateList,
    count: certificateList.length
  }

  res.send(resp);
}

exports.getProfileDetails = function (req, res) {
  console.log('creating profile details');
  var resp = {
    id: 1231,
    fullName: 'Kiran Chowdhary',
    profileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJqWtCdNAfCdf3FhiqZ6ebvFw1bfCLYSTvIKwWDn0Yea58VnK',
    email: 'kiran.soft@gmail.com',
    phone: '77173267239',
    address: 'G-145, Damlur',
    specialCredits: 'XYZ',
    status: 1
  }
  res.send(resp);
}

exports.getUserList = function (req, res) {
  console.log('creating user list');
  var userList = createDummyUserList();
  var resp = {
    status: 1,
    code: 'OK',
    message: 'success',
    userList: userList,
    count: userList.length
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

createDummyCertificates = function() {
  certificateList = [];
  for(var i=0; i<50; i++) {
    certificateList.push({
      id: 'crid-'+i,
      trainingName: 'Certificate for Training Name - '+i,
      status: 'passed'
    })
  }
  return certificateList;
}

createDummyUserList = function() {
  userList = [];
  for( var i=0; i<50; i++) {
    if(i%2 === 0){
      userList.push({
        fullName: 'Melisa Golubic',
        noOfTrainings: 29+i,
        status: 'waiting',
        userId: 'MG-'+i
      })
    }
    else if(i%3 === 0){
      userList.push({
        fullName: 'Melisa Golubic',
        noOfTrainings: 29+i,
        status: 'passed',
        userId: 'MG-'+i
      })
    }
    else {
      userList.push({
        fullName: 'Melisa Golubic',
        noOfTrainings: 29+i,
        status: 'in progress',
        userId: 'MG-'+i
      })
    }
  }
  return userList;
}

createDummyInvoiceList = function(){
  let date = new Date();
  invoiceList = [];
  for(var i=0; i<100; i++) {
    let status = 'paid';
    if(i==0){
      status = 'sent';
    }else if(i==3){
      status='draft'
    }

    invoiceList.push({
      id: 'id' + i,
      invoiceNumber: i,
      invoiceDate: date ,
      invoiceTotal: i*100+50,
      dueDate : date,
      
      status : status
    })
  }
  return invoiceList;
}

createDummyEquipmentCategory = function(){
  equipmentCategories = [];
  let date = new Date();
  equipmentCategories.push({
    id : '1',
    trainingName : 'Building / Construction Equipment',
    equipment : 'Equipment 01',
    date : date
  })
  equipmentCategories.push({
    id : '2',
    trainingName : 'Transportation',
    equipment : 'Equipment 02',
    date : date
  })
  equipmentCategories.push({
    id : '3',
    trainingName : 'Agriculture',
    equipment : 'Equipment 03',
    date : date
  })
  equipmentCategories.push({
    id : '4',
    trainingName : 'Industry',
    equipment : 'Equipment 04',
    date : date
  })
  return equipmentCategories;
}

