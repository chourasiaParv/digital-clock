const time = document.querySelector('#time')
const timeFormat = document.querySelector('.timeformat')

document.addEventListener('DOMContentLoaded',()=>{
setInterval(showTime,1000);
});
const showTime =()=>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hr =hr<10 ? `0${hr}` : hr;
    min =min<10 ? `0${min}` : min;
    sec =sec<10 ? `0${sec}` : sec;
    time.innerHTML = `${hr}: ${min} : ${sec}`;

    timeFormat.innerHTML = hr>12 ? "AM" : "PM";
}