function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let status;

    // IF-ELSE: Check credentials
    if (user === "" || pass === "") {
        status = "empty";
    } else if (user === "Lindsay16" && pass === "2010") {
        status = "success";
    } else {
        status = "error";
    }

    // SWITCH: decides what message to show
    // It checks the value of "status"
    switch (status) {

        case "empty":
            alert("Please enter username and password.");
            break;

        case "success":
            alert("Access granted\nWelcome, " + user + "!");
            break;

        case "error":
            alert("Access denied\nIncorrect username and/or password.");
            break;

        default:
            alert("System error.");
    }
}

// Clear input fields
function clearFields() {
    document.getElementById("username").value = "lindsay@gmail.com";
    document.getElementById("password").value = "Lindsay2016";
}
