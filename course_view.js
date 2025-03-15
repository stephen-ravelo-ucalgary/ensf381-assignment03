function highlightTile(id) {
    document.getElementById(`${id}`).style.backgroundColor = "#ffffff";
}

function unhighlightTile(id) {
    document.getElementById(`${id}`).style.backgroundColor = "#e6f2ff";
}

function acceptCourse(id) {
    var tileId = document.getElementById(id);
    var rowLength = document.getElementsByClassName("row2").length;
    var table1Row2 = document.getElementById("table1_row2");

    // creating element from scratch

    // 1. extract course name and code
    if(id == "course_tile6") {
        var courseName = document.getElementById("course_name1").textContent; 
        var courseCode = document.getElementById("course_code1").textContent;
    }
    else {
        var courseName = document.getElementById("course_name2").textContent;
        var courseCode = document.getElementById("course_code2").textContent;

    }
    // 2. build the div element
    var newDiv = document.createElement("div");
    var newImg = document.createElement("img");
    newImg.src = "course1.jpg";
    newImg.alt = "Course 1";
    var newP1 = document.createElement("p");
    newP1.textContent = courseName;
    var newP2 = document.createElement("p");
    newP2.textContent = courseCode;
    var newA = document.createElement("a");
    newA.href = "attempt_quiz.html";
    newA.textContent = "Attempt Quiz";
    newDiv.appendChild(newImg);
    newDiv.appendChild(newP1);
    newDiv.appendChild(newP2);
    newDiv.appendChild(newA);

    // 3. build the td element
    var newTd = document.createElement("td");
    newTd.className = "row2";
    newTd.id = id;
    newTd.onmouseover = () => highlightTile(id);
    newTd.onmouseout = () => unhighlightTile(id);
    newTd.appendChild(newDiv);
    
    document.getElementById("table2_row1").removeChild(tileId);

    // logic to avoid having 4 courses per row
    if(rowLength != 3) {
        table1Row2.appendChild(newTd);

    }
    else {
        var newTr = document.createElement("tr");
        newTr.appendChild(newTd);
        document.getElementById("table1").appendChild(newTr);
    }

}

function declineCourse(id) {
    var tileId = document.getElementById(id);
    document.getElementById("table2_row1").removeChild(tileId);
}
