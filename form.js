var form = document.getElementById('name-form');
form.onsubmit = function(e) {
    e.preventDefault();
    var result = document.getElementById('result');
    console.log(form.fullName.value);
    console.log(form.Email.value);
    console.log(form.cellPhone.value);
    console.log(form.message.value);
    console.log(form.Subject.value);
    form.reset();
};