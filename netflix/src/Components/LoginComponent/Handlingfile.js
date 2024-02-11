import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const handlesignup = (email, password, name, setErrorMessage, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            //console.log(user);
            updateProfile(user, {
                displayName: name,
            }).then(() => {
                navigate("/browse");
            }).catch((error) => {
                setErrorMessage(error.code + "-" + error.message);
            });
        })
        .catch((error) => {
            setErrorMessage(error.code + "-" + error.message);
        });
}

const handlesignin = (email, password, navigate, setErrorMessage) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            //console.log(user);
            navigate("/browse");
        })
        .catch((error) => {
            setErrorMessage(error.code + "-" + error.message);
        });
}

export { handlesignup, handlesignin };
