var input = document.querySelector('#cityTown');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('#button');
button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + "&appid=71d4801a44768bd56efc2fdcaac47597" + "&units=imperial")
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather']['description'];
            main.innerHTML = nameValue;
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Temp - " + tempValue;
            input.value = "";
        });
});