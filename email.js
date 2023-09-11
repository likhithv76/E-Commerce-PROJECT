function emailsend(){

    var Username = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lvg7338@gmail.com",
        Password : "1D5816DFF5E296236B95A677C3E589B27D17",
        To : 'slvgowdru8739.com',
        From : "lvg7338@gmail.com",
        Subject : "This is the subject",
        Body : messagebody(),
    }).then(
      message => alert(message)
    );
}