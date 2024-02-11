const validateName = /^[a-zA-Z\s]*$/;

const validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

const validatePassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/;

const Validation = (name, email, password) => {
    const nameValid = validateName.test(name.trim());
    const emailValid = validateEmail.test(email);
    const passwordValid = validatePassword.test(password);

    if (!nameValid) return "Please enter a valid name.";
    if (!emailValid) return "Please enter a correct email address.";
    if (!passwordValid) return "Password must contain 6 digits one symbol, one capital letter";
    return null;
}

export default Validation;
