function getMooches(day1, day2) {
    return Math.round((day1 - day2) / 86400000) / 10;
}

function submitButton() {
    var startText = document.getElementById('start').value, endText = document.getElementById('end').value;
    
    var startArray = document.getElementById('start').value.split('/'), startDay = startArray[0], startMonth = startArray[1], startYear = startArray[2];
    var firstDay = new Date(parseInt(startYear), parseInt(startMonth) - 1, parseInt(startDay));

    var endArray = document.getElementById('end').value.split('/'), endDay = endArray[0], endMonth = endArray[1], endYear = endArray[2];
    var lastDay = new Date(parseInt(endYear), parseInt(endMonth) - 1, parseInt(endDay));
    
    var elapsed = getMooches(lastDay, firstDay);
    
    var numMooches = document.querySelector('h2');
    
    numMooches.textContent = "Number of Scaramuccis: " + elapsed.toString();
}
