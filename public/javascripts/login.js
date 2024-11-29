const submitBtn = document.getElementById("submit");
const error = document.getElementById("error");

const password = document.getElementById("password");
const email = document.getElementById("email");

//login 
submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await userData("https://jsonkeeper.com/b/3Z6L", "LOGIN").then((result)=> {
console.log(JSON.stringify(result, null, 1));

    if (email.value === result.userData.email && password.value === result.userData.password) {
        switchPages("client");
    } else {
        error.innerHTML = "Wrong username or password"
    }
})
});