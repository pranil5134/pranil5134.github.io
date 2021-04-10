let random_word="https://random-word-api.herokuapp.com/word?number=1"

fetch(random_word)
.then((response) => {
    return response.json();
})
.then((result) => {
    let word=result[0]
    console.log(word)
    return fetch("https://api.giphy.com/v1/gifs/search?api_key=eYu2IBwXZmb2wfbbjUwU9KHq9DpXa52Y&q="+word+"&limit=5&offset=0&rating=g&lang=en")
})
.then((gpresp) => {
    return gpresp.json();
})
.then((gpresult) => {
    console.log(gpresult.data[0].images.original.url)
    image(gpresult.data[0].images.original.url)
})
.catch((err)=>{

    console.log(err)
})

function image(path)
{
   let object= document.getElementById("object")
   console.log(path)
   object.setAttribute('data',path)
   document.body.append(object)
}