import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.13/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyBkYCWGWspSHA2kx7zt2xbsOXZ9lyXxhoc",
    authDomain: "form-4c517.firebaseapp.com",
    projectId: "form-4c517",
    storageBucket: "form-4c517.appspot.com",
    messagingSenderId: "848542016905",
    appId: "1:848542016905:web:f268decdb75fdda6162d58",
    measurementId: "G-1DM2P7R7ZS"
};

const firebaseapp = initializeApp(firebaseConfig, 'form');
const dataBase = getFirestore(firebaseapp);

console.log()

async function HandleUserDatae(firstName, lastName, email, password, confirmPassword, age) {

    try {
        const docRef = await addDoc(collection(dataBase, 'userdata'), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            age: age
        })
        console.log(docRef);
    }
    catch (e) {
        console.log(e);
    }

}

const inputTags = document.getElementsByClassName('input_tags');
console.log(inputTags)
const formBtn = document.getElementById('form__btn')

formBtn.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    console.log('hellow world')
    const firstName = inputTags[0].value;
    const lastName = inputTags[1].value;
    const email = inputTags[2].value;
    const password = inputTags[3].value;
    const confirmPassword = inputTags[4].value;
    const age = inputTags[5].value

    if (password !== confirmPassword) {
        alert('password not matched');
    }
    if (!firstName, !lastName, !email, !password, !confirmPassword, !age) return;
    console.log(firstName, lastName, email, password, confirmPassword, age);

    if (!firstName || !lastName) return;
    HandleUserDatae(firstName, lastName, email, password, confirmPassword, age);
});






















