let olElement = document.getElementById("mylIST");

array.forEach(item => {
    let liElement = document.createElement("ol");

    liElement.textContent = item;

    olElement.appendChild(liElement)
    console.log('Looped through array and made a list');
});