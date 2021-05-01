document.body.style.background="#e5ebdd"
const clientId = 'b13bdf8eaeee4983b2938848bcaab3cd';
const clientSecret = '46f07e4b85a5407ea8580634d8abe9b6';
const _getToken = async () => {

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}
let token=_getToken()
async function fetchdata(token){
  
    const result = await fetch(' https://api.spotify.com/v1/users/53Y8wT46QIMz5H4WQ8O22c/playlists', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });
    var data=await result.json()
    console.log(data)
}

fetchdata(token)