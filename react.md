import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./components/Login/Login";
import Hero from "./components/Login/Hero";
import "./App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./fire";
function App() {
const [user, setUser] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [EmailError, setEmailError] = useState("");
const [PasswordError, setPasswordError] = useState("");
const [hasAccount, setHasAccount] = useState(false);

const clearInputs = () => {
setEmail("");
setPassword("");
};
const clearErrors = () => {
setEmailError("");
setPasswordError("");
};
const auth = getAuth(app);
const handleLogin = () => {
clearErrors();
fire
.auth()
.signInWithEmailAndPassword(email, password)
.catch((err) => {
switch (err.code) {
case "auth/invalid-email":
case "auth/user-disabled":
case "auth/user-not-found":
setEmailError(err.message);
break;
case "auth/wrong-password":
setPasswordError(err.message);
break;
}
});
};

const handleSignup = () => {
clearErrors();
fire
.auth()
.createUserWithEmailAndPassword(email, password)
.catch((err) => {
switch (err.code) {handleLogin
case "auth/email-already-in-use":
case "auth/invalid-email":
setEmailError(err.message);
break;
case "auth/weak-password":
setPasswordError(err.message);
break;
}
});
};

const handleLogout = () => {
fire.auth().signOut();
};
// const authListener = () => {
// fire.auth().onAuthStateChanged((user) => {
// if (user) {
// clearInputs();
// setUser(user);
// } else {
// setUser("");
// }
// });
// };

// useEffect(() => {
// authListener();
// }, []);

return (
<div className="App">
{user ? (
<Hero handleLogout={handleLogout} />
) : (
<Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          EmailError={EmailError}
          PasswordError={PasswordError}
        />
)}
</div>
);
}

export default App;
