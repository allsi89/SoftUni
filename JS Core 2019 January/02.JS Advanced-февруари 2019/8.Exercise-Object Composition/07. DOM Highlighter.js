function solve(selector) {
    const htmlElelement = document.querySelector(selector);
    htmlElelement.classList.add('highlight');

    highLightChildren(htmlElelement);

    function highLightChildren(element) {
        const children = element.children;

        if (children.length === 0) {
            return;
        }

        for (let index = 0; index < children.length; index++) {
            highLightChildren(children[index]);
            children[index].classList.add('highlight');
        }
    }
}