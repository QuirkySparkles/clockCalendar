function activateTime(device) {
    let initialTime = new Date();
    let startTime = () => setInterval(device, 1000);
    
    device();
    setTimeout(startTime, 1000 - initialTime.getMilliseconds());
}
