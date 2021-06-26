function toRegDash() {
    window.location.href='/home';

}


function addPlotdetails(){

    event.preventDefault();
    const surveyNo = document.querySelector(".surveyNo").value;
    const propertyType = document.querySelector(".propertyType").value;
    const size = document.querySelector(".size").value;
    const place = document.querySelector(".place").value;
    const ownerName = document.querySelector(".ownerName").value;
    console.log(surveyNo+propertyType+size+place+ownerName);

    if (surveyNo.length==0||propertyType.length==0||size.length==0||place.length==0||ownerName.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/regwrite',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({surveyNo: surveyNo, propertyType: propertyType, size: size, place: place, ownerName: ownerName})
        })
        .then(function(response){
            console.log(response);
            alert("Plot Successfuly Added");
            return response.json();
        }) .then((plotData)=>{
            
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}
function plotDetails(){

    event.preventDefault();
    const surveyNo = document.querySelector(".surno").value;
    
    console.log(surveyNo);

    if (surveyNo.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/regread',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({surveyNo: surveyNo})
        }).then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function (plotData){
            dataBuf = plotData["plotData"]
            console.log(dataBuf)
            alert(dataBuf);
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}
function deletePlot(){

    event.preventDefault();
    const surveyNo = document.querySelector(".survno").value;
    
    console.log(surveyNo);

    if (surveyNo.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/regdelete',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({surveyNo: surveyNo})
        }).then(function(response){
            console.log(response);
            alert("Plot Deleted Successfuly");
            return response.json();
        })
        .then(function (plotDelete){
            // dataBuf = plotDelete["plotDelete"]
            // console.log(dataBuf)
            // alert(dataBuf);
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}

function registerPlot(){

    event.preventDefault();
    const surveyNo = document.querySelector(".surveyNo").value;
    const newOwner = document.querySelector(".newOwner").value;
    console.log(surveyNo+newOwner);

    if (surveyNo.length==0||newOwner.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/regPlot',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({surveyNo: surveyNo, newOwner: newOwner})
        })
        .then(function(response){
            console.log(response);
            alert("Plot Registration Successful");
            return response.json();
        }).then((plotData)=>{
            
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}

    
function updatePlotdetails(){

    event.preventDefault();
    const surveyNo = document.querySelector(".surveyNo").value;
    const newPropertyType = document.querySelector(".newPropertyType").value;
    const newSize = document.querySelector(".newSize").value;
    const newPlace = document.querySelector(".newPlace").value;
    const  newOwner = document.querySelector(".newOwner ").value;
    console.log(surveyNo+newPropertyType+newSize+newPlace+newOwner );

    if (surveyNo.length==0||newPropertyType.length==0||newSize.length==0||newPlace.length==0|| newOwner .length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/update',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({surveyNo: surveyNo, newPropertyType: newPropertyType, newSize: newSize, newPlace: newPlace,  newOwner:  newOwner })
        })
        .then(function(response){
            console.log(response);
            alert("Plot Updated Successfuly");
            return response.json();
        }).then((plotData)=>{
            
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}
