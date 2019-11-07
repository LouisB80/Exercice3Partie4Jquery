function submitAndVerif()
{
  var regexFirstName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  var regexLastName = /^[A-Z -]+$/;
  var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var regexPhoneNumber = /(\+[0-9]{2}|0)[0-9]{9}$/;
  var firstName = $('#firstName').val();
  var lastName =$('#lastName').val();
  var mail = $('#mail').val();
  var phoneNumber = $('#phoneNumber').val();
  testFirstName = regexFirstName.test(firstName);
  console.log(testFirstName)
  testLastName = regexLastName.test(lastName);
  console.log(testLastName)
  testMail = regexMail.test(mail);
  console.log(testMail)
  testPhoneNumber = regexPhoneNumber.test(phoneNumber);
  console.log(testPhoneNumber)
  if  (testLastName === false) {
    return alert('Entrez un nom valide comme sur l\'exemple')
  }
  else if (testFirstName === false) {
    return alert('Entrez un prénom valide comme sur l\'exemple')
  }
  else if (testMail === false) {
    return alert('Entrez une adresse mail valide comme sur l\'exemple')
  }
  else if (testPhoneNumber === false) {
    return alert('Entrez un téléphone valide comme sur l\'exemple')
  }
  else {
    return alert('Merci d\'avoir adopté un ours')
  }
}
$(document).ready(function(){
  console.log($('input[type=button]'));
  $('input[type=button]').on('click', submitAndVerif);
})
