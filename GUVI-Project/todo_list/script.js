
let Task = 1;
var el;
var e2;
let title_length = 50
let desc_length = 200
var index;

function addtask() {

    if (document.TASK_FORM.task_title.value != "") {
        let table = document.getElementById("record-table")
        let row = table.insertRow();
        row.setAttribute('id', "row" + Task)
        row.setAttribute('onclick', "getSelectedRow()")
        let check = document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.setAttribute('id', Task)
        if (document.body.contains(document.getElementById('Alert'))) {
            document.getElementById('Alert').remove()
        }
        let cell0 = row.insertCell(0)
        // cell0.style.width = "10%"
        cell0.setAttribute('id', "cell" + Task)
        let cell1 = row.insertCell(1);
        //cell1.setAttribute('id',"cell"+Task)
        // let cell2 = row.insertCell(2);
        cell0.append(check)
        let str1 = document.getElementById("Task_desc").value
        str1 = str1.replace(/(?!$|\n)([^\n]{20}(?!\n))/g, '$1\n');

        cell1.innerHTML = "<h6>" + document.getElementById("Task").value + "</h4>" + "<br>" + "<i>" + str1 + "</i>"
        // cell2.innerHTML = document.getElementById("Task_desc").value
        Task = Task + 1
        document.TASK_FORM.reset();
        countCharacters(50, "Task", "title_charactersRemaining")
        countCharacters(200, "Task_desc", "desc_charactersRemaining")
    }
    else {

        AlertBox("Please enter task title")
    }

}

function deletetask() {
    var table = document.getElementById("record-table");

    if (table.rows.length <= 1) {
        AlertBox("Table is empty")
    }
    else {
        if (document.body.contains(document.getElementById('Alert'))) {
            document.getElementById('Alert').remove()
        }
        for (var i = 1, row; row = table.rows[i]; i++) {
            //iterate through rows
            console.log(table.rows.length)
            if (table.rows.length >= 1) {
                console.log("its working")
                let checkid = document.getElementById(row.children[0].id).children[0].id
                if (document.body.contains(document.getElementById(checkid))) {
                    if (document.getElementById(checkid).checked) {
                        row.remove()
                        i = i - 1
                    }
                }
            }
            else {

                AlertBox("Table is empty or you have not selected any task")
            }

        }
    }


}
function getSelectedRow() {
    var table = document.getElementById("record-table");

    for (var i = 1, row; row = table.rows[i]; i++) {
        if (document.body.contains(table.rows[i])) {

            table.rows[i].onclick = function () {
                // clear the selected from the previous selected row
                // the first time index is undefined
                // console.log( table.rows.length)
                for (var j = 1, rows; rows = table.rows[j]; j++) {
                    if (typeof index !== "undefined" && table.rows[index].classList.contains("selected")) {

                        console.log(index, this.rowIndex)
                        console.log("first condition")
                        if (index == this.rowIndex) {
                            table.rows[index].classList.remove('selected')
                            table.rows[index].classList.remove('bg-white')
                            break
                        }

                        else {
                            table.rows[index].classList.remove('selected')
                            table.rows[index].classList.remove('bg-white')
                            continue
                        }
                    }
                    else if (typeof index !== "undefined") {
                        index = this.rowIndex;
                        console.log(this.rowIndex)
                        console.log("second condition")
                        table.rows[index].classList.toggle("selected");
                        table.rows[index].classList.toggle("bg-white");
                        break
                        // this.classList.remove('selected')
                        // this.classList.remove('bg-white')
                    }
                    else {
                        console.log("third condition")
                        index = this.rowIndex;
                        this.classList.toggle("selected");
                        table.rows[index].classList.toggle("bg-white");
                        break;
                    }
                }
            };
        }

    }

}

function upNdown(direction) {
    var rows = document.getElementById("record-table").rows,
        parent = rows[index].parentNode;
    //console.log(rows[index].parentNode)
    if (direction === "up") {
        if (index > 1) {
            console.log(rows[index], rows[index - 1])
            parent.insertBefore(rows[index], rows[index - 1]);
            // when the row go up the index will be equal to index - 1
            index--;
        }
    }
    if (direction === "down") {
        if (index < rows.length - 1) {
            parent.insertBefore(rows[index + 1], rows[index]);
            // when the row go down the index will be equal to index + 1
            index++;
        }
    }
}

async function countCharacters(length, input_id, length_id) {

    var textEntered, countRemaining, counter;
    textEntered = await document.getElementById(input_id).value;
    if (textEntered.length > length) {
        textEntered.value = textEntered.slice(0, length)
        textEntered.length = length
    } else {

        counter = (length - (textEntered.length));
        console.log(length, textEntered.length)
        countRemaining = document.getElementById(length_id);
        countRemaining.textContent = counter + "/" + length;
    }
}


e2 = document.getElementById("Task")
e2.addEventListener('keyup', function () { countCharacters(title_length, "Task", "title_charactersRemaining") }, false);
el = document.getElementById('Task_desc');
el.addEventListener('keyup', function () { countCharacters(desc_length, "Task_desc", "desc_charactersRemaining") }, false);


function pastedisable() {

    AlertBox("Paste operation is not allowed")
}

function AlertBox(message) {
    if (document.body.contains(document.getElementById('Alert'))) {
        document.getElementById('Alert').remove()
    }
    let Alert = document.createElement('section')
    Alert.setAttribute('id', 'Alert')
    Alert.setAttribute('class', "alert alert-warning alert-dismissible border border-danger sticky-top")
    let Alert_heading = document.createElement('h4')
    Alert_heading.setAttribute('class', 'alert-heading')
    Alert_heading.innerHTML = message
    Alert.append(Alert_heading)
    document.body.prepend(Alert)
    return false
}