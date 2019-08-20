async function  getABC () {
    // let A = getValueA(); // getValueA takes 2 second to finish
    // let B =  getValueB(); // getValueB takes 4 second to finish
    // let C =  getValueC(); // getValueC takes 3 second to finish

    let results = await Promise.all([ getValueA, getValueB, getValueC ]); 
    return results;
  }
  const getValueA=()=>{
    var width = 5;
    var id = setInterval(frame, 500);
    function frame() {
        if(width==0){
            clearInterval(id);
            console.log("A");
        }else{
            width--;
        }
    }

  }
  const getValueB=()=>{
    var width = 3;
    var id = setInterval(frame, 500);
    function frame() {
        if(width==0){
            clearInterval(id);
            console.log("B");
        }else{
            width--;
        }
    }
  
  }
  const getValueC=()=>{
    var width = 1;
    var id = setInterval(frame, 500);
    function frame() {
        if(width==0){
            clearInterval(id);
            console.log("C");
        }else{
            width--;
        }
    }
  }
  

  const https = require('https');

  https.get('http://localhost:3000/poultrys', (resp) => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.log(JSON.parse(data).explanation);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });;