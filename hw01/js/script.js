
function sortTable(n) {
    var switchcount = 0;
    var table = document.getElementById("myTable");
    var switching = true;
    var dir = "asc";

    while (switching) {
        var rows = table.getElementsByTagName("TR");
        for (var i = 1; i < (rows.length - 1); i++) {

            var shouldSwitch = false;

            var x = rows[i].getElementsByTagName("TD")[n];
            var y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            switching = false;
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}



function checkForm(form)
{
    var email = form.email.value.trim();
    var pass = form.password.value.trim();
    regex_email = /((?=[A-zА-я]+[0-9]*)|(?=[0-9]*[A-zА-я]+))([A-zА-я0-9-_.]{4,20})@([A-zА-я]{2,5}\.)([A-zА-я]{2,5}\.)*([A-zА-я]{2,5})/;
    regex_length = /^.{8,}$/;
    regex_dog = /(?=[@])/;
    regex_dot = /(?=[.])/;
    regex_lengthBeforeDog = /^\w{4,}@\w.*$/;
    regex_digitsBeforeDog = /^\d{4,}@\w.*$/;
    regex_lengthAfterDog = /^\w{4,}@\w{2,5}.\w{2,5}$/;

    regex_passLength = /^.{8,20}$/;
    regex_passUpperCase = /(?=.*[A-Z])/;
    regex_passLowerCase = /(?=.*[a-z])/;
    regex_passCharacters = /(?=.*[~!@#$%^&*()_+\-=`;:'"|]{3,5})/;

    var message = "";
    var emailFlag = true;
    var passFlag = true;
    if(!regex_length.test(email)) {
        message +="Email must  be longer than 8 symbols\n";
        emailFlag = false;
    }
    if(!regex_dog.test(email)) {
        message +="Email must contain @\n";
        emailFlag = false;
    }
    if(!regex_dot.test(email)) {
        message +="Email must contain at least one '.'\n";
        emailFlag = false;
    }
    if(!regex_lengthBeforeDog.test(email)) {
        message +=
            "Email must contain at least 4 symbols before '@'\n";
        emailFlag = false;
    }
    if(regex_digitsBeforeDog.test(email)) {
        message +=
            "Email must have at least one character before '@'\n";
        emailFlag = false;
    }
    if(!regex_lengthAfterDog.test(email)) {
        message +=
            "Email must have  - 2 to 5 symbols after '@' and before '.'\n" +
            "Email must have  - 2 to 5 symbols after '.'";
        emailFlag = false;
    }

    if(!regex_passLength.test(pass)) {
        message +=
            "Password length must be from 8 to 20 characters\n";
        passFlag = false;
    }
    if(!regex_passLowerCase.test(pass)) {
        message +=
            "Password must have at least one character lower case\n";
        passFlag = false;
    }
    if(!regex_passUpperCase.test(pass)) {
        message +=
            "Password must have at least one character upper case\n";
        passFlag = false;
    }
    if(!regex_passCharacters.test(pass)) {
        message +=
            "Password length must have from 3 to 5 characters ~!@#$%^&*()_+-=`;:'\\\"|\n";
        passFlag = false;
    }
    if((emailFlag) && (passFlag)){
        alert("Everything is correct, logging in....");
        return true;
    } else {
        alert(message);
        return false;
    }
}