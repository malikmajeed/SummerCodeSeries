
var power = false;
let powerBtnText = document.getElementById('powerBtn');
powerBtnText.textContent = 'OFF';

powerBtnText.style.backgroundImage = 'radial-gradient(circle, rgb(250, 94, 94), rgb(198, 2, 2))';
var counterDisplay = document.getElementById('counterDisplay');
counterDisplay.style.color='rgb(53, 53, 53)';

const powerBtn =()=>{
    if(power){
        power = false;
        reset();
        
        powerBtnText.textContent = 'OFF';
        counterDisplay.style.color='rgb(53, 53, 53)';
        powerBtnText.style.backgroundImage = 'radial-gradient(circle, rgb(250, 94, 94), rgb(198, 2, 2))';


       
    }
    else{
        power = true;
        
        counterDisplay.style.color='white';
        powerBtnText.textContent = 'ON';
        powerBtnText.style.backgroundImage = 'radial-gradient(circle, rgb(10, 253, 10), rgb(3, 128, 3))';
       
    }
}


  let count = 0;

  const countDisplay = document.getElementById("counterDisplay");
  
  let decreament = function () {
    if (count >= 1 && power) {
      count--;

      countDisplay.textContent = count;
    }
  };

  let Increament = function () {
    if(power){
    count++;
    countDisplay.textContent = count;
}
  };

  let reset = () => {
    count = 0;
    countDisplay.textContent = count;
  };
