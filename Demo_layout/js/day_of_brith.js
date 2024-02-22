var date = new Date();
var year = date.getFullYear();
console.log(date);
console.log(year);
var day = document.querySelector(".day");
var month = document.querySelector(".month");
var years = document.querySelector(".years");
for (let i = 1; i <= 31; i++){
    console.log(i);
    var option = document.createElement("option");
    option.value=i;
    option.text="Day  " + i;
    day.appendChild(option);

}
for (let i = 1; i <= 12; i++){
    console.log(i);
    var option = document.createElement("option");
    option.value=i;
    option.text="Month  " + i;
    month.appendChild(option);
}
for (let i = year; i >= 1940; i--) {
    console.log(i);
    var option = document.createElement("option");
    option.value=i;
    option.text="Year  " + i;
    years.appendChild(option);
}