function addPlotSell(){

    event.preventDefault();
    const sellsurNum = document.querySelector(".sellsurNum").value;
    const propertyType = document.querySelector(".propertyType").value;
    const place = document.querySelector(".place").value;
    const ownerName = document.querySelector(".ownerName").value;
    console.log(sellsurNum+propertyType+place+ownerName);

    if (sellsurNum.length==0||propertyType.length==0||place.length==0||ownerName.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/sellwrite',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({sellsurNum: sellsurNum, propertyType: propertyType, place: place, ownerName: ownerName})
        })
        .then(function(response){
            console.log(response);
            alert("Plot For Sale Successfuly Added");
            return response.json();
        }).then((plotData)=>{
            
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}
function sellplotDetails(){

    event.preventDefault();
    const sellsurNum = document.querySelector(".sellsurNum").value; 
    console.log(sellsurNum);

    if (sellsurNum.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/sellread',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({sellsurNum: sellsurNum})
        })
        .then(function(response){
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
// function advanceDetails(){

//     event.preventDefault();
//     const plotnum = document.querySelector(".plotnum").value; 
//     console.log(plotnum);

//     if (plotnum.length==0) {
//         alert("Please enter the data properly");
//     }
//     else{
//         fetch('/advanceread',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',              
//             },
//             body: JSON.stringify({plotnum: plotnum})
//         })
//         .then(function(response){
//             console.log(response);
//             return response.json();
//         })
//         .then(function (plotData){
//             dataBuf = plotData["plotData"]
//             console.log(dataBuf)
//             alert(dataBuf);
//         })
//         .catch(function(err){
//             console.log(err);
//             alert("Error in processing request");
//         })    
//     }
// }

function checkPlot(){

    event.preventDefault();
    const surveyNo = document.querySelector(".surveyNo").value;
    const plotNum = document.querySelector(".plotNum").value;
    console.log(surveyNo);
    console.log(plotNum);
    if (surveyNo.length==0||plotNum.length==0) {
        alert("Please enter the data properly");
    }
    else{
        fetch('/checkplot',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify({plotNum: plotNum, surveyNo: surveyNo})
        })
        .then(function(response){
            console.log(response);
            alert("Plot Matched Correctly");
            return response.json();
        })
        .then(function (plotData){
            // dataBuf = plotData["plotData"]
            // console.log(dataBuf)
            // alert(dataBuf);
            console.log(plotData);
            dataBuf = plotData["plotData"]
            
        })
        .catch(function(err){
            console.log(err);
            alert("Error in processing request");
        })    
    }
}