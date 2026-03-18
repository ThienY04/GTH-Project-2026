document.querySelector("form").onsubmit = function(e){
    let email = document.querySelector("input[type=email]").value;
    if(!email.includes("@")){
        alert("Email không hợp lệ");
        e.preventDefault();
    }
} 
