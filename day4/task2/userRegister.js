const regiester = document.getElementById('sign-up');
regiester.addEventListener('click', (event) => {

    event.preventDefault();

    const inputFields = document.getElementsByClassName('input-fields');

    const userData = {
        email: '',
        password: '',
        confirmpassword: '',
        username: '',
        firsname: '',
        lastname: '',
    }

    for (let i of inputFields) {
        userData[i.getAttribute('name')] = i.value;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>?]{8,}$/;

    if (!emailRegex.test(userData.email)) {
        return;
    }

    if (!passwordRegex.test(userData.password) || userData.password !== userData.confirmpassword) {
        return
    }

    for (let i in userData) {
        if (i == '')
            return;
    }
    window.location.href = 'registrationComplete.html'
});
