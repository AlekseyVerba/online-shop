export default function slider(contentsSelector, leftSelector, rightSelector) {
    const contents = document.querySelectorAll(contentsSelector),
        left = document.querySelector(leftSelector),
        right = document.querySelector(rightSelector);
    let index = 0;

    function hideAll() {
        contents.forEach((item, i) => {
            item.style.display = "none";
        });
    }

    hideAll();


    function show(i = 0) {
        if (i === contents.length) {
            index = 0;
            i = 0;
        }
        if (i < 0) {
            index = contents.length - 1;
            i = contents.length - 1;
        }
        contents[i].style.display = "block";
    }
    show();

    right.addEventListener("click", () => {
        index++;
        hideAll();
        show(index);
    });

    left.addEventListener("click", () => {
        index--;
        hideAll();
        show(index);
    });

}