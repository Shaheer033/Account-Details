
$(document).ready(function () {
    $('#accountForm').submit(function (event) {
        // Name validation
        var name = $('#name').val();
        if (name.length < 3 || name.length > 50) {
            alert("Name must be between 3 and 50 characters.");
            event.preventDefault();
            return;
        }

        // Email validation
        var email = $('#email').val();
        if (email === '') {
            alert("Email is required.");
            event.preventDefault();
            return;
        }

        // Phone validation
        var phone = $('#phone').val();
        if (phone.length < 10 || phone.length > 14) {
            alert("Phone number must be between 10 and 14 characters.");
            event.preventDefault();
            return;
        }

        // Age validation
        var age = parseInt($('#age').val());
        if (age < 18 || age > 120) {
            alert("Age must be between 18 and 120.");
            event.preventDefault();
            return;
        }

        // Gender validation
        var gender = $('#gender').val();
        if (gender.length < 4 || gender.length > 15) {
            alert("Gender must be between 4 and 15 characters.");
            event.preventDefault();
            return;
        }

        // Address validation (optional field)
        var address = $('#address').val();
        if (address.length > 50) {
            alert("Address must be no more than 50 characters.");
            event.preventDefault();
            return;
        }
    });
});