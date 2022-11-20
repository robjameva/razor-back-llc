window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let fName = document.getElementById('fname').value;
        let lName = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        emailjs.send("test_contact_service", "contact_form_1", {
            from_name: `${fName} ${lName}`,
            message: message,
        })
            .then(function() {
                console.log('SUCCESS!');
                fName = '';
                lName = '';
                email = '';
                subject = '';
                message = '';
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}