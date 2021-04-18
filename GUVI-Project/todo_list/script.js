let i=false;
let Task=1;



function addtask(){
    let table=document.getElementById("record-table")
    let row=table.insertRow();
    row.setAttribute('id',"row"+Task)
    row.setAttribute('onclick',"getSelectedRow()")
    let check=document.createElement('input')
    check.setAttribute('type','checkbox')
    check.setAttribute('id',Task)
    if(document.TASK_FORM.task_title.value != "")
    {
        if(document.body.contains(document.getElementById('Alert')))
        {
            document.getElementById('Alert').remove()
        }
        let cell0=row.insertCell(0)
        cell0.style.width="10%"
        cell0.setAttribute('id',"cell"+Task)
    let cell1=row.insertCell(1);
    //cell1.setAttribute('id',"cell"+Task)
    let cell2=row.insertCell(2);
    cell0.append(check)
    cell1.innerHTML=document.getElementById("Task").value
    cell2.innerHTML=document.getElementById("Task_desc").value
    Task=Task+1
    document.TASK_FORM.reset();
    }
    else{
        if(document.body.contains(document.getElementById('Alert')))
        {
            document.getElementById('Alert').remove()
        }
        i=true
        let Alert=document.createElement('section')
        Alert.setAttribute('id','Alert')
        Alert.setAttribute('class',"alert alert-success alert-dismissible")
        let Alert_a=document.createElement('a')
        Alert_a.setAttribute('class','close')
        Alert_a.setAttribute('data-dismiss','alert')
        Alert_a.setAttribute('area-lable','alert close')
        let Alert_heading=document.createElement('h4')
        Alert_heading.setAttribute('class','alert-heading')
        Alert_heading.innerHTML="Please enter task title"
        Alert_a.innerHTML="x"
        Alert.append(Alert_heading)
        Alert.append(Alert_a)
        document.body.prepend(Alert)
    }

}


function deletetask() {
    var table = document.getElementById("record-table");
    for (var i = 1, row; row = table.rows[i]; i++) {
        //iterate through rows
        
        
        let checkid= document.getElementById(row.children[0].id).children[0].id
        if (document.body.contains(document.getElementById(checkid))) {
            
            if (document.getElementById(checkid).checked) {
                console.log(document.getElementById(row.children[0].id).children[0].id)
                console.log(row.id)
                row.remove()

            }
        }
    }

}

        
var index;  // variable to set the selected row index
function getSelectedRow()
{
    var table = document.getElementById("record-table");
    
    for(var i = 1; i < table.rows.length; i++)
    {
        if(document.body.contains( table.rows[i]))
        {
            table.rows[i].onclick = function()
            {
    
                // clear the selected from the previous selected row
                // the first time index is undefined
               // console.log( table.rows.length)
                       if(typeof index !== "undefined"){
                    table.rows[index].classList.toggle("selected");
                    table.rows[index].classList.toggle("bg-white");
                }
               
                index = this.rowIndex;
                this.classList.toggle("selected");
                table.rows[index].classList.toggle("bg-white");
                if(! table.rows[index].classList.contains("selected"))
                {
                    console.log("hii")
                    this.classList.remove('selected')
                }
    
            };
        }
  
    }
        
}





function upNdown(direction)
{
    var rows = document.getElementById("record-table").rows,
        parent = rows[index].parentNode;
        
        //console.log(rows[index].parentNode)
     if(direction === "up")
     {
         if(index > 1){
             console.log(rows[index],rows[index - 1])
            parent.insertBefore(rows[index],rows[index - 1]);
            // when the row go up the index will be equal to index - 1
            index--;
        }
     }
     
     if(direction === "down")
     {
         if(index < rows.length -1){
            parent.insertBefore(rows[index + 1],rows[index]);
            // when the row go down the index will be equal to index + 1
            index++;
        }
     }
}
