const sendEmail = (e) => {
  console.log(e);
  let fromEmail = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (name || fromEmail || message) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        fromEmail
      )
    ) {
      // send email code here
    } else {
      alert('Please input a valid email address');
    }
  } else {
    alert('Please complete all the fields');
  }
};
