let intervalId ;
let countON = false;


document.querySelector('.js-start-btn').addEventListener('click', () => {
    stratTimer();
});

document.querySelector('.js-stop-btn').addEventListener('click', () => {
    stopTimer();
});

function stratTimer()
{

    let count=1;
    if(!countON)
    {
        intervalId = setInterval(() => {
            document.querySelector('.js-showtime').innerHTML = count++;
        },1000);
        countON = true;

        document.querySelector('.circle').classList.add("circle-orange");
    }

}

function stopTimer(){
    if(countON)
    {
        
        clearInterval(intervalId);
        countON = false

        document.querySelector('.js-showtime').innerHTML = 0;
        
        document.querySelector('.circle').classList.remove("circle-orange");
    }
}