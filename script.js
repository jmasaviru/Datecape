const submit = document.getElementById("submit");
const enterName = document.getElementById("enterName");


submit.addEventListener("click",saveUserName);

// FUNCTION FOR SAVING & VIEWING USER NAME
function saveUserName(){
    userName.style.display = "";
    var results = "<p>"+ Hello + ' - ' + enterName.value +"</p>"; 
    localStorage.setItem("showName", results);
    document.getElementById("userName").innerHTML = localStorage.getItem("showName");  
}

$("#basicDate").flatpickr({
    enableTime: true,
    dateFormat: "F, d Y H:i",
  }); 

  