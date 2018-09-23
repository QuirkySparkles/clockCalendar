function switchDisplay(element1, element2) {
    let firstElement = element1;
    let secondElement = element2;
    let isFirstElementShown = firstElement.style.display;

    if (isFirstElementShown === "block" || !isFirstElementShown) {
        firstElement.style.display = "none";
        secondElement.style.display = "block";
    } else {
        firstElement.style.display = "block";
        secondElement.style.display = "none";
    }
}
