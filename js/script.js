function validate() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Name validation

    if (name.length == 0) {
        document.getElementById("error-show").innerHTML = "Please Enter your Name ";
        return false;  
    } else {
        document.getElementById("error-show").innerHTML = " ";
    }

    // email validation

    if (email.length == 0) {
        document.getElementById("error-show").innerHTML = "Please Enter your email id";
        return false;

    } else if (!email.match(/^\w{1}[a-zA-Z0-9_.-]+@[A-Za-z0-9-]+\.[a-zA-Z0-9]{2,3}$/)) {

        document.getElementById("error-show").innerHTML = "Enter valid email id";
        return false;

    } else {
        document.getElementById("error-show").innerHTML = " ";
    }

    // message validation

    if (message.length < 1) {

        document.getElementById("error-show").innerHTML = "write message";
        return false;

    } else {

        document.getElementById("error-show").innerHTML = " ";

    }
}