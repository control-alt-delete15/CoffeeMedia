function bean() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.beans) {
            localStorage.beans = Number(localStorage.beans);
        } else {
            localStorage.beans = 1;
        }
        document.getElementById("result").innerHTML = localStorage.beans;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
function getBean() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.beans) {
            localStorage.beans = Number(localStorage.beans) + 1;
        } else {
            localStorage.beans = 1;
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
