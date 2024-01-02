const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username:"f",
        Password:"f",
        To:"them@website.com",
        From:"you@isp.com",
        Subject:"This is the subject",
        Body:"And this is the body"
    }).them(
        message => alert(message)
    );
}