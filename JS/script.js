document.querySelector('button').onclick = function () {
    let dateStart = document.querySelector('#start-date').value;
    let dateEnd = document.querySelector('#end-date').value;
    dateStart = Date.parse(dateStart);
    dateEnd = Date.parse(dateEnd);
    for (let i = dateStart; i < dateEnd; i = i + 24 * 60 * 60 * 1000) {
        console.log(i);
    }
    console.log(dateStart);
}