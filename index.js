    if(typeof(Storage) !== "undefined") {
        if (localStorage.beans) {
            localStorage.beans = Number(localStorage.beans)+0;
            document.getElementById("5").innerHTML = localStorage.beans;
        } else {
            localStorage.beans = 1;
            document.getElementById("5").innerHTML = localStorage.beans;
        }
   
    
      function getBeans(beans) {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.beans) {
            localStorage.beans = Number(localStorage.beans)+ beans;
        } else {
            localStorage.beans = 1;
            document.getElementById("5").innerHTML = localStorage.beans;
        }
        
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
    }
function bug() {
alert("Bug reporter has a bug and cannot be used right now. Please report this bug to bug reporter.");
}   
