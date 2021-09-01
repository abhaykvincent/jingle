import { useEffect, useState } from 'react'
import './App.scss'
import MoodStrip from './components/MoodStrip/MoodStrip';
    // Components
    const clientId = '71718d4539da4aa09be9d0d9acd95472';
    const clientSecret = '55790833a6d5444fbf93400c887d0144';

    // private methods

    // get TOKEN from spotify account
    // returns token string
    const _getToken = async () => {
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

    const __getPlayList = async (category_id) => {
      // #️⃣  receving token from spotify
      const token = await _getToken();
      // 🕊 fetch call - playlist
      const result = await fetch(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`, {
        method: 'GET',
         headers: { 'Authorization' : 'Bearer ' + token}
      });


      //calling playlist API 🕊   and parsing
      const playlist = await result.json();
      console.log(playlist);
      //
      //PLAYLIST ARRAY
      return playlist;
    }

    // Featured Playlists
    const __getFeaturedPlayList = async () => {

      // #️⃣  receving token from spotify
      const token = await _getToken();
      // 🕊 fetch call - playlist
      const result = await fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
        method: 'GET',
         headers: { 'Authorization' : 'Bearer ' + token}
      });

      //calling playlist API 🕊   and parsing
      const playlist = await result.json();
      //
      //PLAYLIST ARRAY
      return playlist;
    }
    // Featured Playlists
    const __getPlayListById = async (id) => {

    // #️⃣  receving token from spotify
    const token = await _getToken();
    // 🕊 fetch call - playlist
    const result = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      method: 'GET',
       headers: { 'Authorization' : 'Bearer ' + token}
    });

    //calling playlist API 🕊   and parsing
    const playlist = await result.json();
    console.log(playlist)
    //
    //PLAYLIST ARRAY
    return playlist;
  }

    
    


function App() {

  // 📦 STATES

  // view
  const [isExpandView, setIsExpandView] = useState(true)
  const [viewClass, setViewClass] = useState('')
  // model
  const [isExpandModel, setIsExpandModel] = useState(true)
  const [modelClass, setModelClass] = useState('')
  //Genres
  const [genres, setGenres] = useState([
      {
        "href": "https://api.spotify.com/v1/browse/categories/toplists",
        "icons": [
          {
            "height": 275,
            "url": "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
            "width": 275
          }
        ],
        "id": "toplists",
        "playlist":[
          {
            "collaborative": false,
            "description": "Chart toppers and fresh hits in Canada this week. Cover: Halsey",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXT8uSSn6PRy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXT8uSSn6PRy",
            "id": "37i9dQZF1DWXT8uSSn6PRy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f31a5b50d08252c06e260ea0",
                "width": null
              }
            ],
            "name": "Hot Hits Canada",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDI0MjQxNSwwMDAwMDFhYzAwMDAwMTdiOTIwNTIxYTUwMDAwMDE3Yjg2MzExNjJl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXT8uSSn6PRy/tracks",
              "total": 71
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXT8uSSn6PRy"
          },
          {
            "collaborative": false,
            "description": "The Kid LAROI & Justin Bieber are on top of the Hottest 50!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M",
            "id": "37i9dQZF1DXcBWIGoYBM5M",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d8299c8eebfce7f4be5c96f3",
                "width": null
              }
            ],
            "name": "Today's Top Hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM0MDQ4MSwwMDAwMDRlMDAwMDAwMTdiOTdkZDgxNzcwMDAwMDE3Yjg1MzZjZGRj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcBWIGoYBM5M"
          },
          {
            "collaborative": false,
            "description": "All the best new tracks this week, all in one place. Cover: Halsey",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5DfG8gQdC3F"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5DfG8gQdC3F",
            "id": "37i9dQZF1DX5DfG8gQdC3F",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003fa579b2f6e38f5a192780b50",
                "width": null
              }
            ],
            "name": "New Music Friday Canada",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDExMjQwMCwwMDAwMDI2NzAwMDAwMTdiOGE0NTQzMDMwMDAwMDE3Yjg2MDhiOTA5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5DfG8gQdC3F/tracks",
              "total": 101
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5DfG8gQdC3F"
          },
          {
            "collaborative": false,
            "description": "Tout nouveau, tout beau. Photo: Patrice Michaud",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9SvXmR7wQty"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9SvXmR7wQty",
            "id": "37i9dQZF1DX9SvXmR7wQty",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d34b0ac604fb80bf84921c33",
                "width": null
              }
            ],
            "name": "Nouveautés de la semaine Canada",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM0ODQwNCwwMDAwMDNkMzAwMDAwMTdiOTg1NjY2MWQwMDAwMDE3Yjg2MGYxNDAy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9SvXmR7wQty/tracks",
              "total": 99
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9SvXmR7wQty"
          },
          {
            "collaborative": false,
            "description": "The names you know and the names you need to know in hip-hop. Cover: Kanye West",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWY6tYEFs22tT"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWY6tYEFs22tT",
            "id": "37i9dQZF1DWY6tYEFs22tT",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037f50b55e3d46aabb414e00c1",
                "width": null
              }
            ],
            "name": "Hip-Hop Central",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDI0MDM2OSwwMDAwMDNmNzAwMDAwMTdiOTFlNWVjZjIwMDAwMDE3YjkxZTViYTEy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWY6tYEFs22tT/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWY6tYEFs22tT"
          },
          {
            "collaborative": false,
            "description": "New music from Kanye West, Lil Tecca and Meek Mill. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd",
            "id": "37i9dQZF1DX0XUsuxWHRQd",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003b9de97d7f992f99bd0668227",
                "width": null
              }
            ],
            "name": "RapCaviar",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQzODA0MiwwMDAwMDVjYjAwMDAwMTdiOWRhZTJiZDYwMDAwMDE3Yjk0OGE0ZjAz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0XUsuxWHRQd"
          },
          {
            "collaborative": false,
            "description": "Keep up with all the latest pop hits. Cover: Shawn Mendes",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXarRysLJmuju"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXarRysLJmuju",
            "id": "37i9dQZF1DXarRysLJmuju",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bb47113c3ebc894bebbdb948",
                "width": null
              }
            ],
            "name": "Pop All Day",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ1NzAzMiwwMDAwMDQ2NjAwMDAwMTdiOWVjZmVkYzUwMDAwMDE3Yjg1YjU3Mjc2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXarRysLJmuju/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXarRysLJmuju"
          },
          {
            "collaborative": false,
            "description": "Home to all the latest indie jams. Cover: MUNYA",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7XNgsy4UFju"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7XNgsy4UFju",
            "id": "37i9dQZF1DX7XNgsy4UFju",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030071b49640a4a913a4ee0f71",
                "width": null
              }
            ],
            "name": "Indie All Stars",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQyMjI1MywwMDAwMDY4MDAwMDAwMTdiOWNiZDNmMmUwMDAwMDE3Yjg2MDFjYjE3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7XNgsy4UFju/tracks",
              "total": 106
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7XNgsy4UFju"
          },
          {
            "collaborative": false,
            "description": "The best new tracks every week. Cover: Big Red Machine",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdbXrPNafg9d"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdbXrPNafg9d",
            "id": "37i9dQZF1DXdbXrPNafg9d",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f7736d1f119981ade430f231",
                "width": null
              }
            ],
            "name": "All New Indie",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDA5MDQxMCwwMDAwMDI1NTAwMDAwMTdiODhmNWJhMDEwMDAwMDE3Yjg0ZDZmMGRm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdbXrPNafg9d/tracks",
              "total": 177
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdbXrPNafg9d"
          },
          {
            "collaborative": false,
            "description": "The best of today's dance hits. Cover: Caribou",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdIpacQDPDV5"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdIpacQDPDV5",
            "id": "37i9dQZF1DXdIpacQDPDV5",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003213315a35cb5acd638da87a1",
                "width": null
              }
            ],
            "name": "mint Canada",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ0NTU0MywwMDAwMDJmNTAwMDAwMTdiOWUyMDlmYWMwMDAwMDE3Yjg2MTUwZmNj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdIpacQDPDV5/tracks",
              "total": 101
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdIpacQDPDV5"
          },
          {
            "collaborative": false,
            "description": "The world's biggest dance hits. Featuring new music from LP Giobbi & HANA, Becky Hill & Topic, Caribou and more!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4dyzvuaRJ0n",
            "id": "37i9dQZF1DX4dyzvuaRJ0n",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003370da9367bf9b9eb9901d768",
                "width": null
              }
            ],
            "name": "mint",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzMyOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4dyzvuaRJ0n/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4dyzvuaRJ0n"
          },
          {
            "collaborative": false,
            "description": "What's happening in R&B, right now. Cover: dvsn, Ty Dolla $ign",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2WkIBRaChxW"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2WkIBRaChxW",
            "id": "37i9dQZF1DX2WkIBRaChxW",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031e0ff839d85b520aed7b18fc",
                "width": null
              }
            ],
            "name": "R&B Right Now",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDEwMTc4MCwwMDAwMDJmMDAwMDAwMTdiODlhMzM5N2MwMDAwMDE3Yjg0NzFmOWRi",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2WkIBRaChxW/tracks",
              "total": 74
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2WkIBRaChxW"
          },
          {
            "collaborative": false,
            "description": "The pulse of R&B music today.  Cover: Alex Isley",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4SBhb3fqCJd"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4SBhb3fqCJd",
            "id": "37i9dQZF1DX4SBhb3fqCJd",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035ba1dc2cc756876259b86015",
                "width": null
              }
            ],
            "name": "Are & Be",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDAzNjgwMCwwMDAwMDUyNzAwMDAwMTdiODVjM2IyYzEwMDAwMDE3YjgzZDNjMDRm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4SBhb3fqCJd/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4SBhb3fqCJd"
          },
          {
            "collaborative": false,
            "description": "Nothing but the best modern country music. Cover: Nelly, Tyler Hubbard\n",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSK8os4XIQBk"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSK8os4XIQBk",
            "id": "37i9dQZF1DWSK8os4XIQBk",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036d01ed4031d17753a9e7cce8",
                "width": null
              }
            ],
            "name": "All About Country",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ1Njk3NSwwMDAwMDMyMjAwMDAwMTdiOWVjZjBlZGYwMDAwMDE3Yjg1YWU0Mjk3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSK8os4XIQBk/tracks",
              "total": 97
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSK8os4XIQBk"
          },
          {
            "collaborative": false,
            "description": "Today's top country hits of the week, worldwide! Cover: Nelly and Florida Georgia Line",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1lVhptIYRda",
            "id": "37i9dQZF1DX1lVhptIYRda",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000391afffed63a1f2251b3dde70",
                "width": null
              }
            ],
            "name": "Hot Country",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDMyNTAwMDAwMTdiODVjNDljZjQwMDAwMDE3YjdkZmFiMDA1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1lVhptIYRda/tracks",
              "total": 53
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1lVhptIYRda"
          },
          {
            "collaborative": false,
            "description": "The hottest tunes in rock. Crank it up! Cover: Danko Jones",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8jpyvTAre41"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8jpyvTAre41",
            "id": "37i9dQZF1DX8jpyvTAre41",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000377523c425fe8bf601b7b254f",
                "width": null
              }
            ],
            "name": "Rock Your Block",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDA5Mzc3OSwwMDAwMDJkYjAwMDAwMTdiODkyOTIyMDQwMDAwMDE3Yjg1YWE4NDZh",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8jpyvTAre41/tracks",
              "total": 95
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8jpyvTAre41"
          },
          {
            "collaborative": false,
            "description": "The newest music from Sueco, along with the top Rock songs you need to know.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcF6B6QPhFDv"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv",
            "id": "37i9dQZF1DXcF6B6QPhFDv",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035d15f2ea4edf3ca4195706e8",
                "width": null
              }
            ],
            "name": "Rock This",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM2NDQ1NiwwMDAwMDY2MjAwMDAwMTdiOTk0YjU2OWYwMDAwMDE3YjgzYjA0NTMz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcF6B6QPhFDv"
          },
          {
            "collaborative": false,
            "description": "The best new music by independent artists. Updates every Wednesday. Cover: Benét, Artwork: Isu Kim",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWjGdmeTyeJ6"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWjGdmeTyeJ6",
            "id": "37i9dQZF1DWWjGdmeTyeJ6",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039b644f42947ed62e5387de7e",
                "width": null
              }
            ],
            "name": "Fresh Finds",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzI4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWjGdmeTyeJ6/tracks",
              "total": 63
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWjGdmeTyeJ6"
          },
          {
            "collaborative": false,
            "description": "Your daily update of the most played tracks right now - Canada.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZEVXbKj23U1GF4IR"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKj23U1GF4IR",
            "id": "37i9dQZEVXbKj23U1GF4IR",
            "images": [
              {
                "height": null,
                "url": "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_ca_large.jpg",
                "width": null
              }
            ],
            "name": "Top 50 - Canada",
            "owner": {
              "display_name": "spotifycharts",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotifycharts"
              },
              "href": "https://api.spotify.com/v1/users/spotifycharts",
              "id": "spotifycharts",
              "type": "user",
              "uri": "spotify:user:spotifycharts"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "NjgzNzI4NTU2LDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDY1NmU=",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZEVXbKj23U1GF4IR/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZEVXbKj23U1GF4IR"
          },

          {
            "collaborative": false,
            "description": "Your daily update of the most played tracks right now - Global.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZEVXbMDoHDwVN2tF"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF",
            "id": "37i9dQZEVXbMDoHDwVN2tF",
            "images": [
              {
                "height": null,
                "url": "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_large.jpg",
                "width": null
              }
            ],
            "name": "Top 50 - Global",
            "owner": {
              "display_name": "spotifycharts",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotifycharts"
              },
              "href": "https://api.spotify.com/v1/users/spotifycharts",
              "id": "spotifycharts",
              "type": "user",
              "uri": "spotify:user:spotifycharts"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "NjgzNzI4NTU2LDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDY1NmU=",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZEVXbMDoHDwVN2tF"
          }
        ],
        "name": "Top Lists"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/hiphop",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg",
            "width": 274
          }
        ],
        "id": "hiphop",
        "playlist": [
          {
            "collaborative": false,
            "description": "The names you know and the names you need to know in hip-hop. Cover: Kanye West",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWY6tYEFs22tT"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWY6tYEFs22tT",
            "id": "37i9dQZF1DWY6tYEFs22tT",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037f50b55e3d46aabb414e00c1",
                "width": null
              }
            ],
            "name": "Hip-Hop Central",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDI0MDM2OSwwMDAwMDNmNzAwMDAwMTdiOTFlNWVjZjIwMDAwMDE3YjkxZTViYTEy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWY6tYEFs22tT/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWY6tYEFs22tT"
          },
          {
            "collaborative": false,
            "description": "New music from Kanye West, Lil Tecca and Meek Mill. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd",
            "id": "37i9dQZF1DX0XUsuxWHRQd",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003b9de97d7f992f99bd0668227",
                "width": null
              }
            ],
            "name": "RapCaviar",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQzODA0MiwwMDAwMDVjYjAwMDAwMTdiOWRhZTJiZDYwMDAwMDE3Yjk0OGE0ZjAz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0XUsuxWHRQd/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0XUsuxWHRQd"
          },
          {
            "collaborative": false,
            "description": "The sounds of hip-hop coming out of Canada. Cover: Belly",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX59ogDi1Z2XL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX59ogDi1Z2XL",
            "id": "37i9dQZF1DX59ogDi1Z2XL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003dab25d2a6888013ac621f833",
                "width": null
              }
            ],
            "name": "Northern Bars",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM0ODQ4MSwwMDAwMDMyYjAwMDAwMTdiOTg1NzkyOWMwMDAwMDE3Yjg1NDUxMDYy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX59ogDi1Z2XL/tracks",
              "total": 99
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX59ogDi1Z2XL"
          },
          {
            "collaborative": false,
            "description": "The songs you just keep coming back to. Cover: Drake",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX48TTZL62Yht"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX48TTZL62Yht",
            "id": "37i9dQZF1DX48TTZL62Yht",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000377a92a646f0294d8f1873306",
                "width": null
              }
            ],
            "name": "Hip-Hop Favourites",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzUyMywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX48TTZL62Yht/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX48TTZL62Yht"
          },
          {
            "collaborative": false,
            "description": "Real rap music from the golden era.\n",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX186v583rmzp"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX186v583rmzp",
            "id": "37i9dQZF1DX186v583rmzp",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000317f5a91128f800d0223948cd",
                "width": null
              }
            ],
            "name": "I Love My '90s Hip-Hop",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzU3NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX186v583rmzp/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX186v583rmzp"
          },
          {
            "collaborative": false,
            "description": "Energy tracks to get your beast mode on.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9oh43oAzkyx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9oh43oAzkyx",
            "id": "37i9dQZF1DX9oh43oAzkyx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000361b26b89e63392ad9955ce82",
                "width": null
              }
            ],
            "name": "Beast Mode Hip-Hop",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzU2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9oh43oAzkyx/tracks",
              "total": 76
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9oh43oAzkyx"
          },
          {
            "collaborative": false,
            "description": "Mode: Turnt",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWY4xHQp97fN6"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWY4xHQp97fN6",
            "id": "37i9dQZF1DWY4xHQp97fN6",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e0807bac61bd936d31a80289",
                "width": null
              }
            ],
            "name": "Get Turnt",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM1MTg3OCwwMDAwMDRiYjAwMDAwMTdiOTg4YjY4NTYwMDAwMDE3YjMyYmE2ZjU0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWY4xHQp97fN6/tracks",
              "total": 103
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWY4xHQp97fN6"
          },
          {
            "collaborative": false,
            "description": "The hip-hop playlist that's a whole mood. Cover: Kash Doll; Art by Laci Jordan",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6GwdWRQMQpq"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6GwdWRQMQpq",
            "id": "37i9dQZF1DX6GwdWRQMQpq",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c32c28372835af7e7e9dbed2",
                "width": null
              }
            ],
            "name": "Feelin' Myself",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDAzNjgwMCwwMDAwMDQ0ZDAwMDAwMTdiODVjM2IyYzQwMDAwMDE3YjdlYTllNmEx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6GwdWRQMQpq/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6GwdWRQMQpq"
          },
          {
            "collaborative": false,
            "description": "Pass the sticks & press play.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWT5MrZnPU1zD"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWT5MrZnPU1zD",
            "id": "37i9dQZF1DWT5MrZnPU1zD",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036cb04ce4baed2e4cc0d11461",
                "width": null
              }
            ],
            "name": "Hip Hop Controller",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzU2OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWT5MrZnPU1zD/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWT5MrZnPU1zD"
          },
          {
            "collaborative": false,
            "description": "The soundtrack to the Internet. Cover: Trippie Redd",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6OgmB2fwLGd"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6OgmB2fwLGd",
            "id": "37i9dQZF1DX6OgmB2fwLGd",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000371f87a7a0aca93fb3d6fd20a",
                "width": null
              }
            ],
            "name": "Internet People",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM2NTE2MiwwMDAwMDIyNDAwMDAwMTdiOTk1NjFkMmMwMDAwMDE3Yjg0OWY2MDdk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6OgmB2fwLGd/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6OgmB2fwLGd"
          },
          {
            "collaborative": false,
            "description": "The official voice of generation next. Cover: Sheff G",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2RxBh64BHjQ"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2RxBh64BHjQ",
            "id": "37i9dQZF1DX2RxBh64BHjQ",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003959a41b446bf0893e63589fe",
                "width": null
              }
            ],
            "name": "Most Necessary",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDA0MDQwMCwwMDAwMDM4ODAwMDAwMTdiODVmYWExNjkwMDAwMDE3YjNjZmEzMWMx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2RxBh64BHjQ/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2RxBh64BHjQ"
          },
          {
            "collaborative": false,
            "description": "Strictly for the streets. Cover: EST Gee",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaxIqwkEGFEh"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaxIqwkEGFEh",
            "id": "37i9dQZF1DXaxIqwkEGFEh",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003b0c94b90ff57e85f57664996",
                "width": null
              }
            ],
            "name": "Out The Mud",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDA0MDQwMCwwMDAwMDRkOTAwMDAwMTdiODVmYWEwZjQwMDAwMDE3YjJkOGE5NTg1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaxIqwkEGFEh/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaxIqwkEGFEh"
          },
          {
            "collaborative": false,
            "description": "The finest in UK rap. Cover: Blanco",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6PKX5dyBKeq",
            "id": "37i9dQZF1DX6PKX5dyBKeq",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003b9b32ea0f60bb909fa8b5f51",
                "width": null
              }
            ],
            "name": "Rap UK",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYyOTQxNDAwMCwwMDAwMDJkYTAwMDAwMTdiNjBhNDg2MDUwMDAwMDE3YjVmMzkyODUx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6PKX5dyBKeq/tracks",
              "total": 76
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6PKX5dyBKeq"
          },
          {
            "collaborative": false,
            "description": "new music by EKKSTACY",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6xZZEgC9Ubl"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6xZZEgC9Ubl",
            "id": "37i9dQZF1DX6xZZEgC9Ubl",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000313135289a4c0c0cfdf20ae23",
                "width": null
              }
            ],
            "name": "tear drop",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzUyMywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6xZZEgC9Ubl/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6xZZEgC9Ubl"
          },
          {
            "collaborative": false,
            "description": "Le meilleur du hip-hop québécois. Photo: PL & Wheelie",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTZeTXqKTge4"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTZeTXqKTge4",
            "id": "37i9dQZF1DWTZeTXqKTge4",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003078751c9a1eb7edb8d4b66c4",
                "width": null
              }
            ],
            "name": "Rap québ",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDA5OTUzNCwwMDAwMDFkZTAwMDAwMTdiODk4MGYxNmMwMDAwMDE3Yjg2M2I3OTcy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTZeTXqKTge4/tracks",
              "total": 111
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTZeTXqKTge4"
          },
          {
            "collaborative": false,
            "description": "Chillout hip-hop vibes. Cover: Vince Staples",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWT6MhXz0jw61"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWT6MhXz0jw61",
            "id": "37i9dQZF1DWT6MhXz0jw61",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000396e4b145344d2c54c8ef2eb8",
                "width": null
              }
            ],
            "name": "Mellow Bars",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDE3ZDAwMDAwMTdiODVjNDljYzQwMDAwMDE3YjJkODg0NDM2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWT6MhXz0jw61/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWT6MhXz0jw61"
          },
          {
            "collaborative": false,
            "description": "Crossing over like Allen I. Cover: Yung Bleu\n",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2A29LI7xHn1"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2A29LI7xHn1",
            "id": "37i9dQZF1DX2A29LI7xHn1",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003da372845054d93584b42a43c",
                "width": null
              }
            ],
            "name": "Signed XOXO",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM0NTU1OCwwMDAwMDIzMTAwMDAwMTdiOTgyYWY4MjAwMDAwMDE3YjM4N2ZlN2Nj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2A29LI7xHn1/tracks",
              "total": 101
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2A29LI7xHn1"
          },
          {
            "collaborative": false,
            "description": "The hottest out the south. Cover: Young Nudy",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0Tkc6ltcBfU"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0Tkc6ltcBfU",
            "id": "37i9dQZF1DX0Tkc6ltcBfU",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038df7cf7984c1f082b613d0d5",
                "width": null
              }
            ],
            "name": "No Cap",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDFjZTAwMDAwMTdiODVjNDljZTMwMDAwMDE3YjJkN2I3ZWMy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0Tkc6ltcBfU/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0Tkc6ltcBfU"
          },
          {
            "collaborative": false,
            "description": "The champs are here.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8dTWjpijlub"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8dTWjpijlub",
            "id": "37i9dQZF1DX8dTWjpijlub",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000339944caca5dfcd741d31137d",
                "width": null
              }
            ],
            "name": "Trophy Room",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzU2NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8dTWjpijlub/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8dTWjpijlub"
          },
          {
            "collaborative": false,
            "description": "New Joints of the week featuring Kanye West, Meek Mill, Lil Tecca, and more. Cover: Baby Keem & Kendrick Lamar",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4SrOBCjlfVi"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4SrOBCjlfVi",
            "id": "37i9dQZF1DX4SrOBCjlfVi",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003abd70293da16a3b33fc8a5e3",
                "width": null
              }
            ],
            "name": "New Joints",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM2NDA3MCwwMDAwMDA1ZjAwMDAwMTdiOTk0NTcxMTUwMDAwMDE3YjdlODg4NzE0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4SrOBCjlfVi/tracks",
              "total": 52
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4SrOBCjlfVi"
          }
        ],
        "name": "Hip Hop"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/pop",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "pop",
        "playlist": [
          {
            "collaborative": false,
            "description": "Chart toppers and fresh hits in Canada this week. Cover: Halsey",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXT8uSSn6PRy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXT8uSSn6PRy",
            "id": "37i9dQZF1DWXT8uSSn6PRy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f31a5b50d08252c06e260ea0",
                "width": null
              }
            ],
            "name": "Hot Hits Canada",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDI0MjQxNSwwMDAwMDFhYzAwMDAwMTdiOTIwNTIxYTUwMDAwMDE3Yjg2MzExNjJl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXT8uSSn6PRy/tracks",
              "total": 71
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXT8uSSn6PRy"
          },
          {
            "collaborative": false,
            "description": "Keep up with all the latest pop hits. Cover: Shawn Mendes",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXarRysLJmuju"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXarRysLJmuju",
            "id": "37i9dQZF1DXarRysLJmuju",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bb47113c3ebc894bebbdb948",
                "width": null
              }
            ],
            "name": "Pop All Day",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ1NzAzMiwwMDAwMDQ2NjAwMDAwMTdiOWVjZmVkYzUwMDAwMDE3Yjg1YjU3Mjc2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXarRysLJmuju/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXarRysLJmuju"
          },
          {
            "collaborative": false,
            "description": "Where your next bops live. Cover: Alex Porat",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYMfG0Phlxx8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYMfG0Phlxx8",
            "id": "37i9dQZF1DWYMfG0Phlxx8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003758b5936cab9e48b222442a8",
                "width": null
              }
            ],
            "name": "It's a Bop",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDA3NjY3MSwwMDAwMDM2NjAwMDAwMTdiODgyNDE0ZGEwMDAwMDE3Yjg1YjE3ZmEy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYMfG0Phlxx8/tracks",
              "total": 96
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYMfG0Phlxx8"
          },
          {
            "collaborative": false,
            "description": "The Kid LAROI & Justin Bieber are on top of the Hottest 50!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M",
            "id": "37i9dQZF1DXcBWIGoYBM5M",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d8299c8eebfce7f4be5c96f3",
                "width": null
              }
            ],
            "name": "Today's Top Hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM0MDQ4MSwwMDAwMDRlMDAwMDAwMTdiOTdkZDgxNzcwMDAwMDE3Yjg1MzZjZGRj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcBWIGoYBM5M"
          },
          {
            "collaborative": false,
            "description": "A mix of the biggest pop, dance, and hip hop hits. Cover: Skrillex, Don Toliver, & Justin Bieber",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXa2PvUpywmrr"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa2PvUpywmrr",
            "id": "37i9dQZF1DXa2PvUpywmrr",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d1a61aefdfe61a6f3b85bb0f",
                "width": null
              }
            ],
            "name": "Party Hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzYyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa2PvUpywmrr/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXa2PvUpywmrr"
          },
          {
            "collaborative": false,
            "description": "Listen to easy songs from your favorite artists! Cover: Adele",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTwnEm1IYyoj"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTwnEm1IYyoj",
            "id": "37i9dQZF1DWTwnEm1IYyoj",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a259e07a24c5b6ccf60de2d3",
                "width": null
              }
            ],
            "name": "Soft Pop Hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDA4MTAwMDAwMTdiODVjNDljZTIwMDAwMDE3ODdmNTY0NTcy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTwnEm1IYyoj/tracks",
              "total": 215
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTwnEm1IYyoj"
          },
          {
            "collaborative": false,
            "description": "All the best new tracks this week, all in one place. Cover: Halsey",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5DfG8gQdC3F"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5DfG8gQdC3F",
            "id": "37i9dQZF1DX5DfG8gQdC3F",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003fa579b2f6e38f5a192780b50",
                "width": null
              }
            ],
            "name": "New Music Friday Canada",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDExMjQwMCwwMDAwMDI2NzAwMDAwMTdiOGE0NTQzMDMwMDAwMDE3Yjg2MDhiOTA5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5DfG8gQdC3F/tracks",
              "total": 101
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5DfG8gQdC3F"
          },
          {
            "collaborative": false,
            "description": "all the songs you wanna hear rn cover: A-Wall",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWvvyNmW9V9a"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWvvyNmW9V9a",
            "id": "37i9dQZF1DWWvvyNmW9V9a",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c88019d3e34ac5c0abcc6b4b",
                "width": null
              }
            ],
            "name": "Teen Beats",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDM1OTQxMywwMDAwMDBjZjAwMDAwMTdiOThmZTYyZTcwMDAwMDE3Yjg1OTkxOGUy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWvvyNmW9V9a/tracks",
              "total": 104
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWvvyNmW9V9a"
          },
          {
            "collaborative": false,
            "description": "Recent hits you just can't get enough of. Cover: Justin Bieber",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcOFePJj4Rgb"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcOFePJj4Rgb",
            "id": "37i9dQZF1DXcOFePJj4Rgb",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ddffb87db05c5f59240b1cec",
                "width": null
              }
            ],
            "name": "Pop Favourites",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzU4MywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcOFePJj4Rgb/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcOFePJj4Rgb"
          },
          {
            "collaborative": false,
            "description": "Viral, trending and taking off.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2L0iB23Enbq"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2L0iB23Enbq",
            "id": "37i9dQZF1DX2L0iB23Enbq",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036bdff7dc0e53fe6ca17749b5",
                "width": null
              }
            ],
            "name": "Viral Hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ1MTUyMSwwMDAwMDFkNjAwMDAwMTdiOWU3YmQ5MWQwMDAwMDE3NGQ1OWNhOTM1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2L0iB23Enbq/tracks",
              "total": 103
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2L0iB23Enbq"
          },
          {
            "collaborative": false,
            "description": "Listen to all the tracks you've been missing. Cover: The Weeknd",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0s5kDXi1oC5"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0s5kDXi1oC5",
            "id": "37i9dQZF1DX0s5kDXi1oC5",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ca64210a23622427ec19c4a6",
                "width": null
              }
            ],
            "name": "Hit Rewind",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzYyNSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0s5kDXi1oC5/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0s5kDXi1oC5"
          },
          {
            "collaborative": false,
            "description": "Current favorites and exciting new music. Cover: Shawn Mendes",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcRXFNfZr7Tp"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcRXFNfZr7Tp",
            "id": "37i9dQZF1DXcRXFNfZr7Tp",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037937f0ceaff49d0447c79b9d",
                "width": null
              }
            ],
            "name": "just hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ1NjQ3NywwMDAwMDRmMzAwMDAwMTdiOWVjNzc3NjIwMDAwMDE3YjVkZjkzMTZl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcRXFNfZr7Tp/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcRXFNfZr7Tp"
          },
          {
            "collaborative": false,
            "description": "Ease into these recent hits and new songs from your favorite artists. Cover: OneRepublic",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0b1hHYQtJjp"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0b1hHYQtJjp",
            "id": "37i9dQZF1DX0b1hHYQtJjp",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c8320b4f10e6ba14934dc687",
                "width": null
              }
            ],
            "name": "Just Good Music",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDBiMzAwMDAwMTdiODVjNDljZDMwMDAwMDE3YjgyZTdmM2Vk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0b1hHYQtJjp/tracks",
              "total": 72
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0b1hHYQtJjp"
          },
          {
            "collaborative": false,
            "description": "Find your new favourite song in this batch of fresh tunes. Cover: Kanye West",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbpmT3HUTsZm"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbpmT3HUTsZm",
            "id": "37i9dQZF1DXbpmT3HUTsZm",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033ba644e21e2cf216b2546c3d",
                "width": null
              }
            ],
            "name": "New Music Now",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDI1MTMzOCwwMDAwMDEzOTAwMDAwMTdiOTI4ZDRjMjYwMDAwMDE3YjkyOGQxOGY0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbpmT3HUTsZm/tracks",
              "total": 61
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbpmT3HUTsZm"
          },
          {
            "collaborative": false,
            "description": "The hits of tomorrow are on Spotify today. Cover: Clinton Kane",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUa8ZRTfalHk"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUa8ZRTfalHk",
            "id": "37i9dQZF1DWUa8ZRTfalHk",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037b273062d40e27bed213013e",
                "width": null
              }
            ],
            "name": "Pop Rising",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQzODA4NiwwMDAwMDU1YTAwMDAwMTdiOWRhZWQ5MTQwMDAwMDE3Yjg1Yzg2MmIx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUa8ZRTfalHk/tracks",
              "total": 89
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUa8ZRTfalHk"
          },
          {
            "collaborative": false,
            "description": "Bad b**** energy. Be blessed, be spicy. Cover: Lizzo, Cardi B",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX66m4icL86Ru"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX66m4icL86Ru",
            "id": "37i9dQZF1DX66m4icL86Ru",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003908d1d0bc9dce82b87204b4c",
                "width": null
              }
            ],
            "name": "BBE",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDA3MTAwMDAwMTdiODVjNDljZTAwMDAwMDE3YjViYTU3Y2Rj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX66m4icL86Ru/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX66m4icL86Ru"
          },
          {
            "collaborative": false,
            "description": "iykyk",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5Vy6DFOcx00"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5Vy6DFOcx00",
            "id": "37i9dQZF1DX5Vy6DFOcx00",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003fdf4cfec15e4ef102ebc583b",
                "width": null
              }
            ],
            "name": "big on the internet",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ1MjIxMCwwMDAwMDE0OTAwMDAwMTdiOWU4NjVhMzkwMDAwMDE3NWQ0NThjNDIw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5Vy6DFOcx00/tracks",
              "total": 111
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5Vy6DFOcx00"
          },
          {
            "collaborative": false,
            "description": "A mix of folksy hits, soulful acoustic, and beloved singer-songwriter gems. Cover: Vance Joy",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4VvfRBFClxm"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4VvfRBFClxm",
            "id": "37i9dQZF1DX4VvfRBFClxm",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f3ad4b1915606048cdef7581",
                "width": null
              }
            ],
            "name": "Acoustic Hits",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzU4MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4VvfRBFClxm/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4VvfRBFClxm"
          },
          {
            "collaborative": false,
            "description": "Throw the weights around with your favorite uptempo pop songs!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5gQonLbZD9s"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5gQonLbZD9s",
            "id": "37i9dQZF1DX5gQonLbZD9s",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003b646573bb124fc0621fb3d64",
                "width": null
              }
            ],
            "name": "Pumped Pop",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzYyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5gQonLbZD9s/tracks",
              "total": 60
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5gQonLbZD9s"
          },
          {
            "collaborative": false,
            "description": "Ease your mind with these recent mellow pop hits. Cover: JP Saxe, Julia Michaels",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVw7c2MHvocy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVw7c2MHvocy",
            "id": "37i9dQZF1DWVw7c2MHvocy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030801825f6893b13b6fa5d70a",
                "width": null
              }
            ],
            "name": "Mellow Favourites",
            "owner": {
              "display_name": "Spotify",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
              },
              "href": "https://api.spotify.com/v1/users/spotify",
              "id": "spotify",
              "type": "user",
              "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": null,
            "snapshot_id": "MTYzMDQ2MzU4MywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVw7c2MHvocy/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVw7c2MHvocy"
          }
        ],
        "name": "Pop"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/country",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/a2e0ebe2ebed4566ba1d8236b869241f.jpeg",
            "width": null
          }
        ],
        "id": "country",
        "name": "Country"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/rock",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "rock",
        "name": "Rock"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/latin",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/26a60378-a374-4cd7-b894-28efa5e154cb.jpg",
            "width": null
          }
        ],
        "id": "latin",
        "name": "Latin"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/workout",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/media/links/workout-274x274.jpg",
            "width": null
          }
        ],
        "id": "workout",
        "name": "Workout"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/rnb",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "rnb",
        "name": "R&B"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/mood",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
            "width": 274
          }
        ],
        "id": "mood",
        "name": "Mood"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/edm_dance",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "edm_dance",
        "name": "Dance/Electronic"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/indie_alt",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg",
            "width": null
          }
        ],
        "id": "indie_alt",
        "name": "Indie"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/sleep",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/sleep-274x274_0d4f836af8fab7bf31526968073e671c_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "sleep",
        "name": "Sleep"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/inspirational",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/e023f691436b4518aec8c3b18973268e",
            "width": null
          }
        ],
        "id": "inspirational",
        "name": "Christian & Gospel"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/regional_mexican",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/c765fa1ce6994fce8796d2d0d93c1e61.jpeg",
            "width": null
          }
        ],
        "id": "regional_mexican",
        "name": "Regional Mexican"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/student",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/67a216e1e07144f889d366fed5c325bc.jpeg",
            "width": null
          }
        ],
        "id": "student",
        "name": "Student"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/focus",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg",
            "width": 274
          }
        ],
        "id": "focus",
        "name": "Focus"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/summer",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/8e508d7eb5b843a89c368c9507ecc429.jpeg",
            "width": null
          }
        ],
        "id": "summer",
        "name": "Summer"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/frequency",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/cad629fb65a14de4beddb38510e27cb1",
            "width": null
          }
        ],
        "id": "frequency",
        "name": "Frequency"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/chill",
        "icons": [
          {
            "height": 274,
            "url": "https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg",
            "width": 274
          }
        ],
        "id": "chill",
        "name": "Chill"
      },
      {
        "href": "https://api.spotify.com/v1/browse/categories/decades",
        "icons": [
          {
            "height": null,
            "url": "https://t.scdn.co/images/b611cf5145764c64b80e91ccd5f357c8",
            "width": null
          }
        ],
        "id": "decades",
        "name": "Decades"
      }])
  //
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [playlistTracksHtml, setPlaylistTracksHtml] = useState();

  // Featured Playlist
  const [featuredPlaylist, setFeaturedPlaylist] = useState(null);
  const [featuredPlaylistHTML, setFeaturedPlaylistHTML] = useState(null);

  //FUNCTIONS

  const expandView =  () => {
    // 🔁 expand state TRANSPOSED
    setIsExpandView(!isExpandView)
    // reaction class CHANGE
    setViewClass(isExpandView ? "expand" : '')
  }
  const expandModel =  () => {
    // 🔁 expand state TRANSPOSED
    setIsExpandModel(!isExpandModel)
    // reaction class CHANGE
    setModelClass(isExpandModel ? "expand" : '')

  }

  useEffect(() => {

    // Featured Playlist //
    // 📦  Storing genre list for set state
    const getFeaturedPlaylist = async () => {
      //🧲 reciving genre list through API  via __getGenres call
      const featuredPlaylist = await __getFeaturedPlayList()
      //console.log(genreList)
      return featuredPlaylist;
    }
    //  📦 genre set state
    getFeaturedPlaylist().then((featuredPlaylistData)=>{
      // 📦
      setFeaturedPlaylist(featuredPlaylistData.playlists.items)
    })
      
    return () => {
    }
  }, []);

  //on featuredPlaylist Stored in State
  useEffect(() => {
    // check to see if its the initial state
    if( currentPlaylist === null ){
      // first load, set cart to real initial state, after load
      console.log('Featured Playlist Loading ...')
    }else
      console.log(currentPlaylist )
  }, [currentPlaylist]);

  //on featuredPlaylist Stored in State
  useEffect(() => {
    // check to see if its the initial state
    if( featuredPlaylist === null ){
      // first load, set cart to real initial state, after load
      console.log('Featured Playlist Loading ...')
    }
    else{
      console.log(featuredPlaylist)
      let featuredPlaylistHTMLtemp =[]
      


      Promise.all(
        featuredPlaylist.map((data) => {
          const getTracksList = async () => {
            const tracks = await __getPlayListById(data.id);
            return tracks.tracks.items;
          }

          getTracksList()
          .then(tracks=>{

            featuredPlaylistHTMLtemp.push( <MoodStrip playlist={data} tracks={tracks} key={data.id}/>)
            
            setFeaturedPlaylistHTML(featuredPlaylistHTMLtemp)
          })
            .catch(()=>{
              console.log('getTracksList() Err')
            })
        }))
        .then(()=>{
            return
            })

          }
        }, [featuredPlaylist,featuredPlaylistHTML]);

  // 💀 Genre strip HTML
  const genresHtml = genres.map(genre => {
    return <div className="genre"
      onClick={()=>{
          expandView();
          //  GET  playlist 
          const getPlaylist = async () => {
            const playlistt = await __getPlayList(genre.id);
            return playlistt;
          }
          // 🧲 get playlist call
          getPlaylist()
          .then((playlistData)=>{
            let playlistTracks = playlistData.playlists.items
            // 📦 setSTATE Playlist tracks data 
            //setCurrentPlaylistTracks(playlistTracks);

            // 💀 Playlist Tracks - COMPONENT
            const playlistTracksHtmlTemp = playlistTracks.map(track => {
              return <TrackSmallThumbnail track={track}/>
            })
            // 📦 setSTATE Playlist Track markup
            setPlaylistTracksHtml(playlistTracksHtmlTemp)
          })
          
      }}>
        <div className="genre-icon" style={{backgroundImage: `url(${genre.icons[0].url})`}}></div>
        {genre.name}
      </div>
  })

  return (
    <div className="App">
      <div className="home">

        <div className="search">
          <input type="text" name="Search" id="search-home" 
          onClick={()=>{expandView()}}/>
        </div>
        <div className="genres">
          <div className="label-sub"><h3>Top Genres</h3></div>
          <div className="genres-list">
            {genresHtml}
          </div>
        </div>
        
        <div className="shelf-divider"></div>
        {featuredPlaylistHTML}
      </div>
      <div className={`view playlist ${viewClass}`}>
        <div className="view__head">
          <div className="back" 
          onClick={()=>{expandView();}}>)</div>
        </div>
        <div className="view__body">
          <div className="playlist" 
          onClick={()=>{expandModel()}}>
            {playlistTracksHtml}
          </div>
        </div>
      </div>
      <div className={`model player ${modelClass}`}>
        <div className="model__head">
          <div className="back" 
          onClick={()=>{expandModel()}}>)</div></div>
        <div className="model__body">
          <div className="track">
            <div className="album-artwork">
            </div>
            <div className="track-name">
              <div className="spotify-logo">
              
              </div>
              
              <p>Track Name ipsm</p>
              <p className="artist">Lorem ipsum</p>
            </div>
            <div className="play-controls">
              <div className="progress-bar">
                <div className="progress"></div>
                <div className="progress-time">
                  <div className="current-time">3.21</div>
                  <div className="remaining-time">-2.01</div>
                </div>
              </div>
              <div className="main-controls">
                <div className="controls">
                  <div className="control"></div>
                  <div className="control">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path xmlns="http://www.w3.org/2000/svg" id="Video_Play" data-name="Video Play" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.52,12.52,0,0,0,12.5,0Zm5.26,12.92-8,5A.56.56,0,0,1,9.5,18a.5.5,0,0,1-.24-.06A.51.51,0,0,1,9,17.5V7.5a.51.51,0,0,1,.26-.44.49.49,0,0,1,.51,0l8,5a.49.49,0,0,1,0,.84Z" fill="#0e1d25"/>
                  </svg>
                  </div>
                  <div className="control next">
                  <svg width="327" height="327" viewBox="0 0 327 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M102.605 75.993C102.486 69.8357 109.077 65.8586 114.469 68.8341L269.731 154.517C275.123 157.492 275.271 165.189 269.999 168.37L118.164 259.99C112.891 263.172 106.152 259.453 106.033 253.295L102.605 75.993Z" fill="black"/>
                    <line x1="271.5" y1="66.5" x2="271.5" y2="258.5" stroke="black" stroke-width="33" stroke-linecap="round"/>
                  </svg>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
function TrackSmallThumbnail(props) {
  let track = props.track;
  return (
      
    <div className="track">
    <div className="album-artwork"></div>
    <div className="track-name">
      <p>{track.name}</p>
      <p className="artist">{track.description}</p>
    </div>
    <div className="play-button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
    <path xmlns="http://www.w3.org/2000/svg" id="Video_Play" data-name="Video Play" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.52,12.52,0,0,0,12.5,0Zm5.26,12.92-8,5A.56.56,0,0,1,9.5,18a.5.5,0,0,1-.24-.06A.51.51,0,0,1,9,17.5V7.5a.51.51,0,0,1,.26-.44.49.49,0,0,1,.51,0l8,5a.49.49,0,0,1,0,.84Z" fill="#0e1d25"/>
    </svg>
    </div>
  </div>
  )
}

export default App;
