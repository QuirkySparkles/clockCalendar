function switchDisplay(element1, element2) {
    let firstElement = element1;
    let secondElement = element2;
    let isFirstElementHidden = firstElement.classList;

    if (isFirstElementHidden.length ) {
        firstElement.classList.remove("hidden");
        secondElement.classList.add("hidden");
    } else {
        firstElement.classList.add("hidden");
        secondElement.classList.remove("hidden"); 
    }
}
