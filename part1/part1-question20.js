var v = setInterval(callTime,1000);

function callTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}