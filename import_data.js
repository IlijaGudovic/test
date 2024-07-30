let sheet_id = "1gw9wuQd3AHcQTsCf7rw-QV9SbDECdV8pY_jY34TbXPg"
let sheet_title = "ShowActivity"

let full_url = "https://docs.google.com/spreadsheets/d/" + sheet_id + "/gviz/tq?sheet=" + sheet_title;

file = fetch(full_url)

// fetch (full_url)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);

fetch (full_url)
.then(x => x.text())
.then(y => {
    
    let date = JSON.parse(y.substring(47).slice(0,-2));
    
    let obj = document.getElementById("demo"); 
    obj.innerHTML = "";

    let space = "&emsp;"
    // .innerHTML = date;

    // console.log(date.table.rows);

    date.table.rows.forEach(element =>
    {
        console.log(element.c[0].v)

        obj.innerHTML += element.c[0].v + space;
        obj.innerHTML += element.c[1].v + space;
        obj.innerHTML += element.c[2].v + space;
        obj.innerHTML += element.c[3].v + space;
        obj.innerHTML += element.c[4].v + space;
        obj.innerHTML += element.c[5].v + space;

        obj.innerHTML += '<br>'

    });

});