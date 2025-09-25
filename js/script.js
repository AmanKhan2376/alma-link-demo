document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("login-btn-index");
    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = "html/login.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("signup-btn-index");
    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = "html/signup.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("join-now-btn-index");
    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = "html/signup.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("login-btn-login");
    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = "admin.html";
        });
    }
});
