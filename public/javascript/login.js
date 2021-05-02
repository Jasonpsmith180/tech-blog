function signupFormHandler(event) {
    event.preventDefault();

    // get signup info
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);