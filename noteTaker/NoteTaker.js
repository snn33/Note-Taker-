function weekSelector() {
    var table1 = document.querySelector(".week1Table");
    var tableRow1 = document.createElement("tr"); //Creating table row for table 1
    var week1Col = document.createElement("td"); //Creating table data for table 1

    var table2 = document.querySelector(".week2Table");
    var tableRow2 = document.createElement("tr"); //Creating table row row for table 2
    var week2Col = document.createElement("td"); //Creating table data row for table 2

    var table3 = document.querySelector(".week3Table");
    var tableRow3 = document.createElement("tr"); //Creating table row row for table 3
    var week3Col = document.createElement("td"); //Creating table data row for table 3

    var table4 = document.querySelector(".week4Table");
    var tableRow4 = document.createElement("tr"); //Creating table row row for table 4
    var week4Col = document.createElement("td"); //Creating table data row for table 4


    var Notetext = document.querySelector("#textArea").value; //the text which the user write will named as Notetext

    // Get the checkbox
    var checkBox1 = document.getElementById("week1"); // Assinging the  checkBox1 to week1
    // Get the output text
    var text1 = document.getElementById("1"); // Assigning text1 variable for the contain user's notes

    //Checking the if the checkbox1 selected
    if (checkBox1.checked == true) { //if checkbox1.checked == true than the codes which are bottom will work
        week1Col.innerText = Notetext; // week1Col text will be the text(textArea) which user write down
        tableRow1.appendChild(week1Col); //Adding week1 column into the table row
    } else {
        text1.style.display = "none"; // if checkbox1.checked == true is not selected than nothing will be displayed
    }

    // Get the checkbox
    var checkBox2 = document.getElementById("week2");
    // Get the output text
    var text2 = document.getElementById("2");

    //Checking the if the checkbox2 selected
    if (checkBox2.checked == true) {
        week2Col.innerText = Notetext;
        tableRow2.appendChild(week2Col);
    } else {
        text2.style.display = "none";
    }


    var checkBox3 = document.getElementById("week3");
    // Get the output text
    var text3 = document.getElementById("3");

    //Checking the if the checkbox3 selected
    if (checkBox3.checked == true) {
        week3Col.innerText = Notetext;
        tableRow3.appendChild(week3Col);
    } else {
        text3.style.display = "none";
    }


    var checkBox4 = document.getElementById("week4");
    // Get the output text
    var text4 = document.getElementById("4");

    //Checking the if the checkbox4 selected
    if (checkBox4.checked == true) {
        week4Col.innerText = Notetext;
        tableRow4.appendChild(week4Col);
    } else {
        text4.style.display = "none";
    }


    table1.appendChild(tableRow1); // Adding the table row into the table
    table2.appendChild(tableRow2); // Adding the table row into the table
    table3.appendChild(tableRow3); // Adding the table row into the table
    table4.appendChild(tableRow4); // Adding the table row into the table
}