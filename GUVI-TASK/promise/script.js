fetch("https://restcountries.eu/rest/v2/all")

    .then((response)=>{
        console.log(response);
       return response.json();
      
    })
    .then((result)=>
    {
       let data=result
       data.forEach(element => {
         card(element.name,element.flag,element.capital,element.alpha2Code,element.latlng,element.region)
       });
       

    }
    )
    .catch((err)=>{
        console.log(err)
    }
    )
    
document.body.style.background= 'linear-gradient(to right, red , yellow)';

let fluid_cointainer=document.createElement('div')
fluid_cointainer.setAttribute('class','container-fluid')

    let row= document.createElement('div') 
    row.setAttribute('class','row mt-5') 


function card(countryname,flag,capital,alpha2Code,latlng,region){ 
  let carddiv=document.createElement('div')
  carddiv.setAttribute('class','col-lg-4 col-sm-12 mb-4')
  var card=document.createElement('div')
  card.style.opacity="0.7"
  card.onmouseleave=function(){
      card.style.opacity="0.7"
      }
  card.onmouseover=function(){
    card.style.opacity="1"
  }
  card.style.background= 'linear-gradient(to right,  #c6d9eb , #1b344b)'
  card.style.boxShadow=" 5px 10px 5px #994d00"
  card.setAttribute('class','card h-100')
  let image=document.createElement('img')
  image.setAttribute('class','card-img-top img-fluid')
  image.style.height="200px"
  image.style.width="100%"
  image.setAttribute('src',flag)
  card.append(image)
  let cardbody=document.createElement('div')
  cardbody.setAttribute('class','card-body')
  let cardhead=document.createElement('h4')
  cardhead.setAttribute('class','card-title text-center')
  cardhead.innerHTML=countryname
  let alpha2Code_div =document.createElement('h6')
  alpha2Code_div.setAttribute('class','text-center')
  alpha2Code_div.innerHTML="aplha2Code : "+alpha2Code
  let capital_div=document.createElement('h6')
  capital_div.setAttribute('class','text-center')
  capital_div.innerHTML="Capital : "+capital
  let region_div =document.createElement('h6')
  region_div.setAttribute('class','text-center')
  region_div.innerHTML="Region : "+region
  let latlng_div =document.createElement('h6')
  latlng_div.setAttribute('class','text-center')
  latlng_div.innerHTML="latlng : "+latlng
  let btn_div=document.createElement('div')
  btn_div.setAttribute('class','text-center')
  let btn_wtr=document.createElement('button')
  btn_wtr.setAttribute('class','btn btn-light align-center')
  btn_wtr.innerHTML="Check Weather"
  btn_wtr.onclick=function(){
    currentweather(capital) 
  }
  cardbody.append(cardhead)
  cardbody.append(alpha2Code_div)
  cardbody.append(capital_div)
  cardbody.append(region_div)
  cardbody.append(latlng_div)
  btn_div.append(btn_wtr)
  cardbody.append(btn_div)
  card.append(cardbody)
  carddiv.append(card)
  row.append(carddiv)
  fluid_cointainer.append(row)
  document.body.append(fluid_cointainer)

 }



 function currentweather(capital){
var API="https://api.openweathermap.org/data/2.5/weather?q="+capital+"&APPID=3e9e4f1483579534a52a17f0daf3daaa"
console.log(API)
    fetch(API)
    .then((response)=>{
        console.log(response);
        return response.json();
    })
    .then((result)=>{
        let data=result
        alert("Hello this is weather of your country\n"+"clouds: "+data.weather[0].description+"\nHumidity: "+data.main.humidity+"\nwind speed: "+data.wind.speed)
    })
    .catch((err)=>{
        console.log(err)
    })
 }
