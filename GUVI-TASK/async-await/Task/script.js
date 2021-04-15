
document.body.style.background="#e5ebdd"
async function fetchdata(path){
    
    var API= await fetch("https://api.nytimes.com/svc/topstories/v2/"+path+".json?api-key=aNL2fRTyGCIFMcbIP3GXFzRhswb64O6s")
    var data=await API.json()
    display(data)
}

let fluid_cointainer = document.createElement('div')
fluid_cointainer.setAttribute('class', 'container-fluid')
let row = document.createElement('div')
row.setAttribute('id', 'row_1')
row.setAttribute('class', 'row  mt-n2 ')
row.style.border="2px solid #bde688"
let i = false

function display(data) {

    if(document.body.contains(document.getElementById('alert-box')))
    {
        document.getElementById('alert-box').remove()
    }
    
    if (i) {

        document.getElementById('row_1').innerHTML = '';

    }
    data.results.forEach(element => {
        i = true;
       
        let convert_date=new Date(element.created_date)
        convert_date=convert_date.toDateString().split(" ")
        let story_row = document.createElement('div')
        story_row.setAttribute('class', 'row')
        let container = document.createElement('div')
        container.setAttribute('class', 'container mt-5 border border-dark shadow-lg bg-white rounded')
        let content = document.createElement('div')
        content.setAttribute('class', 'col-8 px-3 my-3 p-0')
        let image_div = document.createElement('div')
        image_div.setAttribute('class', 'col-4 my-0 p-0 border border-dark')
        let image = document.createElement('img')
        let Section = document.createElement('h5')
        let title = document.createElement('h5')
        let date=document.createElement('h5')
        let abstract=document.createElement('h5')
        let shortlink=document.createElement('h5')
        let linkshort=document.createElement('a')
        linkshort.setAttribute('href',element.short_url)
        linkshort.setAttribute('target','_blank')
        image.setAttribute('class', 'img-fluid')
        image.style.height="100%"
        image.style.width="100%"
        image.setAttribute('src', element.multimedia[0].url)
        Section.style.fontFamily = "Roboto"
        date.style.fontFamily= "Robot"
        abstract.style.fontFamily="Roboto"
        shortlink.style.fontFamily="Roboto"
        linkshort.style.fontWeight="bold"
        abstract.style.lineHeight="1.8rem"
        Section.innerHTML = element.section.toUpperCase()
        title.innerHTML = element.title
        date.innerHTML=convert_date[1]+" "+convert_date[3]
        abstract.innerHTML=element.abstract
        linkshort.innerHTML="Continue Reading"
        image_div.append(image)
        content.append(Section)
        content.append(title)
        content.append(date)
        content.append(abstract)
        shortlink.append(linkshort)
        content.append(shortlink)
        story_row.append(content)
        story_row.append(image_div)
        container.append(story_row)
        row.append(container)
        fluid_cointainer.append(row)
        document.body.append(fluid_cointainer)
        console.log(data.results[0].multimedia[0].width)
    })
}
