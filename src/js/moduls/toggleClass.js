export default function toggleClass(selector, activeClass) {
 const elements = document.querySelectorAll(selector);
 elements.forEach(el => {
    el.addEventListener("click", () => {
        if (el.classList.contains(activeClass)) {
            el.classList.remove(activeClass);
        } else {
            el.classList.add(activeClass);
        }
     });
 });
}