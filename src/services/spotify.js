// Components
const clientId = '71718d4539da4aa09be9d0d9acd95472';
const clientSecret = '55790833a6d5444fbf93400c887d0144';

// private methods

// get TOKEN from spotify account
// returns token string
export const _getToken = async () => {
    //fetch call
    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    const token =data.access_token;
    return token;
}

export const getTracksByPlaylistId = async (id) => {

    // #️⃣  receving token from spotify
    const token = await _getToken();
    // 🕊 fetch call - playlist
    const result = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
      method: 'GET',
       headers: { 'Authorization' : 'Bearer ' + token}
    });
  
    //calling playlist API 🕊   and parsing
    const playlist = await result.json();
    //PLAYLIST ARRAY
    return playlist;
  }