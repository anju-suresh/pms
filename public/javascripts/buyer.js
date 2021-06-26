
function getHistory(){

    event.preventDefault();
    const plotNum = document.querySelector(".plotNum").value;
    
    console.log(plotNum);

    if (plotNum.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/plotHistory',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({plotNum: plotNum})
        })
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function (plotData){
            dataBuf = plotData["plotData"]
            console.log(JSON.parse(JSON.stringify(plotData)));
            console.log(dataBuf)
            
            alert(dataBuf);
           
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}


function deletePlots(){

    event.preventDefault();
    const plotNum = document.querySelector(".plotNum").value;
    
    console.log(plotNum);

    if (plotNum.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/plotdelete',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({plotNum: plotNum})
        })
        .then(function(response){
            console.log(response);
            alert("Deleted Successfully");
            return response.json();
        })
        .then(function (plotDelete){
            
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}


function plotDetail(){

    event.preventDefault();
    const plotNum  = document.querySelector(".plotNum").value;
    
    console.log(plotNum);

    if (plotNum.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/plotdata',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({plotNum: plotNum})
        })
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then((plotData)=>{
            console.log(plotData);
            dataBuf = plotData["plotData"]
            alert(JSON.parse(JSON.stringify(plotData)));
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request"+ err);
        })    
    }
}

function RequestPlot(){

    event.preventDefault();
    const plotNum = document.querySelector(".plotNum").value;
    const propertyType = document.querySelector(".propertyType").value;
    const size = document.querySelector(".size").value;
    const place = document.querySelector(".place").value;
    const buyerName = document.querySelector(".buyerName").value;
    console.log(plotNum+propertyType+size+place+buyerName);

    if (plotNum.length==0||propertyType.length==0||size.length==0||place.length==0||buyerName.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/request',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({plotNum: plotNum, propertyType: propertyType, size: size, place: place, buyerName: buyerName})
        })
        .then(function(response){
            console.log(response);
            alert("Request Successfuly Added");
            return response.json();
        }) .then((plotData)=>{
            
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}

function PayAdvance(){

    event.preventDefault();
    const plotNum = document.querySelector(".plotNum").value;
  
    const advanceAmt = document.querySelector(".advanceAmt").value;
    
    console.log(plotNum+tokenNo+advanceAmt);

    if (plotNum.length==0||tokenNo.length==0||advanceAmt.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/advance',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({ plotNum:plotNum,advanceAmt: advanceAmt})
        })
        .then(function(response){
            // console.log(response);
            alert("Advance amount Successfuly Added");
            // return response.json()
        })
        .catch(function(err){
            // console.log(err);
            // alert("Error in processing request");
        })    
    }
}
