// document.body.style.background="#e5ebdd"

const clientId = 'b13bdf8eaeee4983b2938848bcaab3cd';
const clientSecret = '46f07e4b85a5407ea8580634d8abe9b6';
let access_
ken=""
let follow_status="unfollow"
const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token?scope=user-follow-modify', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            "Authorization" : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    var data = await result.json();
    console.log(data)
     access_token = data.access_token
   fetchdata(data.access_token)
   getrecomendation(data.access_token)
  // playlistid(data.access_token)

async function getrecomendation(token)
{
    const result = await fetch('https://api.spotify.com/v1/recommendations', {
        method: 'GET',
        headers: { "Authorization" : 'Bearer ' + token}
    });
    let
     data=await result.json()
    console.log(data)
    display_playlist(data)
    
}
// let token=_getToken()
async function fetchdata(token){
    const result = await fetch('https://api.spotify.com/v1/users/Wizzler/playlists', {
        method: 'GET',
        headers: { "Authorization" : 'Bearer ' + token}
    });
    var data=await result.json()
    console.log(data)
    display_playlist(data)
}

function display_playlist(data)
{   
    let ul_list=document.getElementById("playlist-list")
    ul_list.style.color="white"
    ul_list.setAttribute("class","mt-5")
    id_playlist=0
    data.items.forEach( element=> {
        let li_element=document.createElement("li")
        ul_list.appendChild(li_element)
        li_element.setAttribute('class',"mt-3") 
        let playlink=element.tracks.href
        if(data.items[id_playlist].images.length>0)
        {
            let main_image=data.items[id_playlist].images[0].url
            let main_name_playlist=data.items[id_playlist].name
        
       
        let playlist_id=data.items[id_playlist].id
        // console.log(data.items[id_playlist].images[0].url)
        li_element.onclick=function(){get_playlist_song(playlist_id,main_image,main_name_playlist,playlink,access_token)}
        }
        //li_element.onclick=function(){console.log(data.items[id_playlist].id)}
        li_element.setAttribute('id',id_playlist)
        //console.log(data.items)
        li_element.innerHTML=element.name
        //console.log(element.tracks.href)
       
        id_playlist=id_playlist+1

    });
    document.getElementById("side-bar").appendChild(ul_list)
}

async function get_playlist_song(playlist_id,image_data,name_data,playlink,token)
{
    //window.open(playlink)
    let song_number=1
    document.getElementById("playlist_image").src=image_data
    document.getElementById("Playlist_main_name").innerHTML=name_data
    document.getElementById("tbody").remove()
    let tbody=document.createElement("tbody");
    tbody.setAttribute('id','tbody')
     let table_id=document.getElementById("track-table")
    console.log(playlist_id)
   // document.getElementById("followunfollow").onclick=function(){followunfollow(playlist_id,token)}
    const result = await fetch(playlink, {
        method: 'GET',
        headers: { "Authorization" : 'Bearer ' + token}
    });
    let data=await result.json()
    console.log(data)
    data.items.forEach(element=>{
        if(element.track != null){
        let newrow=tbody.insertRow(-1)
        let newcell1=newrow.insertCell(0)
        let newcell2=newrow.insertCell(1)
        let newcell3=newrow.insertCell(2)
        let newcell4=newrow.insertCell(3)
        let newcell5=newrow.insertCell(4)
        date=new Date(element.added_at).toLocaleDateString()
        time=new Date(element.added_at).toLocaleTimeString()
        newcell1.innerHTML=song_number
        song_number=song_number+1
        newcell2.innerHTML=element.track.name
        newcell3.innerHTML=element.track.album.name
        newcell4.innerHTML=date
        newcell5.innerHTML=time
        console.log(element.track.name)
        } 
        table_id.append(tbody)

        //playlist_data.items.forEach(element =>).id
    })

    //display_playlist(data)
}
// async function followunfollow(playlist_id,token)
// {
//     followlink="https://api.spotify.com/v1/playlists/"+playlist_id+"/followers"
//   console.log(followlink)
//     const result = await fetch(followlink, {
//         method: 'PUT',
//         headers: {
//             'Content-Type' : 'application/x-www-form-urlencoded', 
//             "Authorization" :'Bearer ' + token,  
//         },
//         body: 'grant_type=client_credentials',
       
//     });
//     var data=await result.json()
//     console.log(data)
    
// }
}

// fetchdata(token)