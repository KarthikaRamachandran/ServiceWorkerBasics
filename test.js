onmessage = function(event){
    let args = event.data;
    postMessage("User Name "+args[0]+" & Email ID "+args[1]+" Submitted Successfully");
}