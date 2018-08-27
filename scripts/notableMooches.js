function getMooches(day1, day2) {
    return Math.round((day1 - day2) / 86400000)/10;
}


function generateMooches() {
    var notableMooches = document.getElementById('NotableMooches');
    var currDate = new Date();
    currDate.setHours(0);
    currDate.setMinutes(0);
    currDate.setSeconds(0);
    currDate.setMilliseconds(0);
    var tableInside = "<table>";
    tableInside += "<tr><th>Name</th><th>Position</th><th>Tenure</th><th>Length of Tenure</th></tr>";
    var moochArray = new Array();
    
    var inaugurationDate = new Date(2017, 0, 20);
    moochArray[0] = "Anthony \"The Mooch\" Scaramucci";
    moochArray[1] = "Communications Director";
    moochArray[2] = "July 21 2017 - July 31 2017";
    moochArray[3] = "1 Scaramucci";
    
    moochArray[4] = "Donald Trump";
    moochArray[5] = "President";
    moochArray[6] = "January 20 2017 - Present"
    moochArray[7] = getMooches(currDate, inaugurationDate).toString() + " Scaramuccis thus far";
    
    moochArray[8] = "James Comey";
    moochArray[9] = "FBI Director";
    moochArray[10] = "September 4 2013 - May 9 2017";
    moochArray[11] = "134.3 Scaramuccis";
    
    moochArray[12] = "Michael Flynn";
    moochArray[13] = "National Security Advisor";
    moochArray[14] = "January 20 2017 - February 13 2017";
    moochArray[15] = "2.4 Scaramuccis";
    
    moochArray[16] = "Sean \"Spicey\" Spicer";
    moochArray[17] = "Press Secretary";
    moochArray[18] = "January 20 2017 - July 21 2017";
    moochArray[19] = "18.2 Scaramuccis";

    moochArray[20] = "Steve Bannon";
    moochArray[21] = "Chief Strategist";
    moochArray[22] = "January 20 2017 - August 18 2017";
    moochArray[23] = "21 Scaramuccis";
    
    moochArray[24] = "Omarosa";
    moochArray[25] = "????????";
    moochArray[26] = "January 20 2017 - December 13 2017";
    moochArray[27] = "31.7 Scaramuccis";
    
    moochArray[28] = "Rex Tillerson";
    moochArray[29] = "Secretary of State";
    moochArray[30] = "February 1 2017 - March 31 2018";
    moochArray[31] = "42.3 Scaramuccis";

    moochArray[32] = "David Shulkin";
    moochArray[33] = "Secretary of Veteran Affairs";
    moochArray[34] = "February 14 2017 - March 28 2018";
    moochArray[35] = "40.7 Scaramuccis";
    
    var pruittDate = new Date(2017, 1, 17);
    moochArray[36] = "Scott Pruitt";
    moochArray[37] = "EPA Administrator";
    moochArray[38] = "February 17 2017 - July 6 2018";
    moochArray[39] = "50.4 Scaramuccis";
    
    var sessionsDate = new Date(2017, 1, 19);
    moochArray[40] = "Jeff Sessions";
    moochArray[41] = "Attorney General";
    moochArray[42] = "February 19 2017 - Present"
    moochArray[43] = getMooches(currDate, sessionsDate).toString() + " Scaramuccis thus far";
    
    var rosensteinDate = new Date(2017, 3, 26);
    moochArray[44] = "Rod Rosenstein";
    moochArray[45] = "Deputy Attorney General";
    moochArray[46] = "April 26 2017 - Present";
    moochArray[47] = getMooches(currDate, rosensteinDate).toString() + " Scaramuccis thus far";
    
    var muellerDate = new Date(2017, 4, 17);
    moochArray[48] = "Robert Mueller";
    moochArray[49] = "Special Counsel";
    moochArray[50] = "May 17 2017 - Present";
    moochArray[51] = getMooches(currDate, muellerDate).toString() + " Scaramuccis thus far";

    var kellyDate = new Date(2017, 6, 31);
    moochArray[52] = "John Kelly";
    moochArray[53] = "Chief of Staff";
    moochArray[54] = "July 31 2017 - Present";
    moochArray[55] = getMooches(currDate, kellyDate).toString() + " Scaramuccis thus far";

    moochArray[56] = "Hope Hicks";
    moochArray[57] = "Communications Director";
    moochArray[58] = "August 16 2017 - March 29 2018";
    moochArray[59] = "22.5 Scaramuccis";
   
    for (var i = 0; i <= 59; i++) {
        if (i % 4 == 0) {
            tableInside += "<tr><td>" + moochArray[i] + "</td>";
            //name
        }
        else if (i % 4 == 3) {
            //mooches
            tableInside += "<td>" + moochArray[i] + "</td></tr>";
        }
        else {
            tableInside += "<td>" + moochArray[i] + "</td>";
        }
    }
    
    tableInside += "</table>";
    notableMooches.innerHTML = tableInside;
}

generateMooches();