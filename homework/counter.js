let counter = 30
const intervalId = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter == 0) clearInterval(intervalId);
}, 1000);