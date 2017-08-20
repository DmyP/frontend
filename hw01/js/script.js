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

function validate(form) {

    var email = form.email.value;
    var password = form.password.value;

    return validateEmail(email) ? form.email.focus() : form.email.focus();

}

function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]{4,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}*/
