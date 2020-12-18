export default function slider(selectorItems, selectorWrap, selectorInner, leftSelector, rightSelector, make = false, any = false) {
    try {
        let count = 0;
    const wrap = document.querySelector(selectorWrap),
          inner = wrap.querySelector(selectorInner),
          left = wrap.querySelector(leftSelector),
          right = wrap.querySelector(rightSelector),
          items = wrap.querySelectorAll(selectorItems);
    let width = getComputedStyle(wrap).width;
    wrap.style.width = window.innerWidth;
    let slesh = 0;
    if (make) {
        const dothsWrap = document.createElement("div");
        dothsWrap.classList.add("doths");
        wrap.append(dothsWrap);
        items.forEach((item, i) => {
            const doth = document.createElement("div");
            doth.classList.add("doth");
            dothsWrap.append(doth);
            doth.setAttribute("data-width", (i + 1) * parseInt(width));
    
            if (i === 0) {
                doth.classList.add("active");
            }
    
        });
    }

    function changeDoths() {
        document.querySelectorAll("[data-width]").forEach((item, i) => {

            if (+item.getAttribute("data-width") - parseInt(width) === slesh) {
                item.classList.add("active");
                console.log(+item.getAttribute("data-width")  - parseInt(width));
                console.log(slesh);
            } else {
                item.classList.remove("active");
            }

        });
    }

    inner.style.width = 100 * items.length + "%";
    inner.style.transition = "1s all";

    right.addEventListener("click", () => {

        if (parseInt(slesh) === parseInt(getComputedStyle(inner).width) - parseInt(width) ) {
            slesh = 0;
        } else {
            slesh += parseInt(width, 10);
        }

        if (make) {
            changeDoths();
        }
        inner.style.transform = `translateX(-${slesh}px)` ;
    });

    left.addEventListener("click", () => {

        if (parseInt(slesh) === 0 ) {
            slesh = parseInt(getComputedStyle(inner).width) - parseInt(width);
        } else {
            slesh += -parseInt(width, 10);
        }
        if (make) {
            changeDoths();
        }
        inner.style.transform = `translateX(-${slesh}px)` ;
    });

    wrap.addEventListener("click", e => {
        if (e.target.getAttribute("data-width")) {
            document.querySelectorAll("[data-width]").forEach(item => {
                item.classList.remove("active");
            });
            e.target.classList.add("active");
            slesh = e.target.getAttribute("data-width") - parseInt(width);
            inner.style.transform = `translateX(-${slesh}px)` ;
        }
    });
    } catch(e) {}

}