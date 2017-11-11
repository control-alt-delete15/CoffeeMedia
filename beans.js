 function bean() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.beans) {
            localStorage.beans = Number(localStorage.beans);

        } else {
            localStorage.beans = 100;
   
      
        }
        document.getElementById("result").innerHTML = localStorage.beans;

    
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
 
    }
}
         



function bug() {
alert("Bug reporter has a bug and cannot be used right now. Please report this bug to bug reporter.");
}   

function getBean(bean) {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.beans) {
            localStorage.beans = Number(localStorage.beans) + bean;
        } else {
            localStorage.beans = bean;
        }
        document.getElementById("result").innerHTML = localStorage.beans;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function buyBean(price) {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.beans) {
            localStorage.beans = Number(localStorage.beans) - price;
        } else {
            localStorage.beans = 1;
        }
        document.getElementById("result").innerHTML = localStorage.beans;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function removeAllBeans() {
    localStorage.beans = 0;
    
    }
