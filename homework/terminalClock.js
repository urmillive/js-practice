// HH:MM:SS
var date = new Date;
setInterval(() => {
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    clock = `${ hour }::${ minutes }::${ seconds }`;
    console.log('====================================');
    console.log(clock); k
    console.log('====================================');
}, 1000);
