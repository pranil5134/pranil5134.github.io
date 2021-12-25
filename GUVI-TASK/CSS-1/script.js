skilltable=document.getElementById("skilltable").querySelectorAll("#myinput");
for(i=0;i<skilltable.length;i++)
{
    const slider = skilltable[i]
    const min = slider.min
    const max = slider.max
    const value = slider.value
    
    slider.style.background = `linear-gradient(to right, orange 0%, white ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`
    
    slider.oninput = function() {
      this.style.background = `linear-gradient(to right, orange 0%, white ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
    };
}

skilltable=document.getElementById("additional-table").querySelectorAll("#myinput");
for(i=0;i<skilltable.length;i++)
{
    const slider = skilltable[i]
    const min = slider.min
    const max = slider.max
    const value = slider.value
    
    slider.style.background = `linear-gradient(to right, orange 0%, white ${(value-min)/(max-min)*100}%, #DEE2E6 ${(value-min)/(max-min)*100}%, #DEE2E6 100%)`
    
    slider.oninput = function() {
      this.style.background = `linear-gradient(to right, orange 0%, white ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 ${(this.value-this.min)/(this.max-this.min)*100}%, #DEE2E6 100%)`
    };
}
