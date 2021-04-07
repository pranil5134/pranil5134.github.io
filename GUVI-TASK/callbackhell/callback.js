let maindiv=document.createElement('div')
maindiv.setAttribute('class','d-flex justify-content-center')
let h1=document.createElement('h3')

maindiv.appendChild(h1)
document.body.append(maindiv)
let count=10
setTimeout(() => {
    h1.innerText=count
    
    setTimeout(() => {
        h1.innerText=count-1
      setTimeout(() => {
        h1.innerText=count-2 
          setTimeout(() => {
            h1.innerText=count-3 
             setTimeout(() => {
                h1.innerText=count-4
                setTimeout(() => {
                    h1.innerText=count-5
                    setTimeout(() => {
                        h1.innerText=count-6
                      setTimeout(() => {
                        h1.innerText=count-7
                        setTimeout(() => {
                            h1.innerText=count-8
                            setTimeout(() => {
                                h1.innerText=count-9
                                setTimeout(() => {
                                    h1.innerText=count-10 
                                    setTimeout(() => {
                                        h1.innerText="Happy Independence Day"
                                    }, 1000);
                                }, 1000);
                            }, 1000); 
                        }, 1000); 
                      }, 1000);  
                    }, 1000);
                }, 1000);  
             }, 1000); 
          }, 1000);
      }, 1000);
    }, 1000);
}, 1000);

