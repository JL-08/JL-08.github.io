const sendEmail = (e) => {
  e.preventDefault();
  const fromEmail = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const toEmail = 'janellelacsamana@gmail.com';

  if (subject || fromEmail || message) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        fromEmail
      )
    ) {
      // window.open(`mailto:${toEmail}?subject=${subject}&body=${message}`);
    } else {
      alert('Please input a valid email address');
    }
  } else {
    alert('Please complete all the fields');
  }
};
