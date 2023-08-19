document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    if(email === 'tarek@gmail.com' && password === 'tarek'){
        window.location.href = 'index.html';
    }else{
        alert('Please enter a valid password');
    }
})