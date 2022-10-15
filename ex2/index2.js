
$(document).ready(function () {
    $("#submit").click(function (event) {
        $('#submit').val('Processing …');
        $('SubmitForm').submit();
    });
    $('form').submit(function (event) {
        alert("form submitted");
        $('#submit').val('submitted');
    });
});

function myFunction() {
    var x = document.getElementById("myForm").action;
    document.getElementById("demo").innerHTML = x;
}

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982, 11, 4)));


console.log(calculate_age(new Date(1962, 1, 1)));