async function fetchData(){
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    let result = document.getElementById("result");
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        const results = await res.json();
        
        let success = false;
        await results.forEach(async user => {
            let{username, email} = user;
            if (usernameInput == username && passwordInput == email)
            {
                success = true;
            }
        });
        
        if (success) {
            result.textContent = "Login successful! Redirecting...";
            setInterval(redirect, 1000);
        } else {
            result.textContent = "Invalid username or password!";
        }   
    }
    catch (error) {
        console.log(error)
    }
}

var count = 2;
function redirect() {
    if (count < 2)
        window.location.href = "course_view.html";
    count -= 1;
}