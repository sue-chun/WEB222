// Sue Ming Chun 032343154

function sideErrors(obj) {
  var sidebar = document.querySelector('.side');
  var h3 = document.createElement('h3');
  var p = document.createElement('p');
  var br = document.createElement('br');
  var password = document.querySelector('#pass');
  var repassword = document.querySelector('#repass');
  var current = obj.name;
  
  sidebar.innerHTML = '';
    
  if (!obj.checkValidity() || obj.value.trim().length == 0) {
    h3.appendChild(document.createTextNode('Error'));
    h3.appendChild(br);
    if (obj.value.trim().length == 0 && current != 'pass') {
      p.appendChild(document.createTextNode('This field is required.'));
    }
    else if (current == 'unitNo' || current == 'streetNo') {
      p.appendChild(document.createTextNode('This field can only contain numbers.'))
    } 
    else if (current == 'fname' || current == 'lname' || current == 'streetName' || current == 'city') {
      p.appendChild(document.createTextNode('This field can only contain letters and spaces.'));
    } 
    else if (current == 'post') {
      p.appendChild(document.createTextNode('Please use format - Letter Digit Letter Digit Letter Digit.  Cannot start with W or Z and cannot contain D, F, I, O, Q or U.'));
    } 
    else if (current == 'phoneNo') {
      p.appendChild(document.createTextNode('Please use format - ###-###-####'));
    } 
    else if (current == 'email') {
      p.appendChild(document.createTextNode('Please use format - name@host.com'));
    }
    sidebar.appendChild(h3);
    sidebar.appendChild(p);
  }
  
  if (current == 'pass' && (password.value.length != 8 || password.value.search(/[A-Z]/i) != 0 || password.value.search(/\d/) == - 1 || password.value.search(/[A-Z]/) == - 1)) {
    p.appendChild(document.createTextNode('Password must be 8 characters long, must start with a character, must have a least 1 digit and 1 uppercase.'));
  } 
  
  else if (current == 'repass' && password.value != repassword.value) {
    p.appendChild(document.createTextNode('Passwords do not match.'));
  }
  
  sidebar.appendChild(h3);
  sidebar.appendChild(p);
}

function validate() {
  var sidebar = document.querySelector('.side');
  var password = document.signup.pass.value;
  var repassword = document.signup.repass.value;
  var h3 = document.createElement('h3');
  var p = document.createElement('p');
  var br = document.createElement('br');
  sidebar.innerHTML = '';
  h3.appendChild(document.createTextNode('Error'));
  h3.appendChild(br);
  
  if (password != repassword) {
    p.appendChild(document.createTextNode('Passwords do not match.'));
    sidebar.appendChild(h3);
    sidebar.appendChild(p);
    h3.appendChild(br);
    return false;
  } 
  
  else if (password.length != 8 || password.search(/[A-Z]/i) != 0 || password.search(/\d/) == - 1 || password.search(/[A-Z]/) == - 1) {
    p.appendChild(document.createTextNode('Password must be 8 characters long, must start with a character, must have a least 1 digit and 1 uppercase.'));
    sidebar.appendChild(h3);
    sidebar.appendChild(p);
    h3.appendChild(br);
    return false;
  } 
  
  else
    return true;
}
