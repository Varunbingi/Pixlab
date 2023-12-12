const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');
const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#id_password1');

togglePassword.addEventListener('click', function (e) {
  if (password.type == 'password'){
      password.type='text';
      togglePassword.className='fa fa-eye-slash';
      
    }
    else{
      password.type='password';
      togglePassword.className='fa fa-eye';
    }
});
togglePassword1.addEventListener('click', function (e) {
    if (password1.type == 'password'){
        password1.type='text';
        togglePassword1.className='fa fa-eye-slash';
        
      }
      else{
        password1.type='password';
        togglePassword1.className='fa fa-eye';
      }
  });
