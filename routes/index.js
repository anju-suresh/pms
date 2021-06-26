var express = require('express');
var router = express.Router();
const {clientApplication} = require('./client')

/* GET home page. */



router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home Page' });
});
router.get('/registar', function(req, res, next) {
  res.render('registar', { title: 'Registar Dashboard' });
});
router.get('/register/regAdd', function(req, res, next) {
  res.render('regAdd', { title: 'Registar Dashboard' });
});
router.get('/register/regUpdate', function(req, res, next) {
  res.render('regUpdate', { title: 'Registar Dashboard' });
});
router.get('/register/regView', function(req, res, next) {
  res.render('regView', { title: 'Registar Dashboard' });
});
router.get('/register/regDelete', function(req, res, next) {
  res.render('regDelete', { title: 'Registar Dashboard' });
});
router.get('/register/regRegister', function(req, res, next) {
  res.render('regRegister', { title: 'Registar Dashboard' });
});
router.get('/seller', function(req, res, next) {
  res.render('seller', { title: 'Seller Dashboard' });
});
router.get('/seller/matchOrd', function(req, res, next) {
  res.render('matchOrd', { title: 'Seller Dashboard' });
});

router.get('/seller/viewsellPlot', function(req, res, next) {
  res.render('viewsellPlot', { title: 'Seller Dashboard' });
});

router.get('/buyer', function(req, res, next) {
  res.render('buyer', { title: 'Buyer Dashboard' });
});

router.get('/buyer/deleteOrd', function(req, res, next) {
  res.render('deleteOrd', { title: 'Buyer Dashboard' });
});
router.get('/buyer/viewOrd', function(req, res, next) {
  res.render('viewOrd', { title: 'Buyer Dashboard' });
});
router.get('/buyer/raiseOrd', function(req, res, next) {
  res.render('raiseOrd', { title: 'Buyer Dashboard' });
});
router.get('/buyer/getOrdHis', function(req, res, next) {
  res.render('getOrdHis', { title: 'Buyer Dashboard' });
});
router.get('/buyer/advancePay', function(req, res, next) {
  res.render('advancePay', { title: 'Buyer Dashboard' });
});

router.get('/table', function(req, res, next) {
  res.render('table', { title: 'table' });
});
router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Event' });
});

router.post('/regwrite',function(req,res){

  const surveyNo = req.body.surveyNo ;
  const propertyType= req.body.propertyType;
  const size = req.body.size ;
  const place = req.body.place;
  const ownerName = req.body.ownerName;
  
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Registar","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn(
      "addPlot",
      surveyNo, propertyType, size, place, ownerName
    )
    .then(message => {
      console.log(message.toString());
      res.json(message.toString());
    });
});

router.post('/regread',async function(req,res){
  const surveyNo = req.body.surveyNo;
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Registar","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn("plotDetails", surveyNo).then(message => {
    console.log(message.toString());
    res.send({ plotData : message.toString() });
    
  });
 });


 router.post('/regdelete',async function(req,res){
  const surNo = req.body.surveyNo;
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Registar","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn("deletePlot", surNo).then(message => {
    console.log("Plot deleted"+ message.toString());
    res.send({ plotDelete : message.toString() });
    });

});

router.post('/regPlot',function(req,res){

  const surveyNo = req.body.surveyNo ;
  const newOwner= req.body.newOwner;
 
  
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Registar","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn(
      "registerplot",
      surveyNo, newOwner 
    )
    .then(message => {
      console.log(message.toString());
      res.json(message.toString());
    });
});


router.post('/update',function(req,res){

  const surveyNo = req.body.surveyNo ;
  const newPropertyType= req.body.newPropertyType;
  const newSize= req.body.newSize ;
  const newPlace = req.body.newPlace;
  const newOwner = req.body.newOwner;
  
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Registar","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn(
      "updatePlot",
      surveyNo, newPropertyType, newSize, newPlace, newOwner
    )
    .then(message => {
      console.log(message.toString());
      res.json(message.toString());
    });
});

//------------------------Seller Functions starts--------------------------

router.post('/sellwrite',function(req,res){

  const sellsurNum = req.body.sellsurNum ;
  const propertyType= req.body.propertyType;
  const place = req.body.place;
  const ownerName = req.body.ownerName;
  
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Seller","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn(
      "readyToSell",
      sellsurNum, propertyType, place, ownerName
    )
    .then(message => {
      console.log(message.toString());
      res.json(message.toString());
    });
});

router.post('/sellread',async function(req,res){
  const sellsurNum = req.body.sellsurNum;
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Seller","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn("readDetails", sellsurNum).then(message => {
    console.log(message.toString());
    // res.json(message.toString());
    res.send({ plotData : message.toString() });
  });

 });

 router.post('/checkplot',async function(req,res){
  const surveyNo= req.body.surveyNo;
  const plotNum= req.body.plotNum;
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Seller","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn("matchOrder", plotNum, surveyNo).then(message => {
    console.log(message.toString());
    // res.send({ plotData : message.toString()});
    res.json(message.toString());
  });

 });

// ---------------Seller Function Ends-------------------
// ---------------Buyer Function Starts------------------

 router.post('/plotHistory',async function(req,res){
  const plotNum= req.body.plotNum;
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Buyer","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn("getPlotHistory", plotNum).then(message => {
    console.log(message.toString());
    res.send({ plotData : message.toString()});
  });

 });

 router.post('/plotdelete',async function(req,res){
  const plotNum = req.body.plotNum ;
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Buyer","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn("deleteOrd", plotNum).then(message => {
    console.log("Plot deleted");
    res.json(message.toString());
    // res.send("Plot Deleted Successfully");
    });

});

router.post('/plotdata',async function(req,res){
  const plotNum = req.body.plotNum ;
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Buyer","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn("readOrder", plotNum).then(message => {
    
    var jsonData= JSON.parse(JSON.stringify(message.toString()));
    console.log(jsonData) + "json data";
    res.json(message.toString());
    // res.render("result",{data: jsonData});
    console.log(message.toString());
    // res.send({ plotdata : message.toString() });
   
  });
 });

 router.post('/request',function(req,res){

  const plotNum = req.body.plotNum ;
  const propertyType= req.body.propertyType;
  const size = req.body.size ;
  const place = req.body.place;
  const buyerName = req.body.buyerName;
  
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Buyer","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.generatedAndSubmitTxn(
      "raiseOrder",
      plotNum, propertyType, size, place, buyerName
    )
    .then(message => {
      console.log(message.toString());
      res.json(message.toString());
      // res.send("Request Updated Successfully")
    });
});

router.post('/advance',function(req,res,next){
  const data =req.body; 
  const plotNum=data.plotNum;
  const transientData={
   
    advanceAmt:Buffer.from(data.advanceAmt)
  }
  
  let RegistarClient = new clientApplication();
  RegistarClient.setRoleAndIdentity("Buyer","admin")
  RegistarClient.initChannelAndChaincode("autochannel", "Chaincode");
  RegistarClient.submitTxnWithPDC(
      "createMyPrivateAsset",
      transientData,data.plotNum)
    .then((message)=>{
      res.render("result",{
        record:"private data"
      })
    }).catch((err)=>
      res.render('error',{message:'${err.endorsements[0].message}'}));
    
      
});
// ---------------Buyer Function Ends--------------------

const {eventGenerator} = require('./event')
router.get('/event', function(req, res, next) {
  res.render('event', { title: 'Event' });
 });
 router.post('/event',function(req,res,next){
  let obj = new eventGenerator('admin')
  obj.init_connection("autochannel","Chaincode")
  obj.generateBlockEvent()
 });
module.exports = router;


