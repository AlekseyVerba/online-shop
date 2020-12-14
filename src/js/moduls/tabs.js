export default function tabs(tabsSelector, contentSelector, activeClass) {
    try {
        const tabs = document.querySelectorAll(tabsSelector),
        contents = document.querySelectorAll(contentSelector);

        function hideAll() {
            tabs.forEach((item, i) => {
                item.classList.remove(activeClass);
            });

            contents.forEach(item => {
                item.style.display = "none";
            });
        }

        function showAll(i = 0) {
            tabs[i].classList.add(activeClass);
            contents[i].style.display = "block";
        }

        hideAll();
        showAll();

        tabs.forEach((tab, i) => {
            tab.addEventListener("click", e => {
                e.preventDefault();
                hideAll();
                showAll(i);
            });
        });


    } catch(e) {}

}