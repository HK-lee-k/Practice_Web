const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");
const monthList = ["JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY"
                    ,"AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

function getDate(){
    const date = new Date();
    const month  = date.getMonth();
    const days = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = ` ${monthList[month]} ${days <10? `0${days}`:days}  ${hours <10 ? `0${hours}`: hours}:${
                              minutes < 10 ? `0${minutes}`:minutes}:${
                              seconds < 10 ? `0${seconds}`: seconds}`;
}
function init(){
    getDate();
    setInterval(getDate, 1000);
}

init();