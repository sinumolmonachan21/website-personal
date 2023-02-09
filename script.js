

  var typed = new Typed(".typing", {
    strings: ["Programmer", "Developer", "Fast Learner"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
  });

  function validate() {
    var fname = document.gform.fullName.value.trim();
    var contact = document.gform.contact.value;
    var email = document.gform.email.value;
    var message = document.gform.massage.value.trim();
    var nameformat = /^[a-zA-Z ]+$/;

    if (fname.match(nameformat)) {
    } else {
      window.alert("Please enter your full name properly!");
      document.gform.fullName.focus();
      return false;
    }
    numbercheck = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (contact.match(numbercheck)) {
    } else {
      window.alert("Enter your mobile number properly!");
      document.gform.contact.focus();
      return false;
    }

    var mailformat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.match(mailformat)) {
    } else {
      alert("Invalid email address.");
      document.gform.email.focus();
      return false;
    }
    if (message == "") {
      window.alert("Enter Message!");
      document.gform.massage.focus();
      return false;
    }
    return true;
  }

 <!-- jQuery -->


<!-- Materialize - Compiled and minified JavaScript-->

  // Materialize - Initializers
  $(document).ready(function () {
    $(".scrollspy").scrollSpy();
    // Initialize collapse button
    $(".button-collapse").sideNav({
      menuWidth: 190, // Default is 240
      edge: "left", // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  });



  $("#gform").submit((e) => {
    document.getElementById("submit").innerHTML = "Please wait Processing";
    e.preventDefault();
    if (validate()) {
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwCTwoagmB_TgU1oJHe1PqlrpGRZVh-B80n5H83zWDTYY-hR84wByBchLvgNw-3rJk3/exec",
        data: $("#gform").serialize(),
        method: "post",
        success: function (response) {
          alert("message successfully sended");
          window.location.reload();
        },
        error: function (err) {
          alert("something error");
        },
      });
    } else {
      document.getElementById("submit").innerHTML = "Submit";
    }
  });
