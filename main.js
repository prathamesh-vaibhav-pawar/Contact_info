function Submit(){
    Contact_name = document.getElementById("name").value 
    Save_name = Contact_name.toUpperCase()
    console.log(Save_name)
    User_number = document.getElementById("number").value
    Contact = Contact_name +":"+User_number
    localStorage.setItem(Save_name,Contact)
    document.getElementById("name").innerHTML = " "
    document.getElementById("number").innerHTML = " "
}
function Search(){
    Usr_name = document.getElementById("Usr_name").value 
    Srch_name = Usr_name.toUpperCase()
    localStorage.getItem(Srch_name)
    saved = localStorage.getItem(Srch_name)
    document.getElementById("Info").innerHTML += "<div class = 'div1'>"+saved+"</div>"
}
function reset(){
    document.getElementById("name").innerHTML = " "
    document.getElementById("number").innerHTML = " "
}