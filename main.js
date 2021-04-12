var joinList = function () {
  var emailAddress1 = $("email_address1").value;
  var emailAddress2 = $("email_address2").value;

  if (emailAddress1 == "") {
    alert("Email Address is required.");
  } else if (emailAddress2 == "") {
    alert("Second Email Address is required.");
  } else if (emailAddress1 != emailAddress2) {
    alert("Second Email entry must equal first entry.");
  } else if ($("first_name").value == "") {
    alert("First Name is required.");
  } else {
    $("email_form").submit();
  }
};