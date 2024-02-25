/*Easter egg change background */
const footerLogo = document.getElementById("footer-logo");
footerLogo.addEventListener('click', changeBgColor);

function changeBgColor() {
    document.body.classList.toggle("BgEasterEggStyle");
}

/*Easter egg  1337*/
let code;
const modal = document.getElementById("easter-egg-modal");
const modalClose = document.getElementById("ee-modal-close")

/*Check if a modal exists before listening. So that js doens't crash on pages without modals*/
if (modalClose) {
    /*Takes the last 4 keypresses and listens for the secret code*/
    window.addEventListener('keyup', (k) => {
        code += k.key;
        code = code.slice(-4);

        if (code === "1337") {
            modal.style.display = "block";
        }
    })

    /*When the user clicks on the x, close the modal*/
    modalClose.onclick = function () {
        modal.style.display = "none";
    }

    /*When the user clicks anywhere outside of the modal, close it*/
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/*Light and dark mode*/
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleIcon = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply the saved theme
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggleIcon.textContent = 'dark_mode';
    } else {
        document.body.classList.remove('light-mode');
        themeToggleIcon.textContent = 'light_mode';
    }

    themeToggleIcon.addEventListener('click', function () {
        let isLightMode = document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

        // Correctly update the icon based on the current theme
        this.textContent = isLightMode ? 'dark_mode' : 'light_mode';
    });
});

