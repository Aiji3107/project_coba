// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAl4PKQA1Jwqk70CzvIoKKzFH2I-6mJ3Do",
    authDomain: "photion-c01cf.firebaseapp.com",
    projectId: "photion-c01cf",
    storageBucket: "photion-c01cf.appspot.com",
    messagingSenderId: "222994080438",
    appId: "1:222994080438:web:b96089e5e159d23c3a3c17",
    measurementId: "G-EDS63G6NHL"
  };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
//     Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// set up  our registration function
function register() {
    // get all input out input field
    Name = document.getElementById('name').value
    email_signup = document.getElementById('email').value
    password_signup = document.getElementById('password').value
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email)== true) {
        //  Email is good
        return true
    }else {
        //email is not good
        return false
    }
}

// function validate_password(password) {
//     // firebase only accepts lengths greater than 6
//     if password < 6
// }