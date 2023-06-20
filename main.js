//to do list
//add item
//delete item
//search item

let form = document.getElementById("addForm")
// console.log(form) /it is use to just check
let ul = document.getElementById("items")
let filter = document.getElementById("filter")

function submitHandler(e) {
    e.preventDefault()    //Prevent the default nature of reload
    let item = document.getElementById("item").value  //item ki value
    // let ul = document.getElementById("items")    this ul is written outside because it will use in other also
    let li = document.createElement("li")  //make element as tag
    let btn = document.createElement("button")
    btn.appendChild(document.createTextNode("X"))
    btn.className = "btn btn-dark btn-sm float-right delete"
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(item))
    li.appendChild(btn)
    ul.appendChild(li)

}

function deleteHandler(event) {    //e is an variable it can be anything
    if (confirm("Are u sure? You want to delete this item")) {
        if (event.target.classList.contains("delete")) {       //target means jispe exactly click ho rha hai
            ul.removeChild(event.target.parentElement)
        }

    } else {
        // alert("no time pass please")
    }

}

function filterHandler(event){
    //console.log(event.target.value.toLowerCase())
    let searchText = event.target.value.toLowerCase()

    Array.from(document.getElementsByTagName("li")).forEach(function(item){
        if (item.firstChild.textContent.toLowerCase().includes(searchText)) {
            item.style.display = "block"                         //block=show & none= nothing
        } else {
            item.style.display = "none"
        }
    })
}




form.addEventListener("submit", submitHandler)
ul.addEventListener("click", deleteHandler)
filter.addEventListener("input", filterHandler)           //at place of input, keyup or keydown can also use

