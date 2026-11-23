const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");

const toast = document.getElementById("toast");

// Mobile Menu
menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("open");

    menuToggle.textContent =
        mainNav.classList.contains("open") ? "✕" : "☰";

});

// Menu click
mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.textContent = "☰";

    });

});

// Notification
let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}

// Semester Button
document.querySelectorAll(".semester").forEach(button => {

    button.addEventListener("click", () => {

        showToast(
            button.dataset.semester +
            " Semester Notes: এখানে PDF Link যোগ করতে হবে।"
        );

    });

});

// Community Button
document.getElementById("joinCommunity")
.addEventListener("click", () => {

    showToast("Community section শিগগিরই চালু হবে!");

});