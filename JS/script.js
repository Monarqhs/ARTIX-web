document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;

    if (username === "admin" && password === "admin") {
        alert("Login berhasil");
    } else {
        alert("Login gagal");
    }
});

document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;

    alert("Pendaftaran berhasil");
});
