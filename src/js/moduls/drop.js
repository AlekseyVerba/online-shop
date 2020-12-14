export default function drop(selectorBtn, activeClass, block = false) {
    try {
        const btns = document.querySelectorAll(selectorBtn);
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle(activeClass);
            if (btn.classList.contains(activeClass)) {
                if (block) {
                    btn.nextElementSibling.style.display = "block";
                } else {
                    btn.nextElementSibling.style.display = "flex";
                }
            } else {
                btn.nextElementSibling.style.display = "none";
            }
        });
    });
    } catch(e) {}
}