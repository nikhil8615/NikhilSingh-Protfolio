const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail(){
    const bodyMessage = `Full Name: ${name.value}<br> Email: ${email.value}<br>  Subject: ${subject.value}<br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nikhilbdps1256@gmail.com",
        Password : "B94FEF1BDAEB9461F4FC72D28D101C8C6223",
        To : 'nikhilbdps1256@gmail.com',
        From : 'nikhilbdps1256@gmail.com',
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
})

