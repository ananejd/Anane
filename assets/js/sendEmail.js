(function(){
      emailjs.init("user_lTf5dMeAuuISosSujaKLO");
      
    })();

function sendMail(contactForm) {
    emailjs.send("gmail", "ananejd", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
