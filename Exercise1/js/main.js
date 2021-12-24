function cat(catName,catAge){
    this.catName=catName;
    this.catAge=catAge;
}

let cats= [ new cat("Pammi" ,1),new cat("Eew",2),new cat("blw",3 )];


function displayCat(){
    let table=document.getElementById("cat_detail")
    for(let a=0;a<cats.length;a++)
    {
    let cat=cats[a];
    let row= `<tr>
     <td>${a+1}</td>
     <td>${cat.catName}</td>
     <td>${cat.catAge}</td>
</tr>`;
table.innerHTML += row;
}
}


