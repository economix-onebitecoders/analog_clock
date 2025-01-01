
setInterval(() => {
    let date = new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds(); 
    let hour_rotation=30*hour+minute/2;
    let minute_rotation=6*minute;
    let second_rotation=6*second;
    document.querySelector('.second_box').style.transform=`rotate(${second_rotation}deg)`
    document.querySelector('.minute_box').style.transform=`rotate(${minute_rotation}deg)`
    document.querySelector('.hour_box').style.transform=`rotate(${hour_rotation}deg)`
},1000);