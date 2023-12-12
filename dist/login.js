  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');
  

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
