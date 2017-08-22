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
    if(form.email.value == "") {
        alert("Error: email cannot be blank!");
        form.email.focus();
        return false;
    }
    re = /(?=.+[A-Za-zА-Яа-я])([0-9A-Za-zА-Яа-я\.\-]){4,30}@[\dA-Za-zА-ЯІЇЄа-яіїє]{2,30}(\.[\dA-Za-zА-ЯІЇЄа-яіїє]{2,5})?\.[\dA-Za-zА-ЯІЇЄа-яіїє]{2,5}/;
    if(!re.test(form.email.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        form.email.focus();
        return false;
    }

    if(form.password.value != "") {
        if(form.password.value.length < 6) {
            alert("Error: Password must contain at least six characters!");
            form.password.focus();
            return false;
        }
        if(form.password.value == form.username.value) {
            alert("Error: Password must be different from Username!");
            form.password.focus();
            return false;
        }
        re = /[0-9]/;
        if(!re.test(form.password.value)) {
            alert("Error: password must contain at least one number (0-9)!");
            form.password.focus();
            return false;
        }
        re = /[a-z]/;
        if(!re.test(form.password.value)) {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
            form.password.focus();
            return false;
        }
        re = /[A-Z]/;
        if(!re.test(form.password.value)) {
            alert("Error: password must contain at least one uppercase letter (A-Z)!");
            form.password.focus();
            return false;
        }
    } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.password.focus();
        return false;
    }

    alert("You entered a valid password: " + form.password.value);
    return true;
}
