const form = document.querySelector('form');
const fullName =document.getElementById("name");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const subject =document.getElementById("subject");
const mess =document.getElementById("message");



function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> 
    Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username:"i.correotest@gmail.com",
        Password:"5609CFF1292E96C05B77CD522A474E0BAE10",
        To:'i.correotest@gmail.com',
        From:"i.correotest@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                /*pop up envio form*/
            Swal.fire({
              title: "Success!!",
              text: "Message sent",
              icon: "success",
              iconColor:"#63BFAE"
            });
          }
        }
    );
}
function checkInputs() {
    const items = document.querySelectorAll(".item");
    for(const item of items){
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        } 
        if (items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", ()=> {
            checkEmail();
        });
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/; 
    const errorTxtEmail = document.querySelector(".error-txt-email");
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
        if (email.value!="") {
            errorTxtEmail.innerText = "Entera valid email address";
        }else{
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }

    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();
checkInputs();
    //sendEmail();
});