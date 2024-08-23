



const login = document.getElementById('sign-in')



login.addEventListener('click', (event) => {
    console.log("hellow")
    event.preventDefault();

    const inputFields = document.getElementsByClassName('input-fields');

    const userData = {
        email: '',
        password: '',
    }

    for (let i of inputFields) {
        userData[i.getAttribute('name')] = i.value;

    }

    console.log(userData)


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userData.email)) {
        return;
    }

    for (let i in userData) {
        if (i == '')
            return;
    }

    // localStorage.setItem('email') = userData.email;
    // localStorage.setItem('password') = userData.password;
    
})


