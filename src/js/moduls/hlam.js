export default function hlam() {
    try {
        function clicker() {
            const btns = document.querySelectorAll(".filter__icon-link");
            function clear() {
                btns.forEach(btn => {
                    btn.classList.remove("filter__icon-link-active");
                });
            }
            btns.forEach(item => {
                item.addEventListener("click", (e) => {
                    e.preventDefault();
                    clear();
                    item.classList.add("filter__icon-link-active");
                });
            });
        }
        clicker();
    
        function moreWidth() {
            document.querySelector(".filter__icon-link-left").addEventListener("click", e => {
                    e.preventDefault();
                    document.querySelectorAll(".magazine__wrapper").forEach(wrap => {
                        wrap.classList.remove("magazine__wrapper-width-big");
                    });
                });
            
    
            document.querySelector(".filter__icon-link-right").addEventListener("click", e => {
                    e.preventDefault();
                    document.querySelectorAll(".magazine__wrapper").forEach(wrap => {
                        wrap.classList.add("magazine__wrapper-width-big");
                    });
                });
        }

        function burger() {
            document.querySelector(".menu__burger").addEventListener("click", () => {
                document.querySelector(".burger__list").classList.toggle("burger__list-active");
            })
        }
        burger();
    
        moreWidth();
    } catch(e) {}
}