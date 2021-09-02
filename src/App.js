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
        "playlist": [
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
            "description": "New Music Discovery is what we're about.  Try it on for size. Cover: Niko Moon",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8S0uQvJ4gaa"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8S0uQvJ4gaa",
            "id": "37i9dQZF1DX8S0uQvJ4gaa",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031f401b72e7e5e6bef136dec1",
                "width": null
              }
            ],
            "name": "New Boots",
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
            "snapshot_id": "MTYzMDA3NjY0NSwwMDAwMDI3MTAwMDAwMTdiODgyM2FmNjEwMDAwMDE3Yjg4MGM2NzRi",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8S0uQvJ4gaa/tracks",
              "total": 101
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8S0uQvJ4gaa"
          },
          {
            "collaborative": false,
            "description": "The perfect soundtrack recipe for a backyard barbecue! ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbIbVYph0Zr5"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbIbVYph0Zr5",
            "id": "37i9dQZF1DXbIbVYph0Zr5",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033c5a340bdd0bc167ad56f064",
                "width": null
              }
            ],
            "name": "Country Cookout",
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
            "snapshot_id": "MTYzMDQ2NDMwMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbIbVYph0Zr5/tracks",
              "total": 120
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbIbVYph0Zr5"
          },
          {
            "collaborative": false,
            "description": "The soundtrack to the CMA's 2021 event of the summer, airing Thursday, September 2nd at 8/7c on ABC.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4yQ5BwwlSiC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4yQ5BwwlSiC",
            "id": "37i9dQZF1DX4yQ5BwwlSiC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003852768991c9a97abf46110af",
                "width": null
              }
            ],
            "name": "CMA Summer Jam",
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
            "snapshot_id": "MTYyOTcyOTgxOSwwMDAwMDAwOTAwMDAwMTdiNzM3NzhiZWUwMDAwMDE3YjYwMWUzNzIz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4yQ5BwwlSiC/tracks",
              "total": 45
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4yQ5BwwlSiC"
          },
          {
            "collaborative": false,
            "description": "Country music to get you back to the basics.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTkxQvqMy4WW"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTkxQvqMy4WW",
            "id": "37i9dQZF1DWTkxQvqMy4WW",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f5b078962d37890234b76125",
                "width": null
              }
            ],
            "name": "Chillin' on a Dirt Road",
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
            "snapshot_id": "MTYzMDQ2NDI4NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTkxQvqMy4WW/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTkxQvqMy4WW"
          },
          {
            "collaborative": false,
            "description": "Country that made Country Cool! Cover:  Shania Twain",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVpjAJGB70vU"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVpjAJGB70vU",
            "id": "37i9dQZF1DWVpjAJGB70vU",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030b52aec88b0f048242888473",
                "width": null
              }
            ],
            "name": "90's Country",
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
            "snapshot_id": "MTYxNjEyNjUyMCwwMDAwMDAzMjAwMDAwMTc4NDhhNWFiMmYwMDAwMDE3NGRmZWViMDhm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVpjAJGB70vU/tracks",
              "total": 60
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVpjAJGB70vU"
          },
          {
            "collaborative": false,
            "description": "The perfect soundtrack for a day on the water. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcSzYlwgjiSi"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcSzYlwgjiSi",
            "id": "37i9dQZF1DXcSzYlwgjiSi",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031ce469c867c1c6e1cc7f815b",
                "width": null
              }
            ],
            "name": "Party Cove",
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
            "snapshot_id": "MTYyOTQyOTgxNywwMDAwMDAxYjAwMDAwMTdiNjE5NWUxMDUwMDAwMDE3MmUxYzkwZWJi",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcSzYlwgjiSi/tracks",
              "total": 115
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcSzYlwgjiSi"
          },
          {
            "collaborative": false,
            "description": "A decade full of 00s country hits! Cover: Keith Urban, Carrie Underwood, Kenny Chesney",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdxUH6sNtcDe"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdxUH6sNtcDe",
            "id": "37i9dQZF1DXdxUH6sNtcDe",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030f89886755bdd709f0bd6e10",
                "width": null
              }
            ],
            "name": "2000s Country",
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
            "snapshot_id": "MTYzMDQ2NDMwNCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdxUH6sNtcDe/tracks",
              "total": 125
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdxUH6sNtcDe"
          },
          {
            "collaborative": false,
            "description": "Need to get your energy level up? This will help!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXLSRKeL7KwM"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLSRKeL7KwM",
            "id": "37i9dQZF1DWXLSRKeL7KwM",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a46a02f3aaeccdaa10eba231",
                "width": null
              }
            ],
            "name": "Energy Booster: Country",
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
            "snapshot_id": "MTYzMDQ2NDMwNCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLSRKeL7KwM/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXLSRKeL7KwM"
          },
          {
            "collaborative": false,
            "description": "The most memorable country hits from the 2010's. Cover: Miranda Lambert, Luke Bryan and Jason Aldean.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXdiK4WAVRUW"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXdiK4WAVRUW",
            "id": "37i9dQZF1DWXdiK4WAVRUW",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e5a3bb0260aaf546544ca88b",
                "width": null
              }
            ],
            "name": "2010s Country",
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
            "snapshot_id": "MTYzMDQ2NDMwMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXdiK4WAVRUW/tracks",
              "total": 200
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXdiK4WAVRUW"
          },
          {
            "collaborative": false,
            "description": "Country's Top 50 most played songs—in the world. Updated weekly. Formerly Nashville's Worldwide Hot 50.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7aUUBCKwo4Y"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7aUUBCKwo4Y",
            "id": "37i9dQZF1DX7aUUBCKwo4Y",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030fb6fbf815c9b2586773f942",
                "width": null
              }
            ],
            "name": "Country Worldwide Hot 50",
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
            "snapshot_id": "MTYyOTg4OTIwMCwwMDAwMDBiOTAwMDAwMTdiN2NmNzgwMGUwMDAwMDE3YWM5ODU5NTg0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7aUUBCKwo4Y/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7aUUBCKwo4Y"
          },
          {
            "collaborative": false,
            "description": "Spotify Fan Favorites from the last few years.  Artist: Billy Currington",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYnwbYQ5HnZU"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYnwbYQ5HnZU",
            "id": "37i9dQZF1DWYnwbYQ5HnZU",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bfebccbe6476372195b35d88",
                "width": null
              }
            ],
            "name": "Country Gold",
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
            "snapshot_id": "MTYyNzc5MDQwMCwwMDAwMDEwMDAwMDAwMTdhZmZkZTVhYTQwMDAwMDE3YWY3ZmE4NTQ0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYnwbYQ5HnZU/tracks",
              "total": 74
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYnwbYQ5HnZU"
          },
          {
            "collaborative": false,
            "description": "Nothing but beautiful country love songs. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8WMG8VPSOJC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8WMG8VPSOJC",
            "id": "37i9dQZF1DX8WMG8VPSOJC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031416f67f937b9ee33b3753e2",
                "width": null
              }
            ],
            "name": "Country Kind of Love",
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
            "snapshot_id": "MTYzMDQ2NDMwNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8WMG8VPSOJC/tracks",
              "total": 85
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8WMG8VPSOJC"
          },
          {
            "collaborative": false,
            "description": "The top country hits of the week across America! Cover: Miranda Lambert\n",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaJXCbmtHVHV"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaJXCbmtHVHV",
            "id": "37i9dQZF1DXaJXCbmtHVHV",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038e11476880300fd6d8880fe5",
                "width": null
              }
            ],
            "name": "Big Country",
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
            "snapshot_id": "MTYzMDM0MDY4MCwwMDAwMDA4YTAwMDAwMTdiOTdlMDhkMDkwMDAwMDE3YWY4MGYwYmQw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaJXCbmtHVHV/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaJXCbmtHVHV"
          },
          {
            "collaborative": false,
            "description": "A compilation of the all-time biggest hits in Country Music.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZBCPUIUs2iR"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZBCPUIUs2iR",
            "id": "37i9dQZF1DWZBCPUIUs2iR",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000321252477d94bc3cffbbb189f",
                "width": null
              }
            ],
            "name": "Country's Greatest Hits",
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
            "snapshot_id": "MTYxODk3NDE0OCwwMDAwMDAwODAwMDAwMTc4ZjI2MTA4NzAwMDAwMDE3OGYyNjA5ZmNh",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZBCPUIUs2iR/tracks",
              "total": 99
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZBCPUIUs2iR"
          },
          {
            "collaborative": false,
            "description": "A fun library of country hits to pass on to the next generation!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVFzWmxRnRJH"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVFzWmxRnRJH",
            "id": "37i9dQZF1DWVFzWmxRnRJH",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bd9929112e8499738fa598cf",
                "width": null
              }
            ],
            "name": "Raised on Country",
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
            "snapshot_id": "MTYzMDQ2NDMwMywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVFzWmxRnRJH/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVFzWmxRnRJH"
          },
          {
            "collaborative": false,
            "description": "The decade when New Traditional artists like George Strait, Reba McEntire, and Randy Travis dominated the Country scene.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6RCydf9ytsj"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6RCydf9ytsj",
            "id": "37i9dQZF1DX6RCydf9ytsj",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000397ccc4082777009c87e97202",
                "width": null
              }
            ],
            "name": "80s Country",
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
            "snapshot_id": "MTYzMDQ2NDMwNCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6RCydf9ytsj/tracks",
              "total": 163
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6RCydf9ytsj"
          },
          {
            "collaborative": false,
            "description": "Country Music that ROCKS!!  \nCover:  Jackson Dean",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWH0izG4erma"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWH0izG4erma",
            "id": "37i9dQZF1DWWH0izG4erma",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003aab8661b512185306ee01f9e",
                "width": null
              }
            ],
            "name": "Country Rocks",
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
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDA5MTAwMDAwMTdiODVjNDljZTcwMDAwMDE3YWY3ZmZmMDQy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWH0izG4erma/tracks",
              "total": 106
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWH0izG4erma"
          },
          {
            "collaborative": false,
            "description": "Recent tracks from the Hot Country playlist that are still smokin'.  Cover: Jordan Davis",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6rVyqO2FaN8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6rVyqO2FaN8",
            "id": "37i9dQZF1DX6rVyqO2FaN8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003eb4d4d317e698cafac33d375",
                "width": null
              }
            ],
            "name": "Still Hot",
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
            "snapshot_id": "MTYzMDAzNzE2MCwwMDAwMDA4MTAwMDAwMTdiODVjOTMwOWMwMDAwMDE3YWY4MTMyZGJi",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6rVyqO2FaN8/tracks",
              "total": 56
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6rVyqO2FaN8"
          },
          {
            "collaborative": false,
            "description": "Top trending new and recent tracks from the last few weeks.  Cover: Callista Clark",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWW7RgkOJG32Y"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWW7RgkOJG32Y",
            "id": "37i9dQZF1DWW7RgkOJG32Y",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000366747e5fa67c5927803b1d40",
                "width": null
              }
            ],
            "name": "Breakout Country",
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
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDFlZDAwMDAwMTdiODVjNDljYzMwMDAwMDE3YWY4MGM1MmVk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWW7RgkOJG32Y/tracks",
              "total": 76
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWW7RgkOJG32Y"
          }
        ],
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
        "playlist": [
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
            "description": "New adventures in rock start here. Cover: Ruby Waters",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX34lqLRYWFxq"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX34lqLRYWFxq",
            "id": "37i9dQZF1DX34lqLRYWFxq",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003738d5bcf2464ed5a806ac02c",
                "width": null
              }
            ],
            "name": "Ready to Rock",
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
            "snapshot_id": "MTYzMDA5Mzg5MCwwMDAwMDFhZTAwMDAwMTdiODkyYWQ0ZjQwMDAwMDE3Yjg1YTgxYTg0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX34lqLRYWFxq/tracks",
              "total": 97
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX34lqLRYWFxq"
          },
          {
            "collaborative": false,
            "description": "Rock legends and epic songs spanning decades that continue to inspire generations.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXRqgorJj26U",
            "id": "37i9dQZF1DWXRqgorJj26U",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000325910874e56fc06b5f5ad4a1",
                "width": null
              }
            ],
            "name": "Rock Classics",
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
            "snapshot_id": "MTYzMDAwMDE4OSwwMDAwMDA1ZTAwMDAwMTdiODM5NTExM2MwMDAwMDE3YjgzOTFmNjkz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXRqgorJj26U/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXRqgorJj26U"
          },
          {
            "collaborative": false,
            "description": "Celebrating 30 years of Ten by Pearl Jam. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1rVvRgjX59F"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1rVvRgjX59F",
            "id": "37i9dQZF1DX1rVvRgjX59F",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000360464e254b19264afa11cbd7",
                "width": null
              }
            ],
            "name": "90s Rock Anthems",
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
            "snapshot_id": "MTYzMDAxNTMyMCwwMDAwMDAxZjAwMDAwMTdiODQ3YmYwNTgwMDAwMDE3YjExNWY1YTAx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1rVvRgjX59F/tracks",
              "total": 152
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1rVvRgjX59F"
          },
          {
            "collaborative": false,
            "description": "It’s smooth sailing ahead. Ride the wave of these smooth classics.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXb3m918yXHxA"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXb3m918yXHxA",
            "id": "37i9dQZF1DXb3m918yXHxA",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035d73b2a5cb261ee9c43d9ec7",
                "width": null
              }
            ],
            "name": "Yacht Rock",
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
            "snapshot_id": "MTYyNDU3MDQwMSwwMDAwMDAxZjAwMDAwMTdhM2ZmMTExMjMwMDAwMDE3NTQyYzc2YmUx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXb3m918yXHxA/tracks",
              "total": 165
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXb3m918yXHxA"
          },
          {
            "collaborative": false,
            "description": "The great masterpieces of the genre.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6xOPeSOGone"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6xOPeSOGone",
            "id": "37i9dQZF1DX6xOPeSOGone",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038f7cea2939220d6a326924fa",
                "width": null
              }
            ],
            "name": "Soft Rock",
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
            "snapshot_id": "MTYzMDQ2NDM0NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6xOPeSOGone/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6xOPeSOGone"
          },
          {
            "collaborative": false,
            "description": "These songs rocked the 80s. Cover: AC/DC.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1spT6G94GFC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1spT6G94GFC",
            "id": "37i9dQZF1DX1spT6G94GFC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ce8fedf893dfb22cf1bf7d96",
                "width": null
              }
            ],
            "name": "80s Rock Anthems",
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
            "snapshot_id": "MTYyNjQ0MTAyMCwwMDAwMDAwZDAwMDAwMTdhYWY3MDc1Y2YwMDAwMDE3NTQ1MDA5ZWMw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1spT6G94GFC/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1spT6G94GFC"
          },
          {
            "collaborative": false,
            "description": "These songs rocked the 00s. Cover: Linkin Park",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3oM43CtKnRV"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3oM43CtKnRV",
            "id": "37i9dQZF1DX3oM43CtKnRV",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032cdb0982697cc0ae43b1b5b6",
                "width": null
              }
            ],
            "name": "00s Rock Anthems",
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
            "snapshot_id": "MTYxNzgyNjkxNywwMDAwMDAxMjAwMDAwMTc4YWRmZmFjMmIwMDAwMDE3MGM0YzVhMDY1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3oM43CtKnRV/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3oM43CtKnRV"
          },
          {
            "collaborative": false,
            "description": "These songs rocked the 70s. Cover: <a href=\"spotify:artist:1dfeR4HaWDbWqFHLkxsg1d\">Queen</a>",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWwzidNQX6jx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWwzidNQX6jx",
            "id": "37i9dQZF1DWWwzidNQX6jx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003561ca573ea307c49bacadf06",
                "width": null
              }
            ],
            "name": "70s Rock Anthems",
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
            "snapshot_id": "MTYzMDQ2NDM3OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWwzidNQX6jx/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWwzidNQX6jx"
          },
          {
            "collaborative": false,
            "description": "Third Eye Blind-ed by the 90s / Cover: Third Eye Blind",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3YMp9n8fkNx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3YMp9n8fkNx",
            "id": "37i9dQZF1DX3YMp9n8fkNx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f1a9cfa02fd2a05ccf4fc89e",
                "width": null
              }
            ],
            "name": "90s Pop Rock Essentials",
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
            "snapshot_id": "MTYyNzA2MDkzMywwMDAwMDAyMzAwMDAwMTdhZDQ2Mzk1NTEwMDAwMDE2ZDE1MzMwNDY1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3YMp9n8fkNx/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3YMp9n8fkNx"
          },
          {
            "collaborative": false,
            "description": "Soak up these laid-back jams. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX83I5je4W4rP"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX83I5je4W4rP",
            "id": "37i9dQZF1DX83I5je4W4rP",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034ea7333e8967dd2b1f368e42",
                "width": null
              }
            ],
            "name": "Beach Vibes",
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
            "snapshot_id": "MTYzMDQ2NDM2NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX83I5je4W4rP/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX83I5je4W4rP"
          },
          {
            "collaborative": false,
            "description": "Great songs by indisputable music legends.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWGFQLoP9qlv"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWGFQLoP9qlv",
            "id": "37i9dQZF1DWWGFQLoP9qlv",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a3aa0684281d8c86c6d143a5",
                "width": null
              }
            ],
            "name": "Legendary",
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
            "snapshot_id": "MTYzMDQ2NDM3OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWGFQLoP9qlv/tracks",
              "total": 70
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWGFQLoP9qlv"
          },
          {
            "collaborative": false,
            "description": "New music from Imagine Dragons along with the top Alternative songs right now",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVqJMsgEN0F4"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVqJMsgEN0F4",
            "id": "37i9dQZF1DWVqJMsgEN0F4",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031741e66991317b3345fbd3f6",
                "width": null
              }
            ],
            "name": "Alt NOW",
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
            "snapshot_id": "MTYzMDM0NzQ0NCwwMDAwMDA0ZTAwMDAwMTdiOTg0N2MxNjMwMDAwMDE3YTYzOTNkMTk3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVqJMsgEN0F4/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVqJMsgEN0F4"
          },
          {
            "collaborative": false,
            "description": "Country Music that ROCKS!!  \nCover:  Jackson Dean",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWH0izG4erma"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWH0izG4erma",
            "id": "37i9dQZF1DWWH0izG4erma",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003aab8661b512185306ee01f9e",
                "width": null
              }
            ],
            "name": "Country Rocks",
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
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDA5MTAwMDAwMTdiODVjNDljZTcwMDAwMDE3YWY3ZmZmMDQy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWH0izG4erma/tracks",
              "total": 106
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWH0izG4erma"
          },
          {
            "collaborative": false,
            "description": "The greatest Alternative Rock songs through the decades. Cover: The Killers",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9GRpeH4CL0S"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9GRpeH4CL0S",
            "id": "37i9dQZF1DX9GRpeH4CL0S",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035a48f12dd6aa5eac047d1d1b",
                "width": null
              }
            ],
            "name": "Essential Alternative",
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
            "snapshot_id": "MTYzMDQ2NDM0NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9GRpeH4CL0S/tracks",
              "total": 225
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9GRpeH4CL0S"
          },
          {
            "collaborative": false,
            "description": "The recent hits that keep on rocking your world. Cover: The Glorious Sons",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4HwNAFq2CF0"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4HwNAFq2CF0",
            "id": "37i9dQZF1DX4HwNAFq2CF0",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000381abac7b1eadf8f286f95b08",
                "width": null
              }
            ],
            "name": "Rock Favourites",
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
            "snapshot_id": "MTYzMDQ2NDM2MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4HwNAFq2CF0/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4HwNAFq2CF0"
          },
          {
            "collaborative": false,
            "description": "Please stand for your personal anthems.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXasneILDRM7B"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXasneILDRM7B",
            "id": "37i9dQZF1DXasneILDRM7B",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000368256d98477ad125a3388dff",
                "width": null
              }
            ],
            "name": "Pure Pop Punk",
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
            "snapshot_id": "MTYzMDQ2NDM3OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXasneILDRM7B/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXasneILDRM7B"
          },
          {
            "collaborative": false,
            "description": "Various sounds, various decades, but with 1 thing in common: it's pure rock & roll.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWRktbhJiuqL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWRktbhJiuqL",
            "id": "37i9dQZF1DWWRktbhJiuqL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034eb58a097da59ad442e26bf2",
                "width": null
              }
            ],
            "name": "Pure Rock & Roll",
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
            "snapshot_id": "MTYzMDQ2NDM0NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWRktbhJiuqL/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWRktbhJiuqL"
          },
          {
            "collaborative": false,
            "description": "All the standard emo anthems. Cover: Gerard Way",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9wa6XirBPv8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9wa6XirBPv8",
            "id": "37i9dQZF1DX9wa6XirBPv8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037c6fd6e38de56e19e85379b7",
                "width": null
              }
            ],
            "name": "Emo Forever",
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
            "snapshot_id": "MTU5OTU4ODk5MSwwMDAwMDAzZDAwMDAwMTc0NmVlZjAwY2EwMDAwMDE3MDdlNjAwMzhm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9wa6XirBPv8/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9wa6XirBPv8"
          },
          {
            "collaborative": false,
            "description": "Rock this list to help you rock that last rep. Gainz.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5OUjSS1OMgV"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5OUjSS1OMgV",
            "id": "37i9dQZF1DX5OUjSS1OMgV",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000382894e9aedb86fd9f2f724db",
                "width": null
              }
            ],
            "name": "One More Rep",
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
            "snapshot_id": "MTYxMzcxMDgwMCwwMDAwMDNkYjAwMDAwMTc3YjhhOGI1MGEwMDAwMDE2ZDE1M2FjZDk5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5OUjSS1OMgV/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5OUjSS1OMgV"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "Today's top Latin hits are right here, on ¡Viva Latino! Cover: Nicky Jam",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX10zKzsJ2jva"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX10zKzsJ2jva",
            "id": "37i9dQZF1DX10zKzsJ2jva",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000359bdd3b905220d3eddf43c78",
                "width": null
              }
            ],
            "name": "¡Viva Latino!",
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
            "snapshot_id": "MTYzMDQ2NDQyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX10zKzsJ2jva/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX10zKzsJ2jva"
          },
          {
            "collaborative": false,
            "description": "Reggaeton hits from Feid and more! Check out  <a href=\"https://open.spotify.com/show/6OB6xOp1sWazXMMa2z53CZ?si=ma-2qHVeRZuwfGwbxin6Zg&dl_branch=1\"> \"LOUD: The History of Reggaeton\" podcast </a>, only on Spotify.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWY7IeIP1cdjF"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWY7IeIP1cdjF",
            "id": "37i9dQZF1DWY7IeIP1cdjF",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030845543219cf57d8e0c06c16",
                "width": null
              }
            ],
            "name": "Baila Reggaeton",
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
            "snapshot_id": "MTYzMDMzNTAyOCwwMDAwMDU0ZTAwMDAwMTdiOTc4YTRjZTEwMDAwMDE3YjdkOWM2NDAy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWY7IeIP1cdjF/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWY7IeIP1cdjF"
          },
          {
            "collaborative": false,
            "description": "All-new releases by Latin artists! \nCover: Marc Anthony",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1hVRardJ30X"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1hVRardJ30X",
            "id": "37i9dQZF1DX1hVRardJ30X",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ec68390ad7c1e89ce3215694",
                "width": null
              }
            ],
            "name": "New Music Friday Latin",
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
            "snapshot_id": "MTYzMDAzNjgwMCwwMDAwMDMwNDAwMDAwMTdiODVjM2IzMjEwMDAwMDE3Yjg0MDkzOWQ1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1hVRardJ30X/tracks",
              "total": 66
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1hVRardJ30X"
          },
          {
            "collaborative": false,
            "description": "Los éxitos del pop latino featuring Camilo & Selena Gomez. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSpF87bP6JSF"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSpF87bP6JSF",
            "id": "37i9dQZF1DWSpF87bP6JSF",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bbcd9bac76a5125c3ac930fc",
                "width": null
              }
            ],
            "name": "La Lista Pop",
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
            "snapshot_id": "MTYzMDAyMjQwMCwwMDAwMDA1ZDAwMDAwMTdiODRlN2Y4OTIwMDAwMDE3Yjc4YzRjZTY2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSpF87bP6JSF/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSpF87bP6JSF"
          },
          {
            "collaborative": false,
            "description": "Regional Mexican hits! The playlist sin fronteras. Cover: Aldo Trujillo, Polo Gonzalez",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXb0COFso7q0D"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXb0COFso7q0D",
            "id": "37i9dQZF1DXb0COFso7q0D",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ff638086d6bcfa091db9141d",
                "width": null
              }
            ],
            "name": "Los Que Mandan",
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
            "snapshot_id": "MTYzMDQ2NDQwNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXb0COFso7q0D/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXb0COFso7q0D"
          },
          {
            "collaborative": false,
            "description": "Your favorite soon to be hits. Cover: Piso 21",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1QnNyJOBQBv"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1QnNyJOBQBv",
            "id": "37i9dQZF1DX1QnNyJOBQBv",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032b8e878d4edeacaf097947f2",
                "width": null
              }
            ],
            "name": "Latin Pop Today",
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
            "snapshot_id": "MTYzMDM0OTIwNywwMDAwMDE2NDAwMDAwMTdiOTg2MmE3YzIwMDAwMDE3YjdlMjNmYTE2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1QnNyJOBQBv/tracks",
              "total": 70
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1QnNyJOBQBv"
          },
          {
            "collaborative": false,
            "description": "The hottest Latin hits in the US! Cover:\nJ Balvin",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4oUPBOaEkL6"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4oUPBOaEkL6",
            "id": "37i9dQZF1DX4oUPBOaEkL6",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e62f65de52cc01a3a01d35ed",
                "width": null
              }
            ],
            "name": "Éxitos USA",
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
            "snapshot_id": "MTYzMDA2NTg0OSwwMDAwMDEzODAwMDAwMTdiODc3ZWY0MjUwMDAwMDE3YjExZmYxNjg1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4oUPBOaEkL6/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4oUPBOaEkL6"
          },
          {
            "collaborative": false,
            "description": "De aquí y de allá. A mixture of sounds and artists. Cover: J Balvin, Tokischa\n",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7qRKBHjmYIE"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7qRKBHjmYIE",
            "id": "37i9dQZF1DX7qRKBHjmYIE",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000342a98cff9368f2830074bdc9",
                "width": null
              }
            ],
            "name": "Mixto",
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
            "snapshot_id": "MTYzMDQ2NDQyMSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7qRKBHjmYIE/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7qRKBHjmYIE"
          },
          {
            "collaborative": false,
            "description": "Fresh Latin music by Indie and Label artists every Wednesday. Música nueva todos los miércoles. Cover: Rorro",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXagUeYbNSnOA"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXagUeYbNSnOA",
            "id": "37i9dQZF1DXagUeYbNSnOA",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003444b7cf2efce27728b95881b",
                "width": null
              }
            ],
            "name": "Fresh Finds: Latin",
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
            "snapshot_id": "MTYzMDQ2NDQyMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXagUeYbNSnOA/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXagUeYbNSnOA"
          },
          {
            "collaborative": false,
            "description": "Una selección de R&B Latino para tus oídos. The hottest R&B Latin tracks! Cover: Mario Puglia",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2MJVTOdWtbm"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2MJVTOdWtbm",
            "id": "37i9dQZF1DX2MJVTOdWtbm",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000387a3f5163b4eed558447b1c9",
                "width": null
              }
            ],
            "name": "Are & Be Latin",
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
            "snapshot_id": "MTYzMDQ2NDQ1NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2MJVTOdWtbm/tracks",
              "total": 85
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2MJVTOdWtbm"
          },
          {
            "collaborative": false,
            "description": "Miami me lo confirmó featuring Nicky Jam.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2gAVR9iO3gH"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2gAVR9iO3gH",
            "id": "37i9dQZF1DX2gAVR9iO3gH",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031174a0b7280560f626a3aed3",
                "width": null
              }
            ],
            "name": "Rompiendo: Miami",
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
            "snapshot_id": "MTYzMDM0OTM0NiwwMDAwMDAxNzAwMDAwMTdiOTg2NGM1ZTUwMDAwMDE3YWVmNTdhMDAx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2gAVR9iO3gH/tracks",
              "total": 63
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2gAVR9iO3gH"
          },
          {
            "collaborative": false,
            "description": "Los temas más virales que debes conocer. \nThe Latin viral tracks you'll wanna listen to.\nCover: Manuel Turizo, TINI",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5y71ufjoyXC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5y71ufjoyXC",
            "id": "37i9dQZF1DX5y71ufjoyXC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003deb0afed02131ba4ddd0d20d",
                "width": null
              }
            ],
            "name": "Viral Latino",
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
            "snapshot_id": "MTYyOTk5OTA3MCwwMDAwMDExYTAwMDAwMTdiODM4M2ZkZWQwMDAwMDE3YjVlYzM3ZGQ4",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5y71ufjoyXC/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5y71ufjoyXC"
          },
          {
            "collaborative": false,
            "description": "The Latin hits of tomorrow are on Spotify today.  Cover: Maria Becerra",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZoF06RIo9el"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZoF06RIo9el",
            "id": "37i9dQZF1DWZoF06RIo9el",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032ff90b476561a0285871c456",
                "width": null
              }
            ],
            "name": "Future Hits: Latin",
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
            "snapshot_id": "MTYzMDQ2NDQyMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZoF06RIo9el/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZoF06RIo9el"
          },
          {
            "collaborative": false,
            "description": "The most exciting new Latin artists and tracks, handpicked by our curators featuring Grupo Diez 4tro.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbSwbJpH6lAw"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbSwbJpH6lAw",
            "id": "37i9dQZF1DXbSwbJpH6lAw",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032c7c3c7ee6ccd6e1e62f3047",
                "width": null
              }
            ],
            "name": "Radar US Latin",
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
            "snapshot_id": "MTYyNzkxMzMyOCwwMDAwMDAxZjAwMDAwMTdiMDczMjE3NzAwMDAwMDE3YjA1OWRmYTUw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbSwbJpH6lAw/tracks",
              "total": 30
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbSwbJpH6lAw"
          },
          {
            "collaborative": false,
            "description": "The Reggaeton hits of yesterday and today all in one place! ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1ziQH0F90kL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1ziQH0F90kL",
            "id": "37i9dQZF1DX1ziQH0F90kL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003346cbd33ff24ed3511353695",
                "width": null
              }
            ],
            "name": "Now & Then Reggaeton",
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
            "snapshot_id": "MTYzMDQ2NDQyNSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1ziQH0F90kL/tracks",
              "total": 90
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1ziQH0F90kL"
          },
          {
            "collaborative": false,
            "description": "Lo último y lo mejor de la salsa. Cover: Luis Figueroa",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4qKWGR9z0LI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4qKWGR9z0LI",
            "id": "37i9dQZF1DX4qKWGR9z0LI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c895d9a1d05801aaffe97c71",
                "width": null
              }
            ],
            "name": "Salsa Nation",
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
            "snapshot_id": "MTYzMDQ2NDQwNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4qKWGR9z0LI/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4qKWGR9z0LI"
          },
          {
            "collaborative": false,
            "description": "Éxitos románticos y eternos. Foto: Emmanuel",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7Qo2zphj7u3"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7Qo2zphj7u3",
            "id": "37i9dQZF1DX7Qo2zphj7u3",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bac64a07cfcbf5b62ea59470",
                "width": null
              }
            ],
            "name": "Hits Románticos",
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
            "snapshot_id": "MTYzMDQ2NDQyMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7Qo2zphj7u3/tracks",
              "total": 250
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7Qo2zphj7u3"
          },
          {
            "collaborative": false,
            "description": "Latin superstars like you've never heard before.  Cover: Juanes, Anitta, and Prince Royce",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSDautEwAKZB"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSDautEwAKZB",
            "id": "37i9dQZF1DWSDautEwAKZB",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000318d3d3898529a084e75c24f9",
                "width": null
              }
            ],
            "name": "Spotify Singles: Latino",
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
            "snapshot_id": "MTYyOTkwNDg1OCwwMDAwMDAwODAwMDAwMTdiN2RlNjZjZTUwMDAwMDE3NDMwYTI0NTg2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSDautEwAKZB/tracks",
              "total": 32
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSDautEwAKZB"
          },
          {
            "collaborative": false,
            "description": "¡Muévete al ritmo de esta cumbia!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbUMEWUyV9JB"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbUMEWUyV9JB",
            "id": "37i9dQZF1DXbUMEWUyV9JB",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033d121ce193312b5e19b43198",
                "width": null
              }
            ],
            "name": "Super Cumbias",
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
            "snapshot_id": "MTYzMDQ2NDQwNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbUMEWUyV9JB/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbUMEWUyV9JB"
          },
          {
            "collaborative": false,
            "description": "These hits were made to stay! Revive los éxitos de los últimos meses aquí.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbLMw3ry7d7k"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbLMw3ry7d7k",
            "id": "37i9dQZF1DXbLMw3ry7d7k",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032181def5b5f145253188ac87",
                "width": null
              }
            ],
            "name": "Latin Hit Mix",
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
            "snapshot_id": "MTYzMDQ2NDQyMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbLMw3ry7d7k/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbLMw3ry7d7k"
          }
        ],
    
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
        "playlist": [
          {
            "collaborative": false,
            "description": "Get your beast mode on!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX76Wlfdnj7AP",
            "id": "37i9dQZF1DX76Wlfdnj7AP",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039249b35f23fb596b6f006a15",
                "width": null
              }
            ],
            "name": "Beast Mode",
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
            "snapshot_id": "MTYzMDQ2NDU3MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX76Wlfdnj7AP/tracks",
              "total": 200
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX76Wlfdnj7AP"
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
            "snapshot_id": "MTYzMDQ2NDUyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9oh43oAzkyx/tracks",
              "total": 76
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9oh43oAzkyx"
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
            "snapshot_id": "MTYzMDQ2NDUyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5gQonLbZD9s/tracks",
              "total": 60
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5gQonLbZD9s"
          },
          {
            "collaborative": false,
            "description": "Fourth quarter, two minutes left .. get locked in",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTl4y3vgJOXW"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTl4y3vgJOXW",
            "id": "37i9dQZF1DWTl4y3vgJOXW",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038902742c4dcad187aa82bbd5",
                "width": null
              }
            ],
            "name": "Locked In",
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTl4y3vgJOXW/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTl4y3vgJOXW"
          },
          {
            "collaborative": false,
            "description": "Pop hits to keep your workout fresh.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX70RN3TfWWJh",
            "id": "37i9dQZF1DX70RN3TfWWJh",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039cc6891dbc9b7292361bd673",
                "width": null
              }
            ],
            "name": "Workout",
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
            "snapshot_id": "MTYzMDQ2NDUyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX70RN3TfWWJh/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX70RN3TfWWJh"
          },
          {
            "collaborative": false,
            "description": "Big rap for big reps. You got this.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX76t638V6CA8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX76t638V6CA8",
            "id": "37i9dQZF1DX76t638V6CA8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030b5dffb6f645059b157fc77b",
                "width": null
              }
            ],
            "name": "Rap Workout",
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX76t638V6CA8/tracks",
              "total": 59
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX76t638V6CA8"
          },
          {
            "collaborative": false,
            "description": "Uplifting and energetic music that helps you stay motivated.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdxcBWuJkbcy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdxcBWuJkbcy",
            "id": "37i9dQZF1DXdxcBWuJkbcy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a088a35ef6e638c42f88deda",
                "width": null
              }
            ],
            "name": "Motivation Mix",
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
            "snapshot_id": "MTYzMDQ2NDUyOCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdxcBWuJkbcy/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdxcBWuJkbcy"
          },
          {
            "collaborative": false,
            "description": "For whatever activity you do that may need a punch of intensity!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUVpAXiEPK8P"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUVpAXiEPK8P",
            "id": "37i9dQZF1DWUVpAXiEPK8P",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035b9afc20f73de2953ea450f7",
                "width": null
              }
            ],
            "name": "Power Workout",
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUVpAXiEPK8P/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUVpAXiEPK8P"
          },
          {
            "collaborative": false,
            "description": "Aggressive trap and bass for the <a href=\"spotify:genre:edm_dance\">gym</a>.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4eRPd9frC1m"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4eRPd9frC1m",
            "id": "37i9dQZF1DX4eRPd9frC1m",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003122921a072ad2ca9ce90a456",
                "width": null
              }
            ],
            "name": "Hype",
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
            "snapshot_id": "MTYzMDQ2NDUyNSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4eRPd9frC1m/tracks",
              "total": 181
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4eRPd9frC1m"
          },
          {
            "collaborative": false,
            "description": "Need to break a sweat? Turn these jams up and stay motivated!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUSyphfcc6aL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUSyphfcc6aL",
            "id": "37i9dQZF1DWUSyphfcc6aL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000344974902f0d4e2f4613bc3b0",
                "width": null
              }
            ],
            "name": "Workout Beats",
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUSyphfcc6aL/tracks",
              "total": 70
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUSyphfcc6aL"
          },
          {
            "collaborative": false,
            "description": "If your workout doubles as an outlet for your aggression, this is the playlist for you.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXe6bgV3TmZOL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXe6bgV3TmZOL",
            "id": "37i9dQZF1DXe6bgV3TmZOL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003929e39d3550da276515b31f2",
                "width": null
              }
            ],
            "name": "Adrenaline Workout",
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXe6bgV3TmZOL/tracks",
              "total": 120
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXe6bgV3TmZOL"
          },
          {
            "collaborative": false,
            "description": "Nothing but anthems - for an extra rep, an extra set, an extra mile...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYNSm3Z3MxiM"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYNSm3Z3MxiM",
            "id": "37i9dQZF1DWYNSm3Z3MxiM",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000374e332932155604ae4e59d89",
                "width": null
              }
            ],
            "name": "Classic Rock Workout",
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
            "snapshot_id": "MTYzMDQ2NDUyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYNSm3Z3MxiM/tracks",
              "total": 65
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYNSm3Z3MxiM"
          },
          {
            "collaborative": false,
            "description": "Get your body right with this workout twerkout",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0HRj9P7NxeE"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0HRj9P7NxeE",
            "id": "37i9dQZF1DX0HRj9P7NxeE",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e3c40ab7c0d150be536f492e",
                "width": null
              }
            ],
            "name": "Workout Twerkout",
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
            "snapshot_id": "MTYzMDM1MTc5NSwwMDAwMDQ2MjAwMDAwMTdiOTg4YTI2NjkwMDAwMDE3YTVlZWJhNGQw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0HRj9P7NxeE/tracks",
              "total": 51
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0HRj9P7NxeE"
          },
          {
            "collaborative": false,
            "description": "The best pop and hip hop tracks to celebrate your workout. You can do it!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTDafB3skWPN"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTDafB3skWPN",
            "id": "37i9dQZF1DWTDafB3skWPN",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039e20b759389b17dad21afa17",
                "width": null
              }
            ],
            "name": "Feeling Accomplished",
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
            "snapshot_id": "MTYzMDQ2NDUyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTDafB3skWPN/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTDafB3skWPN"
          },
          {
            "collaborative": false,
            "description": "Upbeat dance pop to keep your heart pumping.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSJHnPb1f0X3"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSJHnPb1f0X3",
            "id": "37i9dQZF1DWSJHnPb1f0X3",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003eee1365954b35d0def7bb1b5",
                "width": null
              }
            ],
            "name": "Cardio",
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
            "snapshot_id": "MTYzMDQ2NDUyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSJHnPb1f0X3/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSJHnPb1f0X3"
          },
          {
            "collaborative": false,
            "description": "Throw it back to the biggest, best hits of the 2000's.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8CwbNGNKurt"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8CwbNGNKurt",
            "id": "37i9dQZF1DX8CwbNGNKurt",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033457ebc8f98b67b6df4c4f10",
                "width": null
              }
            ],
            "name": "Throwback Workout",
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8CwbNGNKurt/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8CwbNGNKurt"
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8dTWjpijlub/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8dTWjpijlub"
          },
          {
            "collaborative": false,
            "description": "24 songs dedicated to the Mamba & Mambacita. R.I.P. Kobe & Gianna Bryant.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaitacWUJMPH"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaitacWUJMPH",
            "id": "37i9dQZF1DXaitacWUJMPH",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030a1c0a9b353861ab36472d91",
                "width": null
              }
            ],
            "name": "2 . 24",
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaitacWUJMPH/tracks",
              "total": 24
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaitacWUJMPH"
          },
          {
            "collaborative": false,
            "description": "Workout to K-Pop? Count me in! (Cover: SOMI) (신나는 케이팝 댄스 음악과 함께 운동을 즐겨보세요!)",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3ZeFHRhhi7Y"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3ZeFHRhhi7Y",
            "id": "37i9dQZF1DX3ZeFHRhhi7Y",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003dce09358b2892d450085f583",
                "width": null
              }
            ],
            "name": "WOR K  OUT",
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
            "snapshot_id": "MTYzMDQ2NDUyNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3ZeFHRhhi7Y/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3ZeFHRhhi7Y"
          },
          {
            "collaborative": false,
            "description": "Put a spring in your step with these mood boosting tracks.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXadOVCgGhS7j"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXadOVCgGhS7j",
            "id": "37i9dQZF1DXadOVCgGhS7j",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ace81b7196d88005082b0f72",
                "width": null
              }
            ],
            "name": "Fun Run",
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
            "snapshot_id": "MTYzMDQ2NDUyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXadOVCgGhS7j/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXadOVCgGhS7j"
          }
        ],
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
        "playlist": [
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
            "description": "Elevate your aura with the latest in R&B. Cover: a l l i e",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2PG4mbkilf3"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2PG4mbkilf3",
            "id": "37i9dQZF1DX2PG4mbkilf3",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003189786334906d751f843ad30",
                "width": null
              }
            ],
            "name": "Mood Ring",
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
            "snapshot_id": "MTYzMDM0ODUyMiwwMDAwMDIwZTAwMDAwMTdiOTg1ODM0OGUwMDAwMDE3Yjg0OTgxNTEx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2PG4mbkilf3/tracks",
              "total": 98
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2PG4mbkilf3"
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
            "description": "The tracks you can put on repeat all day. Cover: PARTYNEXTDOOR",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7FY5ma9162x"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7FY5ma9162x",
            "id": "37i9dQZF1DX7FY5ma9162x",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003374c5477568731ecbeb0c5f7",
                "width": null
              }
            ],
            "name": "R&B Favourites",
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
            "snapshot_id": "MTYzMDQ2NDY2MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7FY5ma9162x/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7FY5ma9162x"
          },
          {
            "collaborative": false,
            "description": "Check out these throwback R&B jams from the first decade of the 21st century. Cover: Mariah Carey",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYmmr74INQlb"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYmmr74INQlb",
            "id": "37i9dQZF1DWYmmr74INQlb",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037a55a9d8930867b68d3a56e1",
                "width": null
              }
            ],
            "name": "I Love My '00s R&B",
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
            "snapshot_id": "MTYzMDQ2NDY2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYmmr74INQlb/tracks",
              "total": 40
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYmmr74INQlb"
          },
          {
            "collaborative": false,
            "description": "Feel good with this positively timeless playlist!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9XIFQuFvzM4"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9XIFQuFvzM4",
            "id": "37i9dQZF1DX9XIFQuFvzM4",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000313a02d059c0479e65a850267",
                "width": null
              }
            ],
            "name": "Feelin' Good",
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
            "snapshot_id": "MTYzMDQ2NDY0NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9XIFQuFvzM4/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9XIFQuFvzM4"
          },
          {
            "collaborative": false,
            "description": "The '90s had an amazing soundtrack. Let's reminisce with these R&B jams!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6VDO8a6cQME"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6VDO8a6cQME",
            "id": "37i9dQZF1DX6VDO8a6cQME",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034cc17e05fc5eea4742e323bf",
                "width": null
              }
            ],
            "name": "I Love My '90s R&B",
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
            "snapshot_id": "MTYzMDQ2NDY2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6VDO8a6cQME/tracks",
              "total": 45
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6VDO8a6cQME"
          },
          {
            "collaborative": false,
            "description": "The most essential R&B songs from the 2010s. Cover: Beyonce",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXbttAJcbphz"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXbttAJcbphz",
            "id": "37i9dQZF1DWXbttAJcbphz",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000356ddc6690d7a79b27124de6f",
                "width": null
              }
            ],
            "name": "I Love My '10s R&B",
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
            "snapshot_id": "MTYzMDQ2NDY2MywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXbttAJcbphz/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXbttAJcbphz"
          },
          {
            "collaborative": false,
            "description": "Slow jams for the passionate.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0QKpU3cGsyb"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0QKpU3cGsyb",
            "id": "37i9dQZF1DX0QKpU3cGsyb",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039fec2373847cde79dcdba5b5",
                "width": null
              }
            ],
            "name": "Bedroom Jams",
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
            "snapshot_id": "MTYzMDEwOTY5NCwwMDAwMDQ3NzAwMDAwMTdiOGExYmY4YTQwMDAwMDE2ZDE1NTk4OWUy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0QKpU3cGsyb/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0QKpU3cGsyb"
          },
          {
            "collaborative": false,
            "description": "These progressive R&B and soul tracks can't be put in a box. Cover: Snoh Aalegra",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSfMe9z89s9B"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSfMe9z89s9B",
            "id": "37i9dQZF1DWSfMe9z89s9B",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000378b06fb5c0c904cc78774811",
                "width": null
              }
            ],
            "name": "Alternative R&B",
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
            "snapshot_id": "MTYzMDQ2NDY0NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSfMe9z89s9B/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSfMe9z89s9B"
          },
          {
            "collaborative": false,
            "description": "Chilled R&B jams for your most relaxed moods.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2UgsUIg75Vg"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2UgsUIg75Vg",
            "id": "37i9dQZF1DX2UgsUIg75Vg",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032b29b4a26e620ccd2bd2d2f8",
                "width": null
              }
            ],
            "name": "Chilled R&B",
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
            "snapshot_id": "MTYyOTQzMjA2MCwwMDAwMDRhNjAwMDAwMTdiNjFiODE4ZGIwMDAwMDE2ZDE1MjYzZjhm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2UgsUIg75Vg/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2UgsUIg75Vg"
          },
          {
            "collaborative": false,
            "description": "Where R&B from around the world comes to play with hip-hop & pop!   Cover: Lizzo & Cardi B",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4y8h9WqDPAE"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4y8h9WqDPAE",
            "id": "37i9dQZF1DX4y8h9WqDPAE",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032f12553bf2e4a99a01c33823",
                "width": null
              }
            ],
            "name": "Channel X",
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
            "snapshot_id": "MTYyODg4NjI5MCwwMDAwMDExOTAwMDAwMTdiNDEzMDUyMDkwMDAwMDE3YjNiZjAyZWM4",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4y8h9WqDPAE/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4y8h9WqDPAE"
          },
          {
            "collaborative": false,
            "description": "All the jams. Cover: Toni Braxton",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXnexX7CktaI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXnexX7CktaI",
            "id": "37i9dQZF1DWXnexX7CktaI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037be3edc726cd264f1cc828f4",
                "width": null
              }
            ],
            "name": "Gold Edition",
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
            "snapshot_id": "MTYzMDQ2NDY0NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXnexX7CktaI/tracks",
              "total": 40
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXnexX7CktaI"
          },
          {
            "collaborative": false,
            "description": "The newest, freshest R&B tunes.  Cover: Kiana Lede",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUzFXarNiofw"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUzFXarNiofw",
            "id": "37i9dQZF1DWUzFXarNiofw",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bfdc90a97bdf2eda89bb98c7",
                "width": null
              }
            ],
            "name": "New Jams",
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
            "snapshot_id": "MTYzMDAzNjgwMCwwMDAwMDUyZTAwMDAwMTdiODVjM2IyYmIwMDAwMDE3YWQwOWVmMzU1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUzFXarNiofw/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUzFXarNiofw"
          },
          {
            "collaborative": false,
            "description": "Sophisticated palates only. Curated by: James Harden",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSUur0QPPsOn"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSUur0QPPsOn",
            "id": "37i9dQZF1DWSUur0QPPsOn",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034da4da7852bf2c83b1bf492c",
                "width": null
              }
            ],
            "name": "Taste",
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
            "snapshot_id": "MTYzMDQ2NDY2MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSUur0QPPsOn/tracks",
              "total": 49
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSUur0QPPsOn"
          },
          {
            "collaborative": false,
            "description": "What we're gonna do right now is go back—back in time. Here are all your favorite '90s R&B slow jams!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVEvzGeX3eRs"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVEvzGeX3eRs",
            "id": "37i9dQZF1DWVEvzGeX3eRs",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039d574d6f27a73e668fee93ef",
                "width": null
              }
            ],
            "name": "'90s Baby Makers",
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
            "snapshot_id": "MTYzMDQ2NDY2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVEvzGeX3eRs/tracks",
              "total": 47
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVEvzGeX3eRs"
          },
          {
            "collaborative": false,
            "description": "Whether you're lounging at home or out with your friends, let this playlist provide your soundtrack.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX62Nfha2yFhL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX62Nfha2yFhL",
            "id": "37i9dQZF1DX62Nfha2yFhL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036e1034ebd7b7c86546c6acca",
                "width": null
              }
            ],
            "name": "Soul Lounge",
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
            "snapshot_id": "MTYxOTExNzU3MCwwMDAwMDA2NjAwMDAwMTc4ZmFlZDc4OWEwMDAwMDE2ZDE1MzJiMDAy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX62Nfha2yFhL/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX62Nfha2yFhL"
          },
          {
            "collaborative": false,
            "description": "For all the beautiful queens! Guest curated by Jennifer Hudson.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSIO2QWRavWZ"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSIO2QWRavWZ",
            "id": "37i9dQZF1DWSIO2QWRavWZ",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003cdcd1a7f36e110ce04c98f48",
                "width": null
              }
            ],
            "name": "Queen",
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
            "snapshot_id": "MTYzMDQ2NDYwMywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSIO2QWRavWZ/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSIO2QWRavWZ"
          },
          {
            "collaborative": false,
            "description": "A musical celebration of women in R&amp;B, from its earliest acts to its newest stars. Cover: Aretha Franklin",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1wNY9tfWQsS"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1wNY9tfWQsS",
            "id": "37i9dQZF1DX1wNY9tfWQsS",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034f713436a6f7ac34d35eb0a2",
                "width": null
              }
            ],
            "name": "Women of R&B",
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
            "snapshot_id": "MTYzMDQ2NDY2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1wNY9tfWQsS/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1wNY9tfWQsS"
          },
          {
            "collaborative": false,
            "description": "The tunes to ease you into your day.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaXDsfv6nvZ5"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaXDsfv6nvZ5",
            "id": "37i9dQZF1DXaXDsfv6nvZ5",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f2de418f550899021c7cabd0",
                "width": null
              }
            ],
            "name": "Soul Coffee",
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
            "snapshot_id": "MTYzMDQ2NDY0NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaXDsfv6nvZ5/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaXDsfv6nvZ5"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "Get happy with today's dose of feel-good songs!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3rxVfibe1L0",
            "id": "37i9dQZF1DX3rxVfibe1L0",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bd0e19e810bb4b55ab164a95",
                "width": null
              }
            ],
            "name": "Mood Booster",
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
            "snapshot_id": "MTYzMDQ2NDk0OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3rxVfibe1L0/tracks",
              "total": 76
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3rxVfibe1L0"
          },
          {
            "collaborative": false,
            "description": "Make your shower more uplifting by singing along to these hits.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSqmBTGDYngZ"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSqmBTGDYngZ",
            "id": "37i9dQZF1DWSqmBTGDYngZ",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000389713e7e7639dd0eae95d9d4",
                "width": null
              }
            ],
            "name": "Songs to Sing in the Shower",
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
            "snapshot_id": "MTYzMDQ2NDk2NCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSqmBTGDYngZ/tracks",
              "total": 200
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSqmBTGDYngZ"
          },
          {
            "collaborative": false,
            "description": "Curl up in your favorite spot with some sweet, mellow tunes...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6ziVCJnEm59"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6ziVCJnEm59",
            "id": "37i9dQZF1DX6ziVCJnEm59",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035ae7aa0454c9eafdd6505fda",
                "width": null
              }
            ],
            "name": "Your Favorite Coffeehouse",
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
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDA5MTAwMDAwMTdiODVjNDljZDgwMDAwMDE2ZDAwYjhlMDA5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6ziVCJnEm59/tracks",
              "total": 126
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6ziVCJnEm59"
          },
          {
            "collaborative": false,
            "description": "Hits to boost your mood and fill you with happiness!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC",
            "id": "37i9dQZF1DXdPec7aLTmlC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035af1070c80cd50dbbb4cfa19",
                "width": null
              }
            ],
            "name": "Happy Hits!",
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
            "snapshot_id": "MTYzMDQ2NDk0NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdPec7aLTmlC"
          },
          {
            "collaborative": false,
            "description": "Feel-good <a href=\"spotify:genre:edm_dance\">dance music</a>!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSf2RDTDayIx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSf2RDTDayIx",
            "id": "37i9dQZF1DWSf2RDTDayIx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003fe0099a8dcd3054706ffc92f",
                "width": null
              }
            ],
            "name": "Happy Beats",
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
            "snapshot_id": "MTYzMDQ2NDk5NCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSf2RDTDayIx/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSf2RDTDayIx"
          },
          {
            "collaborative": false,
            "description": "Feel great with these timelessly fun songs!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7KNKjOK0o75"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7KNKjOK0o75",
            "id": "37i9dQZF1DX7KNKjOK0o75",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000393ab3bfd3edf45ee5716023a",
                "width": null
              }
            ],
            "name": "Have a Great Day!",
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
            "snapshot_id": "MTYzMDQ2NDk5NCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7KNKjOK0o75/tracks",
              "total": 102
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7KNKjOK0o75"
          },
          {
            "collaborative": false,
            "description": "Grab your coffee and ease into the day with this light blend.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcgZcN2HVMoe"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcgZcN2HVMoe",
            "id": "37i9dQZF1DXcgZcN2HVMoe",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000340e6ba6a7be34cbcc0219f69",
                "width": null
              }
            ],
            "name": "Morning Coffee",
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
            "snapshot_id": "MTYzMDQ2NDk2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcgZcN2HVMoe/tracks",
              "total": 250
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcgZcN2HVMoe"
          },
          {
            "collaborative": false,
            "description": "every main character needs their soundtrack",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4OzrY981I1W"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4OzrY981I1W",
            "id": "37i9dQZF1DX4OzrY981I1W",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d2789b816dfcdc308c56fb33",
                "width": null
              }
            ],
            "name": "my life is a movie",
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
            "snapshot_id": "MTYzMDQ2NDk0NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4OzrY981I1W/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4OzrY981I1W"
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
            "description": "The perfect soundtrack for a day on the water. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcSzYlwgjiSi"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcSzYlwgjiSi",
            "id": "37i9dQZF1DXcSzYlwgjiSi",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031ce469c867c1c6e1cc7f815b",
                "width": null
              }
            ],
            "name": "Party Cove",
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
            "snapshot_id": "MTYyOTQyOTgxNywwMDAwMDAxYjAwMDAwMTdiNjE5NWUxMDUwMDAwMDE3MmUxYzkwZWJi",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcSzYlwgjiSi/tracks",
              "total": 115
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcSzYlwgjiSi"
          },
          {
            "collaborative": false,
            "description": "Need to get your energy level up? This will help!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXLSRKeL7KwM"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLSRKeL7KwM",
            "id": "37i9dQZF1DWXLSRKeL7KwM",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a46a02f3aaeccdaa10eba231",
                "width": null
              }
            ],
            "name": "Energy Booster: Country",
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
            "snapshot_id": "MTYzMDQ2NDk2MywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLSRKeL7KwM/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXLSRKeL7KwM"
          },
          {
            "collaborative": false,
            "description": "Set it off with these epic anthems. Only good vibes here!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYBO1MoTDhZI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYBO1MoTDhZI",
            "id": "37i9dQZF1DWYBO1MoTDhZI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037dc2a0fb4bfe0d07294f685e",
                "width": null
              }
            ],
            "name": "Good Vibes",
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
            "snapshot_id": "MTYzMDEwMDA5MCwwMDAwMDA5NzAwMDAwMTdiODk4OTZlZWQwMDAwMDE3ODZhM2IzNzNh",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYBO1MoTDhZI/tracks",
              "total": 102
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYBO1MoTDhZI"
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
            "description": "Feel good with this positively timeless playlist!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9XIFQuFvzM4"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9XIFQuFvzM4",
            "id": "37i9dQZF1DX9XIFQuFvzM4",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000313a02d059c0479e65a850267",
                "width": null
              }
            ],
            "name": "Feelin' Good",
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
            "snapshot_id": "MTYzMDQ2NDk0NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9XIFQuFvzM4/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9XIFQuFvzM4"
          },
          {
            "collaborative": false,
            "description": "You're on top of the world. Don't forget it.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4fpCWaHOned"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4fpCWaHOned",
            "id": "37i9dQZF1DX4fpCWaHOned",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037e368901f39aae9d510c8fda",
                "width": null
              }
            ],
            "name": "Confidence Boost",
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
            "snapshot_id": "MTYzMDQ2NDk5NCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4fpCWaHOned/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4fpCWaHOned"
          },
          {
            "collaborative": false,
            "description": "Softer kinda <a href=\"spotify:genre:edm_dance\">dance</a>.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6VdMW310YC7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6VdMW310YC7",
            "id": "37i9dQZF1DX6VdMW310YC7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e90bb6612cfbd77d87343ac2",
                "width": null
              }
            ],
            "name": "Chill Tracks",
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
            "snapshot_id": "MTYzMDQ2NDk0NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6VdMW310YC7/tracks",
              "total": 303
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6VdMW310YC7"
          },
          {
            "collaborative": false,
            "description": "Set the mood of your day with these awesome, happy songs!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0UrRvztWcAU"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0UrRvztWcAU",
            "id": "37i9dQZF1DX0UrRvztWcAU",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030bd6693bac1f89a70d623e4d",
                "width": null
              }
            ],
            "name": "Wake Up Happy",
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
            "snapshot_id": "MTYzMDQ2NDk2MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0UrRvztWcAU/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0UrRvztWcAU"
          },
          {
            "collaborative": false,
            "description": "Need to get your energy level up? This will help!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0vHZ8elq0UK"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0vHZ8elq0UK",
            "id": "37i9dQZF1DX0vHZ8elq0UK",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d8719001db822961551b017c",
                "width": null
              }
            ],
            "name": "Energy Booster: Pop",
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
            "snapshot_id": "MTYzMDQ2NDk2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0vHZ8elq0UK/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0vHZ8elq0UK"
          },
          {
            "collaborative": false,
            "description": "Happy songs by alternative bands. Any listener can connect with these indie jams.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2sUQwD7tbmL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2sUQwD7tbmL",
            "id": "37i9dQZF1DX2sUQwD7tbmL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003033194582b613753efeb6e71",
                "width": null
              }
            ],
            "name": "Feel-Good Indie Rock",
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
            "snapshot_id": "MTYzMDQ2NDk0NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2sUQwD7tbmL/tracks",
              "total": 120
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2sUQwD7tbmL"
          },
          {
            "collaborative": false,
            "description": "Because the best things in life are wild and free...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5Q5wA1hY6bS"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5Q5wA1hY6bS",
            "id": "37i9dQZF1DX5Q5wA1hY6bS",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003dcdb2503a0e4e2c6b3bfdd19",
                "width": null
              }
            ],
            "name": "Wild + Free",
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
            "snapshot_id": "MTYzMDQ2NDk2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5Q5wA1hY6bS/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5Q5wA1hY6bS"
          }
        ],
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
        "playlist": [
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
            "description": "Ride the bassline. Cover: Shaun Frank",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZCdOD1jAvLL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZCdOD1jAvLL",
            "id": "37i9dQZF1DWZCdOD1jAvLL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034d322dcc845cbc051783610c",
                "width": null
              }
            ],
            "name": "Bangers",
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
            "snapshot_id": "MTYzMDA5Mzg0OCwwMDAwMDFiZTAwMDAwMTdiODkyYTJlYTAwMDAwMDE3YjNkYmE0ZDU3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZCdOD1jAvLL/tracks",
              "total": 67
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZCdOD1jAvLL"
          },
          {
            "collaborative": false,
            "description": "Today's festival hits to keep your heart full. Peace, love, unity, respect. 💗",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1kCIzMYtzum"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1kCIzMYtzum",
            "id": "37i9dQZF1DX1kCIzMYtzum",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d7c2716d90bf14c12ad335db",
                "width": null
              }
            ],
            "name": "EDM",
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
            "snapshot_id": "MTYzMDQ2NTAyMSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1kCIzMYtzum/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1kCIzMYtzum"
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
            "snapshot_id": "MTYzMDQ2NTAwNSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa2PvUpywmrr/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXa2PvUpywmrr"
          },
          {
            "collaborative": false,
            "description": "Feel-good <a href=\"spotify:genre:edm_dance\">dance music</a>!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSf2RDTDayIx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSf2RDTDayIx",
            "id": "37i9dQZF1DWSf2RDTDayIx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003fe0099a8dcd3054706ffc92f",
                "width": null
              }
            ],
            "name": "Happy Beats",
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
            "snapshot_id": "MTYzMDQ2NTA0MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSf2RDTDayIx/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSf2RDTDayIx"
          },
          {
            "collaborative": false,
            "description": "All the <a href=\"spotify:genre:edm_dance\">big ones</a> with Swedish House Mafia.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0BcQWzuB7ZO"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0BcQWzuB7ZO",
            "id": "37i9dQZF1DX0BcQWzuB7ZO",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035c121d22d792502136591291",
                "width": null
              }
            ],
            "name": "Dance Hits",
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
            "snapshot_id": "MTYyODg1MjQwMCwwMDAwMDE2YzAwMDAwMTdiM2YyYjJmZmEwMDAwMDE3YWM5ZDNiNzhl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0BcQWzuB7ZO/tracks",
              "total": 95
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0BcQWzuB7ZO"
          },
          {
            "collaborative": false,
            "description": "<a href=\"spotify:genre:edm_dance\">Move</a> your feet!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaXB8fQg7xif"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaXB8fQg7xif",
            "id": "37i9dQZF1DXaXB8fQg7xif",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003470dd505fcf08e4693db9b24",
                "width": null
              }
            ],
            "name": "Dance Party",
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
            "snapshot_id": "MTYzMDQ2NTAwNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaXB8fQg7xif/tracks",
              "total": 125
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaXB8fQg7xif"
          },
          {
            "collaborative": false,
            "description": "Softer kinda <a href=\"spotify:genre:edm_dance\">dance</a>.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6VdMW310YC7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6VdMW310YC7",
            "id": "37i9dQZF1DX6VdMW310YC7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e90bb6612cfbd77d87343ac2",
                "width": null
              }
            ],
            "name": "Chill Tracks",
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
            "snapshot_id": "MTYzMDQ2NTAwNywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6VdMW310YC7/tracks",
              "total": 303
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6VdMW310YC7"
          },
          {
            "collaborative": false,
            "description": "Aggressive trap and bass for the <a href=\"spotify:genre:edm_dance\">gym</a>.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4eRPd9frC1m"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4eRPd9frC1m",
            "id": "37i9dQZF1DX4eRPd9frC1m",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003122921a072ad2ca9ce90a456",
                "width": null
              }
            ],
            "name": "Hype",
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
            "snapshot_id": "MTYzMDQ2NTAwNSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4eRPd9frC1m/tracks",
              "total": 181
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4eRPd9frC1m"
          },
          {
            "collaborative": false,
            "description": "Take down the tempo but keep the party going with the biggest tropical house jams.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0AMssoUKCz7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0AMssoUKCz7",
            "id": "37i9dQZF1DX0AMssoUKCz7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003194e62197788bcbd737a07a2",
                "width": null
              }
            ],
            "name": "Tropical House",
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
            "snapshot_id": "MTYzMDQ2NTAyMCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0AMssoUKCz7/tracks",
              "total": 200
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0AMssoUKCz7"
          },
          {
            "collaborative": false,
            "description": "Just try not to move to this mix of recent hits. Cover: Loud Luxury",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWU2jh5S7FvXl"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWU2jh5S7FvXl",
            "id": "37i9dQZF1DWU2jh5S7FvXl",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033f6e7767af1ff06f990b3d49",
                "width": null
              }
            ],
            "name": "Dance Favourites",
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
            "snapshot_id": "MTYzMDQ2NTAyMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWU2jh5S7FvXl/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWU2jh5S7FvXl"
          },
          {
            "collaborative": false,
            "description": "Kes takes over Massive Soca Hits for Carnival 2021",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWW7BONj8RiqI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWW7BONj8RiqI",
            "id": "37i9dQZF1DWW7BONj8RiqI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031f8f84b7fc7e801ce150c0e1",
                "width": null
              }
            ],
            "name": "Massive Soca Hits",
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
            "snapshot_id": "MTYyOTk2OTEwOSwwMDAwMDAxZjAwMDAwMTdiODFiYWQyMjQwMDAwMDE3YWY4MmNhYmQy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWW7BONj8RiqI/tracks",
              "total": 42
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWW7BONj8RiqI"
          },
          {
            "collaborative": false,
            "description": "Forget it and disappear with chill <a href=\"spotify:genre:edm_dance\">house</a>.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2TRYkJECvfC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2TRYkJECvfC",
            "id": "37i9dQZF1DX2TRYkJECvfC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000388165523fdefdb36279ffb99",
                "width": null
              }
            ],
            "name": "Deep House Relax",
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
            "snapshot_id": "MTYzMDQ2NTAyMywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2TRYkJECvfC/tracks",
              "total": 200
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2TRYkJECvfC"
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
            "snapshot_id": "MTYzMDQ2NTAwOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4dyzvuaRJ0n/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4dyzvuaRJ0n"
          },
          {
            "collaborative": false,
            "description": "Remixed hits from the last 15 years.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7D8GQsPKGvy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7D8GQsPKGvy",
            "id": "37i9dQZF1DX7D8GQsPKGvy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000323f3caaaa5f8bc79a8d92710",
                "width": null
              }
            ],
            "name": "Remix Hits",
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
            "snapshot_id": "MTYzMDQ2NTA0MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7D8GQsPKGvy/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7D8GQsPKGvy"
          },
          {
            "collaborative": false,
            "description": "The softer side of dance.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXccH49bh52dB"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXccH49bh52dB",
            "id": "37i9dQZF1DXccH49bh52dB",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000399d30d1fed5d487ff54420f9",
                "width": null
              }
            ],
            "name": "Chilled Dance Hits",
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
            "snapshot_id": "MTYzMDQ2NTAyMywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXccH49bh52dB/tracks",
              "total": 97
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXccH49bh52dB"
          },
          {
            "collaborative": false,
            "description": "Remixed pop and <a href=\"spotify:genre:edm_dance\">dance</a> collabs. Cover: J Balvin & Skrillex.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcZDD7cfEKhW"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcZDD7cfEKhW",
            "id": "37i9dQZF1DXcZDD7cfEKhW",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bd2d51e29c832d56847e4a33",
                "width": null
              }
            ],
            "name": "Pop Remix",
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
            "snapshot_id": "MTYzMDQ2NTAwNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcZDD7cfEKhW/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcZDD7cfEKhW"
          },
          {
            "collaborative": false,
            "description": "<a href=\"spotify:genre:house\">House</a> music lives here. United in one house. Cover: UNIIQU3",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXa8NOEUWPn9W"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa8NOEUWPn9W",
            "id": "37i9dQZF1DXa8NOEUWPn9W",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003062e96715fb0f1b45222e14f",
                "width": null
              }
            ],
            "name": "Housewerk",
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
            "snapshot_id": "MTYzMDA4MTcwOCwwMDAwMDFiMDAwMDAwMTdiODg3MGYxYTgwMDAwMDE3Yjg4NTY5ZjY4",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa8NOEUWPn9W/tracks",
              "total": 101
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXa8NOEUWPn9W"
          },
          {
            "collaborative": false,
            "description": "Dark & moody progressive house <a href=\"spotify:genre:edm_dance\">& electronic</a> on the late night highway.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6GJXiuZRisr"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6GJXiuZRisr",
            "id": "37i9dQZF1DX6GJXiuZRisr",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000309eec532a1a213bc950dff71",
                "width": null
              }
            ],
            "name": "Night Rider",
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
            "snapshot_id": "MTYzMDQ2NTAyMSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6GJXiuZRisr/tracks",
              "total": 380
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6GJXiuZRisr"
          },
          {
            "collaborative": false,
            "description": "New takes on old classics!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1OxnjWYRVU0"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1OxnjWYRVU0",
            "id": "37i9dQZF1DX1OxnjWYRVU0",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f87c07aa00a8f07bb4239079",
                "width": null
              }
            ],
            "name": "Dance Covers",
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
            "snapshot_id": "MTYzMDAxNTIwMCwwMDAwMDA4YzAwMDAwMTdiODQ3YTFiZTQwMDAwMDE2ZWY0NTYzNzI0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1OxnjWYRVU0/tracks",
              "total": 271
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1OxnjWYRVU0"
          }
        ],
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
        "playlist": [
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
            "description": "Proudly marching to the beat of their own drum. Cover: Exmiranda",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7oMO417tEZs"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7oMO417tEZs",
            "id": "37i9dQZF1DX7oMO417tEZs",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031d25e1baab3706215de01ab2",
                "width": null
              }
            ],
            "name": "Outliers",
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
            "snapshot_id": "MTYzMDI1MTQ2MiwwMDAwMDI5YjAwMDAwMTdiOTI4ZjJlMzMwMDAwMDE3Yjg5NDdhYzkx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7oMO417tEZs/tracks",
              "total": 98
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7oMO417tEZs"
          },
          {
            "collaborative": false,
            "description": "La crème de la crème of Montreal's music scene. Photo: Safia Nolin",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1F430ihQKsD"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1F430ihQKsD",
            "id": "37i9dQZF1DX1F430ihQKsD",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003762c4c7ce994de78732c192a",
                "width": null
              }
            ],
            "name": "Montréal Chill",
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
            "snapshot_id": "MTYzMDE4NTA0MywwMDAwMDFiMTAwMDAwMTdiOGU5OWI2ZDQwMDAwMDE3YjNkYzhkZTdh",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1F430ihQKsD/tracks",
              "total": 110
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1F430ihQKsD"
          },
          {
            "collaborative": false,
            "description": "every main character needs their soundtrack",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4OzrY981I1W"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4OzrY981I1W",
            "id": "37i9dQZF1DX4OzrY981I1W",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d2789b816dfcdc308c56fb33",
                "width": null
              }
            ],
            "name": "my life is a movie",
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
            "snapshot_id": "MTYzMDQ2NTA2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4OzrY981I1W/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4OzrY981I1W"
          },
          {
            "collaborative": false,
            "description": "Happy songs by alternative bands. Any listener can connect with these indie jams.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2sUQwD7tbmL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2sUQwD7tbmL",
            "id": "37i9dQZF1DX2sUQwD7tbmL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003033194582b613753efeb6e71",
                "width": null
              }
            ],
            "name": "Feel-Good Indie Rock",
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
            "snapshot_id": "MTYzMDQ2NTA2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2sUQwD7tbmL/tracks",
              "total": 120
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2sUQwD7tbmL"
          },
          {
            "collaborative": false,
            "description": "for those who appreciate a curated mood 🌸 ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8uc99HoZBLU"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8uc99HoZBLU",
            "id": "37i9dQZF1DX8uc99HoZBLU",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003889d42312db8e6aa21d55a34",
                "width": null
              }
            ],
            "name": "aesthetic",
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
            "snapshot_id": "MTYzMDQ2NTA2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8uc99HoZBLU/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8uc99HoZBLU"
          },
          {
            "collaborative": false,
            "description": "Dreamy jams from the best bedroom producers. Cover: Steve Lacy",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcxvFzl58uP7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcxvFzl58uP7",
            "id": "37i9dQZF1DXcxvFzl58uP7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034b871ac05aeb69a5b4b9b655",
                "width": null
              }
            ],
            "name": "Bedroom Pop",
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
            "snapshot_id": "MTYzMDQ2NTA4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcxvFzl58uP7/tracks",
              "total": 115
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcxvFzl58uP7"
          },
          {
            "collaborative": false,
            "description": "Sunny tracks from Mac DeMarco, The Beach Boys, and everyone in between.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYzpSJHStHHx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYzpSJHStHHx",
            "id": "37i9dQZF1DWYzpSJHStHHx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000394dfd718283b5154043dd755",
                "width": null
              }
            ],
            "name": "Surf Rock Sunshine",
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
            "snapshot_id": "MTYzMDQ2NTA2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYzpSJHStHHx/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYzpSJHStHHx"
          },
          {
            "collaborative": false,
            "description": "We hear you",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX59NCqCqJtoH"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX59NCqCqJtoH",
            "id": "37i9dQZF1DX59NCqCqJtoH",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032a161bae1caf29ef62c71084",
                "width": null
              }
            ],
            "name": "idk.",
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
            "snapshot_id": "MTYzMDQ2NTA2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX59NCqCqJtoH/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX59NCqCqJtoH"
          },
          {
            "collaborative": false,
            "description": "New and approved indie pop. Cover: The Neighbourhood",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWEcRhUVtL8n"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWEcRhUVtL8n",
            "id": "37i9dQZF1DWWEcRhUVtL8n",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d3520848d9b9586a38ae1b97",
                "width": null
              }
            ],
            "name": "Indie Pop",
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
            "snapshot_id": "MTYzMDQ2NTA4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWEcRhUVtL8n/tracks",
              "total": 125
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWEcRhUVtL8n"
          },
          {
            "collaborative": false,
            "description": "Genre-less. Quality first always. Cover: Caribou",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWBHeXOYZf74"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWBHeXOYZf74",
            "id": "37i9dQZF1DWWBHeXOYZf74",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030b0bc82751b2e611f2e20803",
                "width": null
              }
            ],
            "name": "POLLEN",
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
            "snapshot_id": "MTYzMDQzNjQ2OCwwMDAwMDNjZjAwMDAwMTdiOWQ5NjI2MDgwMDAwMDE3Yjg0Mzg5Y2Rl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWBHeXOYZf74/tracks",
              "total": 154
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWBHeXOYZf74"
          },
          {
            "collaborative": false,
            "description": "melodic gems u can send to friends. nostalgic for the diy days of the burned cd. pinkpantheress ❤️‍🔥",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdwmD5Q7Gxah"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdwmD5Q7Gxah",
            "id": "37i9dQZF1DXdwmD5Q7Gxah",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003888e7c07d0ba053ab62b409f",
                "width": null
              }
            ],
            "name": "Lorem",
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
            "snapshot_id": "MTYzMDM1MTE2OSwwMDAwMDJkMjAwMDAwMTdiOTg4MDk2NGMwMDAwMDE3Yjk4NzlkMTNm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdwmD5Q7Gxah/tracks",
              "total": 160
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdwmD5Q7Gxah"
          },
          {
            "collaborative": false,
            "description": "The pop leaning side of 2000s indie. Cover: Phoenix",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9LbdoYID5v7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9LbdoYID5v7",
            "id": "37i9dQZF1DX9LbdoYID5v7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c492701ac72b9b4182860a2b",
                "width": null
              }
            ],
            "name": "Indie Pop 2000s",
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
            "snapshot_id": "MTYzMDQ2NTA2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9LbdoYID5v7/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9LbdoYID5v7"
          },
          {
            "collaborative": false,
            "description": "Indie pop that defined the 2010s. Cover: Lana Del Rey",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaLaoaQqrfyO"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaLaoaQqrfyO",
            "id": "37i9dQZF1DXaLaoaQqrfyO",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031b5b09ac50877cce76580765",
                "width": null
              }
            ],
            "name": "Indie Pop 2010s",
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
            "snapshot_id": "MTYzMDQ2NTA4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaLaoaQqrfyO/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaLaoaQqrfyO"
          },
          {
            "collaborative": false,
            "description": "Chill. The best indie tracks for just hanging out.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9B1hu73DioC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9B1hu73DioC",
            "id": "37i9dQZF1DX9B1hu73DioC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a20077cb15561277c30f6eb5",
                "width": null
              }
            ],
            "name": "Indie Chillout",
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
            "snapshot_id": "MTYzMDQ2NTAyMSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9B1hu73DioC/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9B1hu73DioC"
          },
          {
            "collaborative": false,
            "description": "Snuggle jams to keep you cozy under the covers.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6tTW0xDxScH"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6tTW0xDxScH",
            "id": "37i9dQZF1DX6tTW0xDxScH",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000329e90307d494cc43a1e1f304",
                "width": null
              }
            ],
            "name": "Stay in Bed",
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
            "snapshot_id": "MTYzMDQ2NTAyNiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6tTW0xDxScH/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6tTW0xDxScH"
          },
          {
            "collaborative": false,
            "description": "it's a vibe (◡ ‿ ◡ ✿) cover: Lorde",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5y8xoSWyhcz"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5y8xoSWyhcz",
            "id": "37i9dQZF1DX5y8xoSWyhcz",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000343b00f8d62984c15e40b74b9",
                "width": null
              }
            ],
            "name": "indie pop & chill",
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
            "snapshot_id": "MTYzMDA5ODEwMiwwMDAwMDJjNTAwMDAwMTdiODk2YjE4MWUwMDAwMDE3Yjg2MGU3MzM5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5y8xoSWyhcz/tracks",
              "total": 99
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5y8xoSWyhcz"
          },
          {
            "collaborative": false,
            "description": "Classic alternative. These early pioneers brought the underground to the foreground. Cover: Lou Reed",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdTCdwCKzXwo"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdTCdwCKzXwo",
            "id": "37i9dQZF1DXdTCdwCKzXwo",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036ae33e22093ced41760fb0c0",
                "width": null
              }
            ],
            "name": "Early Alternative",
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
            "snapshot_id": "MTYzMDQ2NTA2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdTCdwCKzXwo/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdTCdwCKzXwo"
          },
          {
            "collaborative": false,
            "description": "All your alternative favorites. Cover: The xx.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX26DKvjp0s9M"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX26DKvjp0s9M",
            "id": "37i9dQZF1DX26DKvjp0s9M",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035724a24c8194afcb44984521",
                "width": null
              }
            ],
            "name": "Essential Indie",
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
            "snapshot_id": "MTYzMDQ2NTAyMSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX26DKvjp0s9M/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX26DKvjp0s9M"
          },
          {
            "collaborative": false,
            "description": "absolutely feelin your thrift haul",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1dvMSwf27JO"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1dvMSwf27JO",
            "id": "37i9dQZF1DX1dvMSwf27JO",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039796e27dcad9b0a701fafe47",
                "width": null
              }
            ],
            "name": "'fit check",
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
            "snapshot_id": "MTYzMDQzMzg2MCwwMDAwMDA1NTAwMDAwMTdiOWQ2ZTVjZDMwMDAwMDE3YjE3N2MzMWU3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1dvMSwf27JO/tracks",
              "total": 52
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1dvMSwf27JO"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "Gentle ambient piano to help you fall asleep.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZd79rJ6a7lp",
            "id": "37i9dQZF1DWZd79rJ6a7lp",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003b70e0223f544b1faa2e95ed0",
                "width": null
              }
            ],
            "name": "Sleep",
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
            "snapshot_id": "MTYyOTEyNDQxMiwwMDAwMDBkMTAwMDAwMTdiNGY2MWMzMjMwMDAwMDE2Y2Y2OTUyYjAw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZd79rJ6a7lp/tracks",
              "total": 143
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZd79rJ6a7lp"
          },
          {
            "collaborative": false,
            "description": "Relax and indulge with beautiful piano pieces",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO",
            "id": "37i9dQZF1DX4sWSpwq3LiO",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6",
                "width": null
              }
            ],
            "name": "Peaceful Piano",
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
            "snapshot_id": "MTYzMDM5ODYxNywwMDAwMDEwMTAwMDAwMTdiOWI1NDk5NWQwMDAwMDE2ZDE1NTk1OTFk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO/tracks",
              "total": 377
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4sWSpwq3LiO"
          },
          {
            "collaborative": false,
            "description": "Soothing, minimalist ambient for deep sleep.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYcDQ1hSjOpY"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYcDQ1hSjOpY",
            "id": "37i9dQZF1DWYcDQ1hSjOpY",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c601a6a746366286845b8fda",
                "width": null
              }
            ],
            "name": "Deep Sleep",
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
            "snapshot_id": "MTYyOTM3OTg5OCwwMDAwMDA1ZTAwMDAwMTdiNWU5YzJhZDUwMDAwMDE2ZDE1MjI3Zjk3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYcDQ1hSjOpY/tracks",
              "total": 215
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYcDQ1hSjOpY"
          },
          {
            "collaborative": false,
            "description": "Soothing instrumental music for sleepy babies.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0DxcHtn4Hwo"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0DxcHtn4Hwo",
            "id": "37i9dQZF1DX0DxcHtn4Hwo",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003eb12904dbf44afa59d6ab9ef",
                "width": null
              }
            ],
            "name": "Baby Sleep",
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
            "snapshot_id": "MTYyOTM4MTAxMywwMDAwMDA5YTAwMDAwMTdiNWVhZDJmMDUwMDAwMDE3MGM0Y2Y4YWM3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0DxcHtn4Hwo/tracks",
              "total": 290
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0DxcHtn4Hwo"
          },
          {
            "collaborative": false,
            "description": "Pouring rain and occasional rolling thunder.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbcPC6Vvqudd"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbcPC6Vvqudd",
            "id": "37i9dQZF1DXbcPC6Vvqudd",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000393fe06c436d719d3f31107d0",
                "width": null
              }
            ],
            "name": "Night Rain",
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
            "snapshot_id": "MTYyOTM4MDU1NCwwMDAwMDA0ZTAwMDAwMTdiNWVhNjJkZGIwMDAwMDE3MGM0OWExMzVj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbcPC6Vvqudd/tracks",
              "total": 379
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbcPC6Vvqudd"
          },
          {
            "collaborative": false,
            "description": "Ambient drone to make you feel weightless.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1n9whBbBKoL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1n9whBbBKoL",
            "id": "37i9dQZF1DX1n9whBbBKoL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d33da3d4e483709cb1b33c8b",
                "width": null
              }
            ],
            "name": "Floating Through Space",
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
            "snapshot_id": "MTYyOTQ1MTcyMywwMDAwMDA2NDAwMDAwMTdiNjJlNDIzYWMwMDAwMDE2ZDAwYzU0ODJk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1n9whBbBKoL/tracks",
              "total": 131
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1n9whBbBKoL"
          },
          {
            "collaborative": false,
            "description": "Welcome to the soothing hum...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUZ5bk6qqDSy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUZ5bk6qqDSy",
            "id": "37i9dQZF1DWUZ5bk6qqDSy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035654f5615b2aec45465d0fd2",
                "width": null
              }
            ],
            "name": "White Noise",
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
            "snapshot_id": "MTYyOTM4MjUwNCwwMDAwMDAzZDAwMDAwMTdiNWVjM2YxNGUwMDAwMDE2ZDAwYzlhOWI5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUZ5bk6qqDSy/tracks",
              "total": 247
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUZ5bk6qqDSy"
          },
          {
            "collaborative": false,
            "description": "Comforting sounds of thunder and rain.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4aYNO8X5RpR"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4aYNO8X5RpR",
            "id": "37i9dQZF1DX4aYNO8X5RpR",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d4256662593ef9ad7707f4a3",
                "width": null
              }
            ],
            "name": "Nightstorms",
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
            "snapshot_id": "MTYyOTQ1MTk5MiwwMDAwMDAzZjAwMDAwMTdiNjJlODNlODMwMDAwMDE2Y2Y2OTFhZTUw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4aYNO8X5RpR/tracks",
              "total": 175
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4aYNO8X5RpR"
          },
          {
            "collaborative": false,
            "description": "Calm piano music for sleeping.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX03b46zi3S82"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX03b46zi3S82",
            "id": "37i9dQZF1DX03b46zi3S82",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038257266b22638a81f18ad2bb",
                "width": null
              }
            ],
            "name": "Sleepy Piano",
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
            "snapshot_id": "MTYzMDQxNDc2MSwwMDAwMDA2MDAwMDAwMTdiOWM0YWVjNTkwMDAwMDE3MGM0YzM2OWFl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX03b46zi3S82/tracks",
              "total": 178
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX03b46zi3S82"
          },
          {
            "collaborative": false,
            "description": "Let these jazz tracks lull you to sleep.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXa1rZf8gLhyz"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa1rZf8gLhyz",
            "id": "37i9dQZF1DXa1rZf8gLhyz",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000308e683238978c7d578b96046",
                "width": null
              }
            ],
            "name": "Jazz for Sleep",
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
            "snapshot_id": "MTYzMDQxNDI3OSwwMDAwMDA3NjAwMDAwMTdiOWM0Mzk1MmYwMDAwMDE2ZDAwYjRhZjc4",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXa1rZf8gLhyz/tracks",
              "total": 102
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXa1rZf8gLhyz"
          },
          {
            "collaborative": false,
            "description": "Drift off to these peaceful <a href=\"spotify:genre:classical\">classical</a> melodies.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8Sz1gsYZdwj"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8Sz1gsYZdwj",
            "id": "37i9dQZF1DX8Sz1gsYZdwj",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038f5b6bf8fd58ce6ab15e037a",
                "width": null
              }
            ],
            "name": "Classical Sleep",
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
            "snapshot_id": "MTYyNTQ3ODMxNiwwMDAwMDA1MTAwMDAwMTdhNzYwZWMxYjMwMDAwMDE2ZWEyMGM1NmVj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8Sz1gsYZdwj/tracks",
              "total": 54
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8Sz1gsYZdwj"
          },
          {
            "collaborative": false,
            "description": "Soft instrumental lullabies for the little ones.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8skPjZYk8mL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8skPjZYk8mL",
            "id": "37i9dQZF1DX8skPjZYk8mL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003376ec73aae90a63b4a6dcae8",
                "width": null
              }
            ],
            "name": "Sweet Lullabies",
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
            "snapshot_id": "MTYyOTQ1NDUyMywwMDAwMDAzNzAwMDAwMTdiNjMwZWRiZGMwMDAwMDE3MTNlZjQyN2Ex",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8skPjZYk8mL/tracks",
              "total": 335
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8skPjZYk8mL"
          },
          {
            "collaborative": false,
            "description": "Hypnotic bliss.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSiZVO2J6WeI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSiZVO2J6WeI",
            "id": "37i9dQZF1DWSiZVO2J6WeI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003cef1e1e83454017583e8bd8f",
                "width": null
              }
            ],
            "name": "Dreamy Vibes",
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
            "snapshot_id": "MTYzMDQ2NTA2NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSiZVO2J6WeI/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSiZVO2J6WeI"
          },
          {
            "collaborative": false,
            "description": "A series of soothing sounds to softly send you to sweet, sweet slumber.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWStLt4f1zJ6I"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWStLt4f1zJ6I",
            "id": "37i9dQZF1DWStLt4f1zJ6I",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ec54f98c4528e2e50687dc23",
                "width": null
              }
            ],
            "name": "Songs For Sleeping",
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
            "snapshot_id": "MTU4NjM0MjUwOSwwMDAwMDAxZjAwMDAwMTcxNTk2MWJkMDQwMDAwMDE3MTU5NjFhMjli",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWStLt4f1zJ6I/tracks",
              "total": 99
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWStLt4f1zJ6I"
          },
          {
            "collaborative": false,
            "description": "Relaxing music and sounds for sleeping.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3WdioUzkg8I"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3WdioUzkg8I",
            "id": "37i9dQZF1DX3WdioUzkg8I",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003488a5e28d03a93158dfe9517",
                "width": null
              }
            ],
            "name": "Fall Asleep",
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
            "snapshot_id": "MTYyOTIwNzI1MywwMDAwMDAzOTAwMDAwMTdiNTQ1MWQyMDQwMDAwMDE3MDNlZmI3ZWYz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3WdioUzkg8I/tracks",
              "total": 131
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3WdioUzkg8I"
          },
          {
            "collaborative": false,
            "description": "Music to reduce insomnia and help you relax.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSUFOo47GEsI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSUFOo47GEsI",
            "id": "37i9dQZF1DWSUFOo47GEsI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000360fd1f89de6186b9f4d2fa80",
                "width": null
              }
            ],
            "name": "Sleep Tight",
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
            "snapshot_id": "MTYyOTgwMjc2MiwwMDAwMDA3ZDAwMDAwMTdiNzdkMDkxZjUwMDAwMDE3OTBlOTllNTIx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSUFOo47GEsI/tracks",
              "total": 183
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSUFOo47GEsI"
          },
          {
            "collaborative": false,
            "description": "Relax to the sound of the ocean.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9if5QDLdzCa"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9if5QDLdzCa",
            "id": "37i9dQZF1DX9if5QDLdzCa",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000338bb888ae431d514d3c6bce2",
                "width": null
              }
            ],
            "name": "Ocean Escapes",
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
            "snapshot_id": "MTYyOTczNDgyNSwwMDAwMDA1NzAwMDAwMTdiNzNjM2VkNmMwMDAwMDE2ZDE1M2M1NjU5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9if5QDLdzCa/tracks",
              "total": 178
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9if5QDLdzCa"
          },
          {
            "collaborative": false,
            "description": "Soothing sounds of gentle rains.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2mFmJUZg4Mp"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2mFmJUZg4Mp",
            "id": "37i9dQZF1DX2mFmJUZg4Mp",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003790c93c80d91424b1242b628",
                "width": null
              }
            ],
            "name": "Gentle Rains",
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
            "snapshot_id": "MTYyOTczNDQzMiwwMDAwMDAzMTAwMDAwMTdiNzNiZGVkNWQwMDAwMDE2ZDE1M2I2MDM1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2mFmJUZg4Mp/tracks",
              "total": 163
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2mFmJUZg4Mp"
          },
          {
            "collaborative": false,
            "description": "Put yourself to sleep with delta frequencies.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8h3zQNo57xG"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8h3zQNo57xG",
            "id": "37i9dQZF1DX8h3zQNo57xG",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000381ec7988ec71538c082730e1",
                "width": null
              }
            ],
            "name": "Binaural Beats Sleep",
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
            "snapshot_id": "MTYyOTIwODUwNCwwMDAwMDAzZjAwMDAwMTdiNTQ2NGU3YjQwMDAwMDE3MWYzNGZjZDIy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8h3zQNo57xG/tracks",
              "total": 76
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8h3zQNo57xG"
          },
          {
            "collaborative": false,
            "description": "Relax and fall asleep to ASMR trigger sounds (no talking).",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUAeTOoyNaqm"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUAeTOoyNaqm",
            "id": "37i9dQZF1DWUAeTOoyNaqm",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000328bb958d28682eacbdf45389",
                "width": null
              }
            ],
            "name": "ASMR Sleep",
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
            "snapshot_id": "MTYzMDQ2NTA5MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUAeTOoyNaqm/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUAeTOoyNaqm"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "The best mix of today's Christian music worldwide.  Cover: Mike Donehey",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcb6CQIjdqKy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcb6CQIjdqKy",
            "id": "37i9dQZF1DXcb6CQIjdqKy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000303fb76f2326ddf645338103f",
                "width": null
              }
            ],
            "name": "Top Christian",
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
            "snapshot_id": "MTYzMDA0NzY0NCwwMDAwMDUwOTAwMDAwMTdiODY2OTJhZGEwMDAwMDE3Yjg1ZTIxNmNl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcb6CQIjdqKy/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcb6CQIjdqKy"
          },
          {
            "collaborative": false,
            "description": "The experience of live worship lives here. Cover: Maverick City Music",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdrxKdrXE2Vk"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdrxKdrXE2Vk",
            "id": "37i9dQZF1DXdrxKdrXE2Vk",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d0c4b07e1d05278a0c9b8938",
                "width": null
              }
            ],
            "name": "Best of Live Worship",
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
            "snapshot_id": "MTYyOTUxMjEwNiwwMDAwMDA1YjAwMDAwMTdiNjY3ZDgyYmEwMDAwMDE3YTFjOWE5MDEz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdrxKdrXE2Vk/tracks",
              "total": 95
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdrxKdrXE2Vk"
          },
          {
            "collaborative": false,
            "description": "Everyday. Every time.  These are the songs you can count on. Always.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbQ1kpdsa9FU"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbQ1kpdsa9FU",
            "id": "37i9dQZF1DXbQ1kpdsa9FU",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037ffbda2f68a937cf3771ccdf",
                "width": null
              }
            ],
            "name": "Everyday Inspiration",
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
            "snapshot_id": "MTYzMDQ2NTE2OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbQ1kpdsa9FU/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbQ1kpdsa9FU"
          },
          {
            "collaborative": false,
            "description": "Experience today's best Worship music. Cover:  Elevation Worship",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVYgpMbMPJMz"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVYgpMbMPJMz",
            "id": "37i9dQZF1DWVYgpMbMPJMz",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034ee2f1e2847356d9510ac09c",
                "width": null
              }
            ],
            "name": "WorshipNow",
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
            "snapshot_id": "MTYzMDA1MTcxMSwwMDAwMDRhYTAwMDAwMTdiODZhNzM4YzEwMDAwMDE3Yjg2MWY0MGRl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVYgpMbMPJMz/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVYgpMbMPJMz"
          },
          {
            "collaborative": false,
            "description": "Recent smashes from your favorite Christian Contemporary artists.  Cover: Shane & Shane",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5SzTPIoCKiv"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5SzTPIoCKiv",
            "id": "37i9dQZF1DX5SzTPIoCKiv",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033950615883eab72b489aa6b6",
                "width": null
              }
            ],
            "name": "Christian Mix",
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
            "snapshot_id": "MTYzMDQ2NTE0MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5SzTPIoCKiv/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5SzTPIoCKiv"
          },
          {
            "collaborative": false,
            "description": "New songs from some of the latest and greatest Gospel music artists. Cover: Travis Greene",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUMIjnZuaulx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUMIjnZuaulx",
            "id": "37i9dQZF1DWUMIjnZuaulx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c073f13c436f9d36385a506f",
                "width": null
              }
            ],
            "name": "Fresh Gospel",
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
            "snapshot_id": "MTYzMDA0OTU1NiwwMDAwMDQyODAwMDAwMTdiODY4NjU4OWUwMDAwMDE3YjYyNGMwNjdm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUMIjnZuaulx/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUMIjnZuaulx"
          },
          {
            "collaborative": false,
            "description": "The best new tracks of all genres of Christian, Gospel, Worship & Inspirational music.  Cover: SWITCH",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVtgG63SDdt8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVtgG63SDdt8",
            "id": "37i9dQZF1DWVtgG63SDdt8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033cea9616d4a764e49a1686f5",
                "width": null
              }
            ],
            "name": "New Music Friday Christian",
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
            "snapshot_id": "MTYzMDAzNzUwMywwMDAwMDRmMDAwMDAwMTdiODVjZTZkMDEwMDAwMDE3Yjg1YWFkNzFk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVtgG63SDdt8/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVtgG63SDdt8"
          },
          {
            "collaborative": false,
            "description": "The top Christian songs worldwide!  Cover: Lauren Daigle",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdgckExLlG1g"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdgckExLlG1g",
            "id": "37i9dQZF1DXdgckExLlG1g",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000360a4f9d5efdac59d0b007695",
                "width": null
              }
            ],
            "name": "Most Favored",
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
            "snapshot_id": "MTU5NzQyNzYzMCwwMDAwMDAxNzAwMDAwMTczZWUxYjQzMGQwMDAwMDE3MGM0YzZlNzg3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdgckExLlG1g/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdgckExLlG1g"
          },
          {
            "collaborative": false,
            "description": "Majestic and bold, these new and known worship songs are great for every day.  Cover artist: <a href=\"https://open.spotify.com/artist/0Onvkz1Nbs4wHXXUwOIGk8/\">Jesus Culture</a>",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVlWpJblBvap"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVlWpJblBvap",
            "id": "37i9dQZF1DWVlWpJblBvap",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000391d3cf2d340e886bf352f5d1",
                "width": null
              }
            ],
            "name": "Songs of Glory",
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
            "snapshot_id": "MTYzMDQ2NTE0MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVlWpJblBvap/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVlWpJblBvap"
          },
          {
            "collaborative": false,
            "description": "The country way of testifying. \nCover: Jimmie Allen",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWU2LcZVHsTdv"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWU2LcZVHsTdv",
            "id": "37i9dQZF1DWU2LcZVHsTdv",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a4884f9b53eb7e6451efbe16",
                "width": null
              }
            ],
            "name": "Country by the Grace of God",
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
            "snapshot_id": "MTYyODgxNTUzMiwwMDAwMDA3OTAwMDAwMTdiM2NmOGEyZmYwMDAwMDE3YWY4NDhhMTBl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWU2LcZVHsTdv/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWU2LcZVHsTdv"
          },
          {
            "collaborative": false,
            "description": "Breathe in deep with arms wide open in worship. This is going to be epic!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZoR0U5SzE1r"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZoR0U5SzE1r",
            "id": "37i9dQZF1DWZoR0U5SzE1r",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003b7c646dff50272449c260bfc",
                "width": null
              }
            ],
            "name": "epicPRAISE",
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
            "snapshot_id": "MTYzMDQ2NTE0MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZoR0U5SzE1r/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZoR0U5SzE1r"
          },
          {
            "collaborative": false,
            "description": "Go deep into spontaneous praise and worship here. On and on.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5pEiFLSS7sX"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5pEiFLSS7sX",
            "id": "37i9dQZF1DX5pEiFLSS7sX",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035e3e08bd419c141c49259c88",
                "width": null
              }
            ],
            "name": "Signs & Wonders",
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
            "snapshot_id": "MTYzMDQ2NTE0MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5pEiFLSS7sX/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5pEiFLSS7sX"
          },
          {
            "collaborative": false,
            "description": "Tune in here for new and current hits in Contemporary Christian music!  Cover: Danny Gokey",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUileP28ODwg"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUileP28ODwg",
            "id": "37i9dQZF1DWUileP28ODwg",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c5f9db40ec3aa9a7f8db6693",
                "width": null
              }
            ],
            "name": "Top Christian Contemporary",
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
            "snapshot_id": "MTYyODg0NTM0NywwMDAwMDA4OTAwMDAwMTdiM2ViZjk0OTgwMDAwMDE3OThkOWZhOTli",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUileP28ODwg/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUileP28ODwg"
          },
          {
            "collaborative": false,
            "description": "Celebrating the women of worship music! Cover: Lauren Daigle",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVrSccL9KVUt"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVrSccL9KVUt",
            "id": "37i9dQZF1DWVrSccL9KVUt",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038f9dd3c372713263476ee837",
                "width": null
              }
            ],
            "name": "Women of Worship",
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
            "snapshot_id": "MTYxNDcyNzE0OSwwMDAwMDAwZjAwMDAwMTc3ZjUzY2Y2ZTYwMDAwMDE3N2VmOThhNDhm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVrSccL9KVUt/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVrSccL9KVUt"
          },
          {
            "collaborative": false,
            "description": "Songs of deep relationships to inspire your journey with each other.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYhr4P5Boce5"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYhr4P5Boce5",
            "id": "37i9dQZF1DWYhr4P5Boce5",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bf2b62041edc220a40bf1f02",
                "width": null
              }
            ],
            "name": "Going Together",
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
            "snapshot_id": "MTU5MjI1NjA1OCwwMDAwMDAwZTAwMDAwMTcyYjlkYjUyZGEwMDAwMDE3MGM0YzRhODNm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYhr4P5Boce5/tracks",
              "total": 67
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYhr4P5Boce5"
          },
          {
            "collaborative": false,
            "description": "Experience the powerful messages and sounds of these gospel tunes.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7OIddoQVdRt"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7OIddoQVdRt",
            "id": "37i9dQZF1DX7OIddoQVdRt",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a88ac8a27dd714bacc2d9ddd",
                "width": null
              }
            ],
            "name": "Spread the Gospel",
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
            "snapshot_id": "MTYzMDQ2NTE0MywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7OIddoQVdRt/tracks",
              "total": 40
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7OIddoQVdRt"
          },
          {
            "collaborative": false,
            "description": "A mix of EDM, Pop, Hip Hop, Worship, and remixes!  Discover songs from artists defining the sound of now and tomorrow!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUUPO0Sbx2CM"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUUPO0Sbx2CM",
            "id": "37i9dQZF1DWUUPO0Sbx2CM",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003246c92acc8513a9234516a4d",
                "width": null
              }
            ],
            "name": "Christian Dance Party",
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
            "snapshot_id": "MTYzMDQ2NTEzNCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUUPO0Sbx2CM/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUUPO0Sbx2CM"
          },
          {
            "collaborative": false,
            "description": "Sometimes upbeat, sometimes chill, these songs will encourage you and warm your heart and soul.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXKWi9FunemC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXKWi9FunemC",
            "id": "37i9dQZF1DWXKWi9FunemC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003147e0fb406a63b4b495931db",
                "width": null
              }
            ],
            "name": "Love Coffee, Love Jesus",
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
            "snapshot_id": "MTYzMDQ2NTE1MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXKWi9FunemC/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXKWi9FunemC"
          },
          {
            "collaborative": false,
            "description": "Emerging sounds in worship from everywhere.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7fPhUztqfIX"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7fPhUztqfIX",
            "id": "37i9dQZF1DX7fPhUztqfIX",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036bfa4a353400e9179aa15e2f",
                "width": null
              }
            ],
            "name": "New & Bold",
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
            "snapshot_id": "MTYzMDQ2NTE0MywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7fPhUztqfIX/tracks",
              "total": 130
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7fPhUztqfIX"
          },
          {
            "collaborative": false,
            "description": "Leave no rock undiscovered and explore the essential foundations of Christian rock.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZCJsgK4Sw8Y"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZCJsgK4Sw8Y",
            "id": "37i9dQZF1DWZCJsgK4Sw8Y",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003fdfb5eba12c8ec4e496608c2",
                "width": null
              }
            ],
            "name": "Cornerstones",
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
            "snapshot_id": "MTYyNzYxNzY2MCwwMDAwMDAwODAwMDAwMTdhZjU5MjhjZWYwMDAwMDE3MGFmMzkyZjI2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZCJsgK4Sw8Y/tracks",
              "total": 87
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZCJsgK4Sw8Y"
          }
        ],
        "name": "Christian & Gospel"
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
        "playlist": [
          {
            "collaborative": false,
            "description": "The Class of 2021's very own time capsule: a nostalgic look back on the past four years.\n\n",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcPYzOAWX8Wm"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcPYzOAWX8Wm",
            "id": "37i9dQZF1DXcPYzOAWX8Wm",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f89497ba4c185a68c8395807",
                "width": null
              }
            ],
            "name": "CLASS OF 2021 mixtape",
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
            "snapshot_id": "MTYzMDU0MTIzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcPYzOAWX8Wm/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcPYzOAWX8Wm"
          },
          {
            "collaborative": false,
            "description": "Class of 2021: The quintessential list of songs to celebrate commencement.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdfjr8o5AMIT"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdfjr8o5AMIT",
            "id": "37i9dQZF1DXdfjr8o5AMIT",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035c6ae5ef67970e972e611b28",
                "width": null
              }
            ],
            "name": "Graduation Songs 2021",
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
            "snapshot_id": "MTYyMDE2MTEyMCwwMDAwMDAyNDAwMDAwMTc5MzkyMGNhNTMwMDAwMDE3OTM5MjA1OTdm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdfjr8o5AMIT/tracks",
              "total": 85
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdfjr8o5AMIT"
          },
          {
            "collaborative": false,
            "description": "However you're celebrating this year, enjoy the vibe and have fun. You did it!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSRMIm8fJ5L7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSRMIm8fJ5L7",
            "id": "37i9dQZF1DWSRMIm8fJ5L7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000333e7d6e364d0be900fc4f51f",
                "width": null
              }
            ],
            "name": "Grad Party",
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
            "snapshot_id": "MTYzMDU0MTI3NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSRMIm8fJ5L7/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSRMIm8fJ5L7"
          },
          {
            "collaborative": false,
            "description": "quiet hallways, dusty sunlight, cosy sweaters, and hot tea",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX17GkScaAekA"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX17GkScaAekA",
            "id": "37i9dQZF1DX17GkScaAekA",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003165c8be61cba26adb7446582",
                "width": null
              }
            ],
            "name": "Dark Academia Classical",
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
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDAwYzAwMDAwMTdiODVjNDljZTIwMDAwMDE3N2VlYjlhZjdm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX17GkScaAekA/tracks",
              "total": 44
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX17GkScaAekA"
          },
          {
            "collaborative": false,
            "description": "every main character needs their soundtrack",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4OzrY981I1W"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4OzrY981I1W",
            "id": "37i9dQZF1DX4OzrY981I1W",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d2789b816dfcdc308c56fb33",
                "width": null
              }
            ],
            "name": "my life is a movie",
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
            "snapshot_id": "MTYzMDU0MTI2MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4OzrY981I1W/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4OzrY981I1W"
          },
          {
            "collaborative": false,
            "description": "tfw ur crushing so hard it hurts",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcbAIldMQMIs"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcbAIldMQMIs",
            "id": "37i9dQZF1DXcbAIldMQMIs",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ae7fb51c3aead9383bec5937",
                "width": null
              }
            ],
            "name": "text me back",
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
            "snapshot_id": "MTYzMDU0MTI0MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcbAIldMQMIs/tracks",
              "total": 70
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcbAIldMQMIs"
          },
          {
            "collaborative": false,
            "description": "let the dj set u free",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXayr1BrK1OaY"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXayr1BrK1OaY",
            "id": "37i9dQZF1DXayr1BrK1OaY",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033faebef69151a01fbcce84f5",
                "width": null
              }
            ],
            "name": "crying on the dance floor",
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
            "snapshot_id": "MTYzMDU0MTI0MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXayr1BrK1OaY/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXayr1BrK1OaY"
          },
          {
            "collaborative": false,
            "description": "Deep beats to study to.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVtHcSjp0LID"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVtHcSjp0LID",
            "id": "37i9dQZF1DWVtHcSjp0LID",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036e9e12914e2dd3015a6b9455",
                "width": null
              }
            ],
            "name": "Deep Study",
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
            "snapshot_id": "MTYzMDU0MTI4NCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVtHcSjp0LID/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVtHcSjp0LID"
          },
          {
            "collaborative": false,
            "description": "Stay focused with electronic and trap beats.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX692WcMwL2yW"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX692WcMwL2yW",
            "id": "37i9dQZF1DX692WcMwL2yW",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000358db4ac7cd52e1a5b2c9d84b",
                "width": null
              }
            ],
            "name": "All-Nighter",
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
            "snapshot_id": "MTYyOTg4NzA5OCwwMDAwMDAzMDAwMDAwMTdiN2NkNzZkNTYwMDAwMDE3MGFmNDBhM2M0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX692WcMwL2yW/tracks",
              "total": 121
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX692WcMwL2yW"
          },
          {
            "collaborative": false,
            "description": "grab a blanket and get the good vibes going",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSP55jZj2ES3"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSP55jZj2ES3",
            "id": "37i9dQZF1DWSP55jZj2ES3",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034b069c78d4a772d877159c23",
                "width": null
              }
            ],
            "name": "park hangs",
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
            "snapshot_id": "MTYzMDU0MTI1OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSP55jZj2ES3/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWSP55jZj2ES3"
          },
          {
            "collaborative": false,
            "description": "Let these cozy songs comfort you like a warm blanket.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9UhtB5CtZ7e"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9UhtB5CtZ7e",
            "id": "37i9dQZF1DX9UhtB5CtZ7e",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003db8d8e85d04e8c3af5af0ea0",
                "width": null
              }
            ],
            "name": "Sunday Scaries",
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
            "snapshot_id": "MTYzMDU0MTI0MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9UhtB5CtZ7e/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9UhtB5CtZ7e"
          },
          {
            "collaborative": false,
            "description": "that's hot",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6MAQN3OnFEl"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6MAQN3OnFEl",
            "id": "37i9dQZF1DX6MAQN3OnFEl",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003efaa8836f4c2a308f5d3a71a",
                "width": null
              }
            ],
            "name": "y2k",
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
            "snapshot_id": "MTYzMDU0MTIzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6MAQN3OnFEl/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6MAQN3OnFEl"
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
            "snapshot_id": "MTYzMDU0MTI1OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWT5MrZnPU1zD/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWT5MrZnPU1zD"
          },
          {
            "collaborative": false,
            "description": "get from point a to point b in style, on or off campus. yo, omw.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8OR0U4UGusN"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8OR0U4UGusN",
            "id": "37i9dQZF1DX8OR0U4UGusN",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f588fcd4e476815ffa060e66",
                "width": null
              }
            ],
            "name": "omw",
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
            "snapshot_id": "MTYzMDU0MTIzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8OR0U4UGusN/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8OR0U4UGusN"
          },
          {
            "collaborative": false,
            "description": "when you give an indie kid the aux.... ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4Vd1jJ7X9H8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4Vd1jJ7X9H8",
            "id": "37i9dQZF1DX4Vd1jJ7X9H8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000327d0ea32c66ecbe7bcf1c384",
                "width": null
              }
            ],
            "name": "Soirée",
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
            "snapshot_id": "MTYzMDU0MTI0MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4Vd1jJ7X9H8/tracks",
              "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4Vd1jJ7X9H8"
          },
          {
            "collaborative": false,
            "description": "in a dim, dusty library, reading your novel, and thinking of that special someone",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0J6DFF0p3Vs"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0J6DFF0p3Vs",
            "id": "37i9dQZF1DX0J6DFF0p3Vs",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003262f74d58fd39d7b7d37c5b8",
                "width": null
              }
            ],
            "name": "Dark Academia Jazz",
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
            "snapshot_id": "MTYzMDU0MTI0MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0J6DFF0p3Vs/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0J6DFF0p3Vs"
          },
          {
            "collaborative": false,
            "description": "<a href=\"spotify:genre:space:electronica_chill\">Hypnotic electronic</a> for studies and a relax.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXLeA8Omikj7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLeA8Omikj7",
            "id": "37i9dQZF1DWXLeA8Omikj7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031df043181e0a5b20707ce3a9",
                "width": null
              }
            ],
            "name": "Brain Food",
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
            "snapshot_id": "MTYzMDU0MTI0MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLeA8Omikj7/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXLeA8Omikj7"
          },
          {
            "collaborative": false,
            "description": "Beats to relax, study, and focus...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn",
            "id": "37i9dQZF1DWWQRwui0ExPn",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003438f34cf05b98bd954900f8c",
                "width": null
              }
            ],
            "name": "lofi beats",
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
            "snapshot_id": "MTYzMDU0MTI1OSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn/tracks",
              "total": 600
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWQRwui0ExPn"
          },
          {
            "collaborative": false,
            "description": "Focus-enhancing piano for your study session.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8NTLI2TtZa6"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8NTLI2TtZa6",
            "id": "37i9dQZF1DX8NTLI2TtZa6",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000318e20d8d2bc7aa007d305e57",
                "width": null
              }
            ],
            "name": "Intense Studying",
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
            "snapshot_id": "MTYzMDQyMTU3OCwwMDAwMDA5ZDAwMDAwMTdiOWNiMmY0NjQwMDAwMDE2ZDE1NDYxNzE3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8NTLI2TtZa6/tracks",
              "total": 220
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8NTLI2TtZa6"
          },
          {
            "collaborative": false,
            "description": "The best mix of hip hop, pop, country, dance and classic anthems for the game day warm-up.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXZua9Shbhpk"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXZua9Shbhpk",
            "id": "37i9dQZF1DWXZua9Shbhpk",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037d68f82e20640bd69f55eb4d",
                "width": null
              }
            ],
            "name": "The Warm-Up",
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
            "snapshot_id": "MTYzMDU0MTI1MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXZua9Shbhpk/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXZua9Shbhpk"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "Beats to relax, study, and focus...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn",
            "id": "37i9dQZF1DWWQRwui0ExPn",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003438f34cf05b98bd954900f8c",
                "width": null
              }
            ],
            "name": "lofi beats",
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
            "snapshot_id": "MTYzMDU0MTMxOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn/tracks",
              "total": 600
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWQRwui0ExPn"
          },
          {
            "collaborative": false,
            "description": "Relax and indulge with beautiful piano pieces",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO",
            "id": "37i9dQZF1DX4sWSpwq3LiO",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6",
                "width": null
              }
            ],
            "name": "Peaceful Piano",
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
            "snapshot_id": "MTYzMDM5ODYxNywwMDAwMDEwMTAwMDAwMTdiOWI1NDk5NWQwMDAwMDE2ZDE1NTk1OTFk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO/tracks",
              "total": 377
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4sWSpwq3LiO"
          },
          {
            "collaborative": false,
            "description": "Soft jazz for all your activities.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWV7EzJMK2FUI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWV7EzJMK2FUI",
            "id": "37i9dQZF1DWV7EzJMK2FUI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c7059110f5a17c6a5c353e2a",
                "width": null
              }
            ],
            "name": "Jazz in the Background",
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
            "snapshot_id": "MTYzMDQwMTk4NSwwMDAwMDAzMTAwMDAwMTdiOWI4N2ZjZWEwMDAwMDE3MjdmMTFhYzhj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWV7EzJMK2FUI/tracks",
              "total": 173
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWV7EzJMK2FUI"
          },
          {
            "collaborative": false,
            "description": "Keep calm and focus with ambient and post-rock music.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZeKCadgRdKQ",
            "id": "37i9dQZF1DWZeKCadgRdKQ",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e4eadd417a05b2546e866934",
                "width": null
              }
            ],
            "name": "Deep Focus",
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
            "snapshot_id": "MTYyOTkwOTMzOCwwMDAwMDA5ZDAwMDAwMTdiN2UyYWM5NTIwMDAwMDE2ZDE1MWVmYjdj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZeKCadgRdKQ/tracks",
              "total": 201
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZeKCadgRdKQ"
          },
          {
            "collaborative": false,
            "description": "Unwind to these calm classical guitar pieces.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0jgyAiPl8Af"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0jgyAiPl8Af",
            "id": "37i9dQZF1DX0jgyAiPl8Af",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038ed1a5002b96c2ea882541b2",
                "width": null
              }
            ],
            "name": "Peaceful Guitar",
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
            "snapshot_id": "MTYyOTM4NDA2MywwMDAwMDA5YjAwMDAwMTdiNWVkYmJiMzAwMDAwMDE2ZDE1MzFlYjZl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0jgyAiPl8Af/tracks",
              "total": 210
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0jgyAiPl8Af"
          },
          {
            "collaborative": false,
            "description": "A soft musical backdrop for your studies.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9sIqqvKsjG8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9sIqqvKsjG8",
            "id": "37i9dQZF1DX9sIqqvKsjG8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035ec8c003898b36c6f73dfac7",
                "width": null
              }
            ],
            "name": "Instrumental Study",
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
            "snapshot_id": "MTYzMDQwNjIwNywwMDAwMDBjODAwMDAwMTdiOWJjODY5MmYwMDAwMDE2ZDE1MmUyZjA2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9sIqqvKsjG8/tracks",
              "total": 339
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9sIqqvKsjG8"
          },
          {
            "collaborative": false,
            "description": "Welcome to the soothing hum...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUZ5bk6qqDSy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUZ5bk6qqDSy",
            "id": "37i9dQZF1DWUZ5bk6qqDSy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035654f5615b2aec45465d0fd2",
                "width": null
              }
            ],
            "name": "White Noise",
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
            "snapshot_id": "MTYyOTM4MjUwNCwwMDAwMDAzZDAwMDAwMTdiNWVjM2YxNGUwMDAwMDE2ZDAwYzlhOWI5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUZ5bk6qqDSy/tracks",
              "total": 247
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUZ5bk6qqDSy"
          },
          {
            "collaborative": false,
            "description": "A calm piano soundtrack to all activities.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7K31D69s4M1"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7K31D69s4M1",
            "id": "37i9dQZF1DX7K31D69s4M1",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a461b85872ea87bb0de00128",
                "width": null
              }
            ],
            "name": "Piano in the Background",
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
            "snapshot_id": "MTYzMDQ4MzAwOCwwMDAwMDBkZjAwMDAwMTdiYTA1YzRkNjIwMDAwMDE2ZDE1MWU4NDk0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7K31D69s4M1/tracks",
              "total": 367
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7K31D69s4M1"
          },
          {
            "collaborative": false,
            "description": "Sounds of birds, rain, and jungle ambience.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4PP3DA4J0N8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4PP3DA4J0N8",
            "id": "37i9dQZF1DX4PP3DA4J0N8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000325679ec48f09bd70884d4184",
                "width": null
              }
            ],
            "name": "Nature Sounds",
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
            "snapshot_id": "MTYzMDQ5MTIzMiwwMDAwMDAzMTAwMDAwMTdiYTBkOWM5Y2UwMDAwMDE3MGFmNGJmNTBl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4PP3DA4J0N8/tracks",
              "total": 114
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4PP3DA4J0N8"
          },
          {
            "collaborative": false,
            "description": "<a href=\"spotify:genre:space:electronica_chill\">Hypnotic electronic</a> for studies and a relax.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXLeA8Omikj7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLeA8Omikj7",
            "id": "37i9dQZF1DWXLeA8Omikj7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031df043181e0a5b20707ce3a9",
                "width": null
              }
            ],
            "name": "Brain Food",
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
            "snapshot_id": "MTYzMDU0MTMwMCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLeA8Omikj7/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXLeA8Omikj7"
          },
          {
            "collaborative": false,
            "description": "Focus-enhancing piano for your study session.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8NTLI2TtZa6"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8NTLI2TtZa6",
            "id": "37i9dQZF1DX8NTLI2TtZa6",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000318e20d8d2bc7aa007d305e57",
                "width": null
              }
            ],
            "name": "Intense Studying",
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
            "snapshot_id": "MTYzMDQyMTU3OCwwMDAwMDA5ZDAwMDAwMTdiOWNiMmY0NjQwMDAwMDE2ZDE1NDYxNzE3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8NTLI2TtZa6/tracks",
              "total": 220
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8NTLI2TtZa6"
          },
          {
            "collaborative": false,
            "description": "The perfect study beats, twenty four seven.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8Uebhn9wzrS",
            "id": "37i9dQZF1DX8Uebhn9wzrS",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033ca17b400e47bb8a61ab73a1",
                "width": null
              }
            ],
            "name": "Chill Lofi Study Beats",
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
            "snapshot_id": "MTYzMDA4MTc3MywwMDAwMDA1NzAwMDAwMTdiODg3MWYxNDQwMDAwMDE3MGE0ZjU2OWYx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8Uebhn9wzrS/tracks",
              "total": 400
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8Uebhn9wzrS"
          },
          {
            "collaborative": false,
            "description": "Keep calm with instrumental acoustic tracks.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaImRpG7HXqp"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaImRpG7HXqp",
            "id": "37i9dQZF1DXaImRpG7HXqp",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000390b31bdc0f3a0ae203242fbc",
                "width": null
              }
            ],
            "name": "Calming Acoustic",
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
            "snapshot_id": "MTYyOTczMzU0NSwwMDAwMDAzZDAwMDAwMTdiNzNiMDY2MzYwMDAwMDE2ZDAwYzI3MGVk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaImRpG7HXqp/tracks",
              "total": 237
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaImRpG7HXqp"
          },
          {
            "collaborative": false,
            "description": "Enhance your concentration by traveling through different brainwave frequencies until you reach peak awareness in Gamma state.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7EF8wVxBVhG"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7EF8wVxBVhG",
            "id": "37i9dQZF1DX7EF8wVxBVhG",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037448863accf564174cdbd83d",
                "width": null
              }
            ],
            "name": "Binaural Beats: Focus",
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
            "snapshot_id": "MTYzMDQ4NTA3MiwwMDAwMDAyZjAwMDAwMTdiYTA3YmM5NGQwMDAwMDE3MGFmNDlhNmRh",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7EF8wVxBVhG/tracks",
              "total": 148
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7EF8wVxBVhG"
          },
          {
            "collaborative": false,
            "description": "Minimalism, electronica and modern classical to concentrate to.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3PFzdbtx1Us",
            "id": "37i9dQZF1DX3PFzdbtx1Us",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033466e2ac76e504f4131af598",
                "width": null
              }
            ],
            "name": "Music For Concentration",
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
            "snapshot_id": "MTYyNDc5MDczMSwwMDAwMDA0MzAwMDAwMTdhNGQxMzBjYWQwMDAwMDE3MTU5NmE4NDRj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3PFzdbtx1Us/tracks",
              "total": 90
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3PFzdbtx1Us"
          },
          {
            "collaborative": false,
            "description": "Uptempo instrumental hip hop beats.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZZbwlv3Vmtr"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZZbwlv3Vmtr",
            "id": "37i9dQZF1DWZZbwlv3Vmtr",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000317cb4ad5c7a15a159a06f0a7",
                "width": null
              }
            ],
            "name": "Focus Flow",
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
            "snapshot_id": "MTYyOTgwMDM3MCwwMDAwMDA0ODAwMDAwMTdiNzdhYzEyOGIwMDAwMDE3MGFmNDM4MjE0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZZbwlv3Vmtr/tracks",
              "total": 266
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZZbwlv3Vmtr"
          },
          {
            "collaborative": false,
            "description": "Beautiful scores to accompany your reading.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZwtERXCS82H"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZwtERXCS82H",
            "id": "37i9dQZF1DWZwtERXCS82H",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003849e8bffc67e744fdaec65f8",
                "width": null
              }
            ],
            "name": "Reading Soundtrack",
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
            "snapshot_id": "MTYzMDQ4NDQ3MCwwMDAwMDA5MDAwMDAwMTdiYTA3MjliZDcwMDAwMDE2ZDE1M2RjMzc3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZwtERXCS82H/tracks",
              "total": 374
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZwtERXCS82H"
          },
          {
            "collaborative": false,
            "description": "Instrumental house for when you need to focus!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8wtrGDH81Oa"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8wtrGDH81Oa",
            "id": "37i9dQZF1DX8wtrGDH81Oa",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f81ac7190e26998d9395edb4",
                "width": null
              }
            ],
            "name": "House Focus",
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
            "snapshot_id": "MTYyOTgxODU0MCwwMDAwMDAzYTAwMDAwMTdiNzhjMTUyMjkwMDAwMDE3NmZiNWZkOGVl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8wtrGDH81Oa/tracks",
              "total": 170
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8wtrGDH81Oa"
          },
          {
            "collaborative": false,
            "description": "Find your focus with instrumental jazz.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3SiCzCxMDOH"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3SiCzCxMDOH",
            "id": "37i9dQZF1DX3SiCzCxMDOH",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c23cc6248c9ece3b627f8813",
                "width": null
              }
            ],
            "name": "Jazz for Study",
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
            "snapshot_id": "MTYzMDQ4NTU5MywwMDAwMDA0YzAwMDAwMTdiYTA4M2JlMTcwMDAwMDE3MGM0OTg3ZjJk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3SiCzCxMDOH/tracks",
              "total": 126
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3SiCzCxMDOH"
          },
          {
            "collaborative": false,
            "description": "Calm music to help you focus on your reading.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXrDQedVqw6q"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXrDQedVqw6q",
            "id": "37i9dQZF1DWXrDQedVqw6q",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003982538cf59e50c94a71e5e41",
                "width": null
              }
            ],
            "name": "Reading Chill Out",
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
            "snapshot_id": "MTYyOTk3NDkyOCwwMDAwMDA1OTAwMDAwMTdiODIxMzliMmUwMDAwMDE3MGE3MDk1NzRm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXrDQedVqw6q/tracks",
              "total": 162
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXrDQedVqw6q"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "Beats to relax, study, and focus...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn",
            "id": "37i9dQZF1DWWQRwui0ExPn",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003438f34cf05b98bd954900f8c",
                "width": null
              }
            ],
            "name": "lofi beats",
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
            "snapshot_id": "MTYzMDU0MTMxOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn/tracks",
              "total": 600
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWQRwui0ExPn"
          },
          {
            "collaborative": false,
            "description": "Relax and indulge with beautiful piano pieces",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO",
            "id": "37i9dQZF1DX4sWSpwq3LiO",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6",
                "width": null
              }
            ],
            "name": "Peaceful Piano",
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
            "snapshot_id": "MTYzMDM5ODYxNywwMDAwMDEwMTAwMDAwMTdiOWI1NDk5NWQwMDAwMDE2ZDE1NTk1OTFk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO/tracks",
              "total": 377
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4sWSpwq3LiO"
          },
          {
            "collaborative": false,
            "description": "Soft jazz for all your activities.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWV7EzJMK2FUI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWV7EzJMK2FUI",
            "id": "37i9dQZF1DWV7EzJMK2FUI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c7059110f5a17c6a5c353e2a",
                "width": null
              }
            ],
            "name": "Jazz in the Background",
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
            "snapshot_id": "MTYzMDQwMTk4NSwwMDAwMDAzMTAwMDAwMTdiOWI4N2ZjZWEwMDAwMDE3MjdmMTFhYzhj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWV7EzJMK2FUI/tracks",
              "total": 173
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWV7EzJMK2FUI"
          },
          {
            "collaborative": false,
            "description": "Keep calm and focus with ambient and post-rock music.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZeKCadgRdKQ",
            "id": "37i9dQZF1DWZeKCadgRdKQ",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e4eadd417a05b2546e866934",
                "width": null
              }
            ],
            "name": "Deep Focus",
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
            "snapshot_id": "MTYyOTkwOTMzOCwwMDAwMDA5ZDAwMDAwMTdiN2UyYWM5NTIwMDAwMDE2ZDE1MWVmYjdj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZeKCadgRdKQ/tracks",
              "total": 201
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZeKCadgRdKQ"
          },
          {
            "collaborative": false,
            "description": "Unwind to these calm classical guitar pieces.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0jgyAiPl8Af"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0jgyAiPl8Af",
            "id": "37i9dQZF1DX0jgyAiPl8Af",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038ed1a5002b96c2ea882541b2",
                "width": null
              }
            ],
            "name": "Peaceful Guitar",
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
            "snapshot_id": "MTYyOTM4NDA2MywwMDAwMDA5YjAwMDAwMTdiNWVkYmJiMzAwMDAwMDE2ZDE1MzFlYjZl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0jgyAiPl8Af/tracks",
              "total": 210
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0jgyAiPl8Af"
          },
          {
            "collaborative": false,
            "description": "A soft musical backdrop for your studies.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9sIqqvKsjG8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9sIqqvKsjG8",
            "id": "37i9dQZF1DX9sIqqvKsjG8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035ec8c003898b36c6f73dfac7",
                "width": null
              }
            ],
            "name": "Instrumental Study",
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
            "snapshot_id": "MTYzMDQwNjIwNywwMDAwMDBjODAwMDAwMTdiOWJjODY5MmYwMDAwMDE2ZDE1MmUyZjA2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9sIqqvKsjG8/tracks",
              "total": 339
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9sIqqvKsjG8"
          },
          {
            "collaborative": false,
            "description": "Welcome to the soothing hum...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUZ5bk6qqDSy"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUZ5bk6qqDSy",
            "id": "37i9dQZF1DWUZ5bk6qqDSy",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035654f5615b2aec45465d0fd2",
                "width": null
              }
            ],
            "name": "White Noise",
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
            "snapshot_id": "MTYyOTM4MjUwNCwwMDAwMDAzZDAwMDAwMTdiNWVjM2YxNGUwMDAwMDE2ZDAwYzlhOWI5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUZ5bk6qqDSy/tracks",
              "total": 247
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUZ5bk6qqDSy"
          },
          {
            "collaborative": false,
            "description": "A calm piano soundtrack to all activities.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7K31D69s4M1"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7K31D69s4M1",
            "id": "37i9dQZF1DX7K31D69s4M1",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a461b85872ea87bb0de00128",
                "width": null
              }
            ],
            "name": "Piano in the Background",
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
            "snapshot_id": "MTYzMDQ4MzAwOCwwMDAwMDBkZjAwMDAwMTdiYTA1YzRkNjIwMDAwMDE2ZDE1MWU4NDk0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7K31D69s4M1/tracks",
              "total": 367
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7K31D69s4M1"
          },
          {
            "collaborative": false,
            "description": "Sounds of birds, rain, and jungle ambience.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4PP3DA4J0N8"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4PP3DA4J0N8",
            "id": "37i9dQZF1DX4PP3DA4J0N8",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000325679ec48f09bd70884d4184",
                "width": null
              }
            ],
            "name": "Nature Sounds",
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
            "snapshot_id": "MTYzMDQ5MTIzMiwwMDAwMDAzMTAwMDAwMTdiYTBkOWM5Y2UwMDAwMDE3MGFmNGJmNTBl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4PP3DA4J0N8/tracks",
              "total": 114
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4PP3DA4J0N8"
          },
          {
            "collaborative": false,
            "description": "<a href=\"spotify:genre:space:electronica_chill\">Hypnotic electronic</a> for studies and a relax.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXLeA8Omikj7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLeA8Omikj7",
            "id": "37i9dQZF1DWXLeA8Omikj7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031df043181e0a5b20707ce3a9",
                "width": null
              }
            ],
            "name": "Brain Food",
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
            "snapshot_id": "MTYzMDU0MTMwMCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXLeA8Omikj7/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXLeA8Omikj7"
          },
          {
            "collaborative": false,
            "description": "Focus-enhancing piano for your study session.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8NTLI2TtZa6"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8NTLI2TtZa6",
            "id": "37i9dQZF1DX8NTLI2TtZa6",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000318e20d8d2bc7aa007d305e57",
                "width": null
              }
            ],
            "name": "Intense Studying",
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
            "snapshot_id": "MTYzMDQyMTU3OCwwMDAwMDA5ZDAwMDAwMTdiOWNiMmY0NjQwMDAwMDE2ZDE1NDYxNzE3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8NTLI2TtZa6/tracks",
              "total": 220
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8NTLI2TtZa6"
          },
          {
            "collaborative": false,
            "description": "The perfect study beats, twenty four seven.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8Uebhn9wzrS",
            "id": "37i9dQZF1DX8Uebhn9wzrS",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033ca17b400e47bb8a61ab73a1",
                "width": null
              }
            ],
            "name": "Chill Lofi Study Beats",
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
            "snapshot_id": "MTYzMDA4MTc3MywwMDAwMDA1NzAwMDAwMTdiODg3MWYxNDQwMDAwMDE3MGE0ZjU2OWYx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8Uebhn9wzrS/tracks",
              "total": 400
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8Uebhn9wzrS"
          },
          {
            "collaborative": false,
            "description": "Keep calm with instrumental acoustic tracks.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaImRpG7HXqp"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaImRpG7HXqp",
            "id": "37i9dQZF1DXaImRpG7HXqp",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000390b31bdc0f3a0ae203242fbc",
                "width": null
              }
            ],
            "name": "Calming Acoustic",
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
            "snapshot_id": "MTYyOTczMzU0NSwwMDAwMDAzZDAwMDAwMTdiNzNiMDY2MzYwMDAwMDE2ZDAwYzI3MGVk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaImRpG7HXqp/tracks",
              "total": 237
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaImRpG7HXqp"
          },
          {
            "collaborative": false,
            "description": "Enhance your concentration by traveling through different brainwave frequencies until you reach peak awareness in Gamma state.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7EF8wVxBVhG"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7EF8wVxBVhG",
            "id": "37i9dQZF1DX7EF8wVxBVhG",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037448863accf564174cdbd83d",
                "width": null
              }
            ],
            "name": "Binaural Beats: Focus",
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
            "snapshot_id": "MTYzMDQ4NTA3MiwwMDAwMDAyZjAwMDAwMTdiYTA3YmM5NGQwMDAwMDE3MGFmNDlhNmRh",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7EF8wVxBVhG/tracks",
              "total": 148
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7EF8wVxBVhG"
          },
          {
            "collaborative": false,
            "description": "Minimalism, electronica and modern classical to concentrate to.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3PFzdbtx1Us",
            "id": "37i9dQZF1DX3PFzdbtx1Us",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033466e2ac76e504f4131af598",
                "width": null
              }
            ],
            "name": "Music For Concentration",
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
            "snapshot_id": "MTYyNDc5MDczMSwwMDAwMDA0MzAwMDAwMTdhNGQxMzBjYWQwMDAwMDE3MTU5NmE4NDRj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3PFzdbtx1Us/tracks",
              "total": 90
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3PFzdbtx1Us"
          },
          {
            "collaborative": false,
            "description": "Uptempo instrumental hip hop beats.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZZbwlv3Vmtr"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZZbwlv3Vmtr",
            "id": "37i9dQZF1DWZZbwlv3Vmtr",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000317cb4ad5c7a15a159a06f0a7",
                "width": null
              }
            ],
            "name": "Focus Flow",
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
            "snapshot_id": "MTYyOTgwMDM3MCwwMDAwMDA0ODAwMDAwMTdiNzdhYzEyOGIwMDAwMDE3MGFmNDM4MjE0",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZZbwlv3Vmtr/tracks",
              "total": 266
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZZbwlv3Vmtr"
          },
          {
            "collaborative": false,
            "description": "Beautiful scores to accompany your reading.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZwtERXCS82H"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZwtERXCS82H",
            "id": "37i9dQZF1DWZwtERXCS82H",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003849e8bffc67e744fdaec65f8",
                "width": null
              }
            ],
            "name": "Reading Soundtrack",
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
            "snapshot_id": "MTYzMDQ4NDQ3MCwwMDAwMDA5MDAwMDAwMTdiYTA3MjliZDcwMDAwMDE2ZDE1M2RjMzc3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZwtERXCS82H/tracks",
              "total": 374
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZwtERXCS82H"
          },
          {
            "collaborative": false,
            "description": "Instrumental house for when you need to focus!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8wtrGDH81Oa"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8wtrGDH81Oa",
            "id": "37i9dQZF1DX8wtrGDH81Oa",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f81ac7190e26998d9395edb4",
                "width": null
              }
            ],
            "name": "House Focus",
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
            "snapshot_id": "MTYyOTgxODU0MCwwMDAwMDAzYTAwMDAwMTdiNzhjMTUyMjkwMDAwMDE3NmZiNWZkOGVl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8wtrGDH81Oa/tracks",
              "total": 170
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX8wtrGDH81Oa"
          },
          {
            "collaborative": false,
            "description": "Find your focus with instrumental jazz.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3SiCzCxMDOH"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3SiCzCxMDOH",
            "id": "37i9dQZF1DX3SiCzCxMDOH",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c23cc6248c9ece3b627f8813",
                "width": null
              }
            ],
            "name": "Jazz for Study",
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
            "snapshot_id": "MTYzMDQ4NTU5MywwMDAwMDA0YzAwMDAwMTdiYTA4M2JlMTcwMDAwMDE3MGM0OTg3ZjJk",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3SiCzCxMDOH/tracks",
              "total": 126
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3SiCzCxMDOH"
          },
          {
            "collaborative": false,
            "description": "Calm music to help you focus on your reading.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXrDQedVqw6q"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXrDQedVqw6q",
            "id": "37i9dQZF1DWXrDQedVqw6q",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003982538cf59e50c94a71e5e41",
                "width": null
              }
            ],
            "name": "Reading Chill Out",
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
            "snapshot_id": "MTYyOTk3NDkyOCwwMDAwMDA1OTAwMDAwMTdiODIxMzliMmUwMDAwMDE3MGE3MDk1NzRm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXrDQedVqw6q/tracks",
              "total": 162
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXrDQedVqw6q"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "New releases, driving the current. Cover: Baby Keem and Kendrick Lamar",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVgsJtp58d1t"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVgsJtp58d1t",
            "id": "37i9dQZF1DWVgsJtp58d1t",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d440a70d5de2cbf833dfb3d6",
                "width": null
              }
            ],
            "name": "This is Frequency",
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
            "snapshot_id": "MTYzMDQ4MDc5NiwwMDAwMDAyMTAwMDAwMTdiYTAzYThiOTEwMDAwMDE3YmEwMjI3MjIz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVgsJtp58d1t/tracks",
              "total": 61
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVgsJtp58d1t"
          },
          {
            "collaborative": false,
            "description": "Independent and emerging music breaking waves.  Cover, Kari Faux.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5qjSia2PLFP"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5qjSia2PLFP",
            "id": "37i9dQZF1DX5qjSia2PLFP",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033d0ce103bced864513d138c4",
                "width": null
              }
            ],
            "name": "Ripple Effect",
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
            "snapshot_id": "MTYzMDQ5NTk4NSwwMDAwMDAxNDAwMDAwMTdiYTEyMjRmNTkwMDAwMDE3YmEwNDYxYzgx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5qjSia2PLFP/tracks",
              "total": 62
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5qjSia2PLFP"
          },
          {
            "collaborative": false,
            "description": "Keeping the party going where ever you are. Curated by Soca or Die! for Carnival 2021. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaaLM83puGG5"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaaLM83puGG5",
            "id": "37i9dQZF1DXaaLM83puGG5",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000358d3eeaf69ccc1eb02b3029e",
                "width": null
              }
            ],
            "name": "House Party",
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
            "snapshot_id": "MTYzMDQ5MjU0MCwwMDAwMDAwNDAwMDAwMTdiYTBlZGJmZGMwMDAwMDE3YWZhMjNlMDI5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaaLM83puGG5/tracks",
              "total": 52
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaaLM83puGG5"
          },
          {
            "collaborative": false,
            "description": "From pop culture to financial wellness, stay tapped in w/ these podcasts episodes every week. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVu3lAQuOIjU"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVu3lAQuOIjU",
            "id": "37i9dQZF1DWVu3lAQuOIjU",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e5c8ea5915f21f2ab1de56e8",
                "width": null
              }
            ],
            "name": "Heard You",
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
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDAxNjAwMDAwMTdiODVjNDljY2QwMDAwMDE3OTg2Mjk1ZjNj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVu3lAQuOIjU/tracks",
              "total": 5
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVu3lAQuOIjU"
          },
          {
            "collaborative": false,
            "description": "California music breaking waves. Cover, Baby Keem. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX7q1woBjoKv7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7q1woBjoKv7",
            "id": "37i9dQZF1DX7q1woBjoKv7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038199e847dba624598ba2ec3d",
                "width": null
              }
            ],
            "name": "Ripple Effect: Bay to LA ",
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
            "snapshot_id": "MTYzMDQ4OTc1MywwMDAwMDAwYzAwMDAwMTdiYTBjMzM2NGEwMDAwMDE3YmEwYzFjNmVi",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX7q1woBjoKv7/tracks",
              "total": 57
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX7q1woBjoKv7"
          },
          {
            "collaborative": false,
            "description": "DMV music breaking waves. Cover, Butch Dawson. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWNlm4v5v5Qw"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWNlm4v5v5Qw",
            "id": "37i9dQZF1DWWNlm4v5v5Qw",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ee1936095bae4db92ea6b8e6",
                "width": null
              }
            ],
            "name": "Ripple Effect: DMV",
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
            "snapshot_id": "MTYzMDQ4ODkwNiwwMDAwMDAxYjAwMDAwMTdiYTBiNjQ5OWIwMDAwMDE3YmEwYTMyYTA1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWNlm4v5v5Qw/tracks",
              "total": 59
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWNlm4v5v5Qw"
          },
          {
            "collaborative": false,
            "description": "Texas music breaking waves. Cover, Monaleo. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4ve1H90mNWg"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4ve1H90mNWg",
            "id": "37i9dQZF1DX4ve1H90mNWg",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000037d91e73e464306476cbef669",
                "width": null
              }
            ],
            "name": "Ripple Effect: Texas",
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
            "snapshot_id": "MTYzMDQ5MjI3MCwwMDAwMDAwOTAwMDAwMTdiYTBlOWExNDYwMDAwMDE3YjJkNzZjNzVl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4ve1H90mNWg/tracks",
              "total": 51
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4ve1H90mNWg"
          },
          {
            "collaborative": false,
            "description": "The sound of bounce, curated by Big Freedia.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXzvsDswCrbR"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXzvsDswCrbR",
            "id": "37i9dQZF1DWXzvsDswCrbR",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003917326be94ab7b34e5d7d204",
                "width": null
              }
            ],
            "name": "The Sound of Bounce",
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
            "snapshot_id": "MTYxMzUxODc5MCwwMDAwMDAwNjAwMDAwMTc3YWQzNmRlN2IwMDAwMDE3N2FkMmU4ZWQ3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXzvsDswCrbR/tracks",
              "total": 22
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXzvsDswCrbR"
          },
          {
            "collaborative": false,
            "description": "Bounce to the Brick City sound. From New Jersey to the world. Cover: UNIIQU3.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXajwQAxzrT4Q"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXajwQAxzrT4Q",
            "id": "37i9dQZF1DXajwQAxzrT4Q",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032ac1ae6b2317b6ee1ac41450",
                "width": null
              }
            ],
            "name": "Jersey Club Heat",
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
            "snapshot_id": "MTYyOTIxMTUwNCwwMDAwMDAzMzAwMDAwMTdiNTQ5MmIxMWEwMDAwMDE3YTNiNzc4ZmYw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXajwQAxzrT4Q/tracks",
              "total": 106
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXajwQAxzrT4Q"
          },
          {
            "collaborative": false,
            "description": "The powerful, expressive sound of Ballroom and Vogue culture - pioneered by the black LGBTQIA+ community. Cover: Cakes da Killa",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX147VuwpqwJX"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX147VuwpqwJX",
            "id": "37i9dQZF1DX147VuwpqwJX",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e8733dd044cc816a5de961e5",
                "width": null
              }
            ],
            "name": "The Ballroom (Vogue)",
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
            "snapshot_id": "MTYyNjQwODAwMCwwMDAwMDAxNjAwMDAwMTdhYWQ3ODlhZDgwMDAwMDE3YWFjNDc3NTUz",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX147VuwpqwJX/tracks",
              "total": 84
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX147VuwpqwJX"
          },
          {
            "collaborative": false,
            "description": "Detroit <a href=\"spotify:genre:techno\">Techno</a> Essentials. Remembering K-HAND.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1GT5IIzDqMe"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1GT5IIzDqMe",
            "id": "37i9dQZF1DX1GT5IIzDqMe",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f011915c281f49f43653a596",
                "width": null
              }
            ],
            "name": "Detroit Techno",
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
            "snapshot_id": "MTYzMDU0MTU2NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1GT5IIzDqMe/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1GT5IIzDqMe"
          },
          {
            "collaborative": false,
            "description": "The Midwest is always on time. Cover: Babyface Ray",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX91gZ5XTbTPm"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX91gZ5XTbTPm",
            "id": "37i9dQZF1DX91gZ5XTbTPm",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000371233a3ad5d198d0af07df10",
                "width": null
              }
            ],
            "name": "CST",
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
            "snapshot_id": "MTYzMDM0NzQzMiwwMDAwMDNiYTAwMDAwMTdiOTg0NzkyMmMwMDAwMDE3YjJkMmQ1NzU2",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX91gZ5XTbTPm/tracks",
              "total": 53
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX91gZ5XTbTPm"
          },
          {
            "collaborative": false,
            "description": "Can you keep up? Get moving to the rapid rhythms of Footwork & Juke, originating in 1990s Chicago. Cover: DJ Manny",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3nNRJvSufrk"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3nNRJvSufrk",
            "id": "37i9dQZF1DX3nNRJvSufrk",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034c9c5a007f2a54965ad653a1",
                "width": null
              }
            ],
            "name": "Footwork/Juke",
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
            "snapshot_id": "MTYzMDU0MTU1NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3nNRJvSufrk/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3nNRJvSufrk"
          },
          {
            "collaborative": false,
            "description": "The raw, bass-trembling energy of Bmore Club. A selection of classic and new tracks. Cover: DJ K-Swift",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWrKm37olqYM"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWrKm37olqYM",
            "id": "37i9dQZF1DWWrKm37olqYM",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038a78e52de95be8344cb8e250",
                "width": null
              }
            ],
            "name": "Baltimore Club",
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
            "snapshot_id": "MTYwODg0MDM3OCwwMDAwMDAwYTAwMDAwMTc2OTY1YmY3YmUwMDAwMDE3M2VlYzgwZmM5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWrKm37olqYM/tracks",
              "total": 60
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWrKm37olqYM"
          },
          {
            "collaborative": false,
            "description": "The tracks heating up the continent right now! Cover: <a href=\"https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp?si=46dT2yUbRGClbRZFY8YxOw&dl_branch=1\">WizKid</a>  ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYkaDif7Ztbp"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYkaDif7Ztbp",
            "id": "37i9dQZF1DWYkaDif7Ztbp",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039c73e44679c5263e29cd798a",
                "width": null
              }
            ],
            "name": "African Heat",
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
            "snapshot_id": "MTYzMDAxNTIwMCwwMDAwMDIwZTAwMDAwMTdiODQ3YTFiYjIwMDAwMDE3YjgyODMwZTYx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYkaDif7Ztbp/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYkaDif7Ztbp"
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
            "description": "Kes takes over Massive Soca Hits for Carnival 2021",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWW7BONj8RiqI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWW7BONj8RiqI",
            "id": "37i9dQZF1DWW7BONj8RiqI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031f8f84b7fc7e801ce150c0e1",
                "width": null
              }
            ],
            "name": "Massive Soca Hits",
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
            "snapshot_id": "MTYyOTk2OTEwOSwwMDAwMDAxZjAwMDAwMTdiODFiYWQyMjQwMDAwMDE3YWY4MmNhYmQy",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWW7BONj8RiqI/tracks",
              "total": 42
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWW7BONj8RiqI"
          },
          {
            "collaborative": false,
            "description": "Harry Pinero  & Henrie add some sauce to Who We Be for Notting Hill Carnival 2021",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcDoDDetPsEg"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcDoDDetPsEg",
            "id": "37i9dQZF1DXcDoDDetPsEg",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003002b5404b647ae46b8e1a6aa",
                "width": null
              }
            ],
            "name": "Who We Be",
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
            "snapshot_id": "MTYzMDAxOTIxMiwwMDAwMDMzNjAwMDAwMTdiODRiNzUzYzUwMDAwMDE3YjgxYzlmZWFj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcDoDDetPsEg/tracks",
              "total": 88
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcDoDDetPsEg"
          },
          {
            "collaborative": false,
            "description": "The biggest Amapiano singles making waves in South Africa and beyond... Cover: <a href=\"https://open.spotify.com/artist/0GMM9vgCLkEfMle3KaJyxy?si=GXKl9C2UQ3yYwHTevGCPbg&dl_branch=1\">Emotionz DJ</a>",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5mILnBJLA26"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5mILnBJLA26",
            "id": "37i9dQZF1DX5mILnBJLA26",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003bdac64cb72473dc69657cfd4",
                "width": null
              }
            ],
            "name": "AmaPiano Grooves",
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
            "snapshot_id": "MTYzMDM5MzY2OSwwMDAwMDJlYzAwMDAwMTdiOWIwOTE5MTkwMDAwMDE3YjVkZGNiYjc4",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5mILnBJLA26/tracks",
              "total": 85
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5mILnBJLA26"
          },
          {
            "collaborative": false,
            "description": "As novidades e o melhor do afrobeat brasileiro / The best Afrobeat tracks from the other side of the Atlantic. Foto: Abayomy Afrobeat Orquestra",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZRikY0FPE3z"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZRikY0FPE3z",
            "id": "37i9dQZF1DWZRikY0FPE3z",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003af28f42841880c11f8005f58",
                "width": null
              }
            ],
            "name": "Afrobeat Brasil",
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
            "snapshot_id": "MTYxMTg4OTI2MCwwMDAwMDAwNjAwMDAwMTc3NGMxNjM2ZTEwMDAwMDE3NzRiMzZhYWY3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZRikY0FPE3z/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWZRikY0FPE3z"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "Beats to relax, study, and focus...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn",
            "id": "37i9dQZF1DWWQRwui0ExPn",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003438f34cf05b98bd954900f8c",
                "width": null
              }
            ],
            "name": "lofi beats",
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
            "snapshot_id": "MTYzMDU0MTYxOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn/tracks",
              "total": 600
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWQRwui0ExPn"
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
            "description": "Country music to get you back to the basics.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTkxQvqMy4WW"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTkxQvqMy4WW",
            "id": "37i9dQZF1DWTkxQvqMy4WW",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f5b078962d37890234b76125",
                "width": null
              }
            ],
            "name": "Chillin' on a Dirt Road",
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
            "snapshot_id": "MTYzMDU0MTYyMCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTkxQvqMy4WW/tracks",
              "total": 80
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTkxQvqMy4WW"
          },
          {
            "collaborative": false,
            "description": "Kick back to the best new and recent chill tunes.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4WYpdgoIcn6",
            "id": "37i9dQZF1DX4WYpdgoIcn6",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003cf8e264c6a92e245402ecb7a",
                "width": null
              }
            ],
            "name": "Chill Hits",
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
            "snapshot_id": "MTYzMDU0MTYxOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4WYpdgoIcn6/tracks",
              "total": 130
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4WYpdgoIcn6"
          },
          {
            "collaborative": false,
            "description": "Grab your coffee and ease into the day with this light blend.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXcgZcN2HVMoe"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcgZcN2HVMoe",
            "id": "37i9dQZF1DXcgZcN2HVMoe",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000340e6ba6a7be34cbcc0219f69",
                "width": null
              }
            ],
            "name": "Morning Coffee",
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
            "snapshot_id": "MTYzMDU0MTY2MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXcgZcN2HVMoe/tracks",
              "total": 250
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXcgZcN2HVMoe"
          },
          {
            "collaborative": false,
            "description": "Just chill...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX889U0CL85jj",
            "id": "37i9dQZF1DX889U0CL85jj",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000321aab90a9c6d10ccca8d6c78",
                "width": null
              }
            ],
            "name": "Chill Vibes",
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
            "snapshot_id": "MTYzMDA5ODk0NSwwMDAwMDE3NzAwMDAwMTdiODk3N2Y1MDcwMDAwMDE3MTA5YzRjYzQx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX889U0CL85jj/tracks",
              "total": 209
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX889U0CL85jj"
          },
          {
            "collaborative": false,
            "description": "Soft jazz for all your activities.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWV7EzJMK2FUI"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWV7EzJMK2FUI",
            "id": "37i9dQZF1DWV7EzJMK2FUI",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003c7059110f5a17c6a5c353e2a",
                "width": null
              }
            ],
            "name": "Jazz in the Background",
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
            "snapshot_id": "MTYzMDQwMTk4NSwwMDAwMDAzMTAwMDAwMTdiOWI4N2ZjZWEwMDAwMDE3MjdmMTFhYzhj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWV7EzJMK2FUI/tracks",
              "total": 173
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWV7EzJMK2FUI"
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
            "snapshot_id": "MTYzMDU0MTY2MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4VvfRBFClxm/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4VvfRBFClxm"
          },
          {
            "collaborative": false,
            "description": "Gentle instrumental covers of known songs.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX9j444F9NCBa"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9j444F9NCBa",
            "id": "37i9dQZF1DX9j444F9NCBa",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003498556d3f15a0b5284caeac6",
                "width": null
              }
            ],
            "name": "Calming Instrumental Covers",
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
            "snapshot_id": "MTYyOTM4MzY5NCwwMDAwMDA1MjAwMDAwMTdiNWVkNjE5ZjkwMDAwMDE3MGM0YTYxOGIw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX9j444F9NCBa/tracks",
              "total": 111
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX9j444F9NCBa"
          },
          {
            "collaborative": false,
            "description": "No need to stress out. Stay relaxed with these easy, upbeat songs.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWT7XSlwvR1ar"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWT7XSlwvR1ar",
            "id": "37i9dQZF1DWT7XSlwvR1ar",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031a9c145d6c6a8bbe4844e28c",
                "width": null
              }
            ],
            "name": "Totally Stress Free",
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
            "snapshot_id": "MTYzMDU0MTYyMCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWT7XSlwvR1ar/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWT7XSlwvR1ar"
          },
          {
            "collaborative": false,
            "description": "Softer kinda <a href=\"spotify:genre:edm_dance\">dance</a>.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6VdMW310YC7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6VdMW310YC7",
            "id": "37i9dQZF1DX6VdMW310YC7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e90bb6612cfbd77d87343ac2",
                "width": null
              }
            ],
            "name": "Chill Tracks",
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
            "snapshot_id": "MTYzMDU0MTY2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6VdMW310YC7/tracks",
              "total": 303
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6VdMW310YC7"
          },
          {
            "collaborative": false,
            "description": "Chilled songs that you are familiar with - no surprises!",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWYWddJiPzbvb"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYWddJiPzbvb",
            "id": "37i9dQZF1DWYWddJiPzbvb",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a86f06fb337166fc5047efee",
                "width": null
              }
            ],
            "name": "Comfort Zone",
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
            "snapshot_id": "MTYzMDU0MTY2MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWYWddJiPzbvb/tracks",
              "total": 200
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWYWddJiPzbvb"
          },
          {
            "collaborative": false,
            "description": "The original chill instrumental beats playlist.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0SM0LYsmbMT",
            "id": "37i9dQZF1DX0SM0LYsmbMT",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000033462a4dbc851cd106d16491c",
                "width": null
              }
            ],
            "name": "Jazz Vibes",
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
            "snapshot_id": "MTYzMDU0MTY2MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0SM0LYsmbMT/tracks",
              "total": 300
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0SM0LYsmbMT"
          },
          {
            "collaborative": false,
            "description": "Mellow songs from the 2010s. Cover: Lorde.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1uHCeFHcn8X"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1uHCeFHcn8X",
            "id": "37i9dQZF1DX1uHCeFHcn8X",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035fad3420aae3c55406052bd1",
                "width": null
              }
            ],
            "name": "Soft 10s",
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
            "snapshot_id": "MTYzMDU0MTYxOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1uHCeFHcn8X/tracks",
              "total": 250
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1uHCeFHcn8X"
          },
          {
            "collaborative": false,
            "description": "The most calming classical music.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVFeEut75IAL"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVFeEut75IAL",
            "id": "37i9dQZF1DWVFeEut75IAL",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e07b7f297e4f3eab77ee9ef4",
                "width": null
              }
            ],
            "name": "Calming Classical",
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
            "snapshot_id": "MTYyNTQ3NjI3MCwwMDAwMDAzZDAwMDAwMTdhNzVlZjg4ZTIwMDAwMDE3MTBjNGM3YzAx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVFeEut75IAL/tracks",
              "total": 68
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWVFeEut75IAL"
          },
          {
            "collaborative": false,
            "description": "Kick back with a chill collection of iconic acoustics and new tracks with that classic feel. Cover: Joni Mitchell",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX504r1DvyvxG"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX504r1DvyvxG",
            "id": "37i9dQZF1DX504r1DvyvxG",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003eb558aac31dae07d289ac83d",
                "width": null
              }
            ],
            "name": "Classic Acoustic",
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
            "snapshot_id": "MTYzMDU0MTY2MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX504r1DvyvxG/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX504r1DvyvxG"
          },
          {
            "collaborative": false,
            "description": "Let your worries and cares slip away...",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWU0ScTcjJBdj",
            "id": "37i9dQZF1DWU0ScTcjJBdj",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000031932c7ea794e72d82b10692c",
                "width": null
              }
            ],
            "name": "Relax & Unwind",
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
            "snapshot_id": "MTYzMDAzNjg2MCwwMDAwMDA3ODAwMDAwMTdiODVjNDljZjYwMDAwMDE3MzQ5YzY0NGU3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWU0ScTcjJBdj/tracks",
              "total": 113
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWU0ScTcjJBdj"
          },
          {
            "collaborative": false,
            "description": "Unwind to these calm classical guitar pieces.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0jgyAiPl8Af"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0jgyAiPl8Af",
            "id": "37i9dQZF1DX0jgyAiPl8Af",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000038ed1a5002b96c2ea882541b2",
                "width": null
              }
            ],
            "name": "Peaceful Guitar",
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
            "snapshot_id": "MTYyOTM4NDA2MywwMDAwMDA5YjAwMDAwMTdiNWVkYmJiMzAwMDAwMDE2ZDE1MzFlYjZl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0jgyAiPl8Af/tracks",
              "total": 210
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0jgyAiPl8Af"
          },
          {
            "collaborative": false,
            "description": "Soak up these laid-back jams. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX83I5je4W4rP"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX83I5je4W4rP",
            "id": "37i9dQZF1DX83I5je4W4rP",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034ea7333e8967dd2b1f368e42",
                "width": null
              }
            ],
            "name": "Beach Vibes",
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
            "snapshot_id": "MTYzMDU0MTY2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX83I5je4W4rP/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX83I5je4W4rP"
          },
          {
            "collaborative": false,
            "description": "Drink up these tunes and all the feels. Good vibes only.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6ALfRKlHn1t"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6ALfRKlHn1t",
            "id": "37i9dQZF1DX6ALfRKlHn1t",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000036a08b40c2fdab55289b0c41f",
                "width": null
              }
            ],
            "name": "Soak Up the Sun",
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
            "snapshot_id": "MTYzMDAxMTU4NSwwMDAwMDQxMDAwMDAwMTdiODQ0MmY0M2EwMDAwMDE2ZDAwYzcyNjJj",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6ALfRKlHn1t/tracks",
              "total": 120
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX6ALfRKlHn1t"
          }
        ],
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
        "playlist": [
          {
            "collaborative": false,
            "description": "We made you a personalized playlist with songs to take you back in time.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1EuASJuWrpqxZC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EuASJuWrpqxZC",
            "id": "37i9dQZF1EuASJuWrpqxZC",
            "images": [
              {
                "height": null,
                "url": "https://daily-mix.scdn.co/covers/time-capsule/time-capsule-blue_LARGE-en.jpg",
                "width": null
              }
            ],
            "name": "Your Time Capsule",
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
            "snapshot_id": "MTYzMDU0MDgwMCwwMDAwMDAwMDkzMmZlNjUzYmM1NmQ5MWUzODlkZTkxNDM4ZDY2ZjI5",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1EuASJuWrpqxZC/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1EuASJuWrpqxZC"
          },
          {
            "collaborative": false,
            "description": "The biggest songs of the 1980s. Cover: ABBA.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4UtSsGT1Sbe",
            "id": "37i9dQZF1DX4UtSsGT1Sbe",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ac6103c84d0edfbe3c3de545",
                "width": null
              }
            ],
            "name": "All Out 80s",
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
            "snapshot_id": "MTYzMDU0MjAzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4UtSsGT1Sbe/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4UtSsGT1Sbe"
          },
          {
            "collaborative": false,
            "description": "The biggest songs of the 2000s.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4o1oenSJRJd"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4o1oenSJRJd",
            "id": "37i9dQZF1DX4o1oenSJRJd",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003159f97f6f1514349a38e76a6",
                "width": null
              }
            ],
            "name": "All Out 00s",
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
            "snapshot_id": "MTYzMDU0MjAzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4o1oenSJRJd/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX4o1oenSJRJd"
          },
          {
            "collaborative": false,
            "description": "Celebrating 30 years of Ten by Pearl Jam. ",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1rVvRgjX59F"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1rVvRgjX59F",
            "id": "37i9dQZF1DX1rVvRgjX59F",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f0000000360464e254b19264afa11cbd7",
                "width": null
              }
            ],
            "name": "90s Rock Anthems",
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
            "snapshot_id": "MTYzMDAxNTMyMCwwMDAwMDAxZjAwMDAwMTdiODQ3YmYwNTgwMDAwMDE3YjExNWY1YTAx",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1rVvRgjX59F/tracks",
              "total": 152
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1rVvRgjX59F"
          },
          {
            "collaborative": false,
            "description": "The biggest songs of the 1990s.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbTxeAdrVG2l"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbTxeAdrVG2l",
            "id": "37i9dQZF1DXbTxeAdrVG2l",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e66d92af4b1c3da385d4a6a1",
                "width": null
              }
            ],
            "name": "All Out 90s",
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
            "snapshot_id": "MTYzMDU0MjA4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbTxeAdrVG2l/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXbTxeAdrVG2l"
          },
          {
            "collaborative": false,
            "description": "The biggest songs of the 1970s. Cover: Yusuf / Cat Stevens.\n",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTJ7xPn4vNaz"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTJ7xPn4vNaz",
            "id": "37i9dQZF1DWTJ7xPn4vNaz",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032dd46ed1f55f97d29b864cf7",
                "width": null
              }
            ],
            "name": "All Out 70s",
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
            "snapshot_id": "MTYzMDU0MjAzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTJ7xPn4vNaz/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWTJ7xPn4vNaz"
          },
          {
            "collaborative": false,
            "description": "The biggest songs of the 2010s.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5Ejj0EkURtP"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5Ejj0EkURtP",
            "id": "37i9dQZF1DX5Ejj0EkURtP",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034cf851c6451d33904f979a77",
                "width": null
              }
            ],
            "name": "All Out 10s",
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
            "snapshot_id": "MTYzMDU0MjA4OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5Ejj0EkURtP/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX5Ejj0EkURtP"
          },
          {
            "collaborative": false,
            "description": "These songs rocked the 80s. Cover: AC/DC.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1spT6G94GFC"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1spT6G94GFC",
            "id": "37i9dQZF1DX1spT6G94GFC",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003ce8fedf893dfb22cf1bf7d96",
                "width": null
              }
            ],
            "name": "80s Rock Anthems",
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
            "snapshot_id": "MTYyNjQ0MTAyMCwwMDAwMDAwZDAwMDAwMTdhYWY3MDc1Y2YwMDAwMDE3NTQ1MDA5ZWMw",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1spT6G94GFC/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1spT6G94GFC"
          },
          {
            "collaborative": false,
            "description": "These songs rocked the 00s. Cover: Linkin Park",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3oM43CtKnRV"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3oM43CtKnRV",
            "id": "37i9dQZF1DX3oM43CtKnRV",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000032cdb0982697cc0ae43b1b5b6",
                "width": null
              }
            ],
            "name": "00s Rock Anthems",
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
            "snapshot_id": "MTYxNzgyNjkxNywwMDAwMDAxMjAwMDAwMTc4YWRmZmFjMmIwMDAwMDE3MGM0YzVhMDY1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3oM43CtKnRV/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3oM43CtKnRV"
          },
          {
            "collaborative": false,
            "description": "All of the classic hits from the 50s and 60s.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX56bqlsMxJYR"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX56bqlsMxJYR",
            "id": "37i9dQZF1DX56bqlsMxJYR",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a419f6051d1a6a4dfabbdc6f",
                "width": null
              }
            ],
            "name": "Classic Oldies",
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
            "snapshot_id": "MTYzMDU0MjAzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX56bqlsMxJYR/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX56bqlsMxJYR"
          },
          {
            "collaborative": false,
            "description": "These songs rocked the 70s. Cover: <a href=\"spotify:artist:1dfeR4HaWDbWqFHLkxsg1d\">Queen</a>",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWWwzidNQX6jx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWwzidNQX6jx",
            "id": "37i9dQZF1DWWwzidNQX6jx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003561ca573ea307c49bacadf06",
                "width": null
              }
            ],
            "name": "70s Rock Anthems",
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
            "snapshot_id": "MTYzMDU0MjA4OCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWWwzidNQX6jx/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWWwzidNQX6jx"
          },
          {
            "collaborative": false,
            "description": "The biggest songs of the 1960s.\n",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaKIA8E7WcJj"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaKIA8E7WcJj",
            "id": "37i9dQZF1DXaKIA8E7WcJj",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003a3b8a48577f6e624564d453a",
                "width": null
              }
            ],
            "name": "All Out 60s",
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
            "snapshot_id": "MTYzMDU0MjA4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaKIA8E7WcJj/tracks",
              "total": 150
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXaKIA8E7WcJj"
          },
          {
            "collaborative": false,
            "description": "A decade full of 00s country hits! Cover: Keith Urban, Carrie Underwood, Kenny Chesney",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdxUH6sNtcDe"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdxUH6sNtcDe",
            "id": "37i9dQZF1DXdxUH6sNtcDe",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000030f89886755bdd709f0bd6e10",
                "width": null
              }
            ],
            "name": "2000s Country",
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
            "snapshot_id": "MTYzMDU0MjA4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdxUH6sNtcDe/tracks",
              "total": 125
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXdxUH6sNtcDe"
          },
          {
            "collaborative": false,
            "description": "Third Eye Blind-ed by the 90s / Cover: Third Eye Blind",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX3YMp9n8fkNx"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3YMp9n8fkNx",
            "id": "37i9dQZF1DX3YMp9n8fkNx",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003f1a9cfa02fd2a05ccf4fc89e",
                "width": null
              }
            ],
            "name": "90s Pop Rock Essentials",
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
            "snapshot_id": "MTYyNzA2MDkzMywwMDAwMDAyMzAwMDAwMTdhZDQ2Mzk1NTEwMDAwMDE2ZDE1MzMwNDY1",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX3YMp9n8fkNx/tracks",
              "total": 100
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX3YMp9n8fkNx"
          },
          {
            "collaborative": false,
            "description": "Mellow songs from the 2010s. Cover: Lorde.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1uHCeFHcn8X"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1uHCeFHcn8X",
            "id": "37i9dQZF1DX1uHCeFHcn8X",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000035fad3420aae3c55406052bd1",
                "width": null
              }
            ],
            "name": "Soft 10s",
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
            "snapshot_id": "MTYzMDU0MjA0MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1uHCeFHcn8X/tracks",
              "total": 250
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX1uHCeFHcn8X"
          },
          {
            "collaborative": false,
            "description": "Rewind and unwind with sirens of the seventies and eighties.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0JKUIfwQSJh"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0JKUIfwQSJh",
            "id": "37i9dQZF1DX0JKUIfwQSJh",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000034e0be6cade5bd732df4ddc32",
                "width": null
              }
            ],
            "name": "70s & 80s Acoustic",
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
            "snapshot_id": "MTYzMDU0MjA4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0JKUIfwQSJh/tracks",
              "total": 60
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX0JKUIfwQSJh"
          },
          {
            "collaborative": false,
            "description": "The most memorable country hits from the 2010's. Cover: Miranda Lambert, Luke Bryan and Jason Aldean.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXdiK4WAVRUW"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXdiK4WAVRUW",
            "id": "37i9dQZF1DWXdiK4WAVRUW",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003e5a3bb0260aaf546544ca88b",
                "width": null
              }
            ],
            "name": "2010s Country",
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
            "snapshot_id": "MTYzMDU0MjA4MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXdiK4WAVRUW/tracks",
              "total": 200
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWXdiK4WAVRUW"
          },
          {
            "collaborative": false,
            "description": "Instant classics from yesteryear to now in one sweet mix.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWUH2AzNQzWua"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUH2AzNQzWua",
            "id": "37i9dQZF1DWUH2AzNQzWua",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003b77b201d9d5b9e1db7f63066",
                "width": null
              }
            ],
            "name": "Acoustic Hits: Oldies but Goodies",
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
            "snapshot_id": "MTYzMDU0MjA0MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWUH2AzNQzWua/tracks",
              "total": 50
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DWUH2AzNQzWua"
          },
          {
            "collaborative": false,
            "description": "Hair goals, spandex and epic guitar solos. We got you. Celebrating the life and legacy of Eddie Van Halen.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX68H8ZujdnN7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX68H8ZujdnN7",
            "id": "37i9dQZF1DX68H8ZujdnN7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f000000039205ddd6990d57d56db91b81",
                "width": null
              }
            ],
            "name": "’80s Hard Rock",
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
            "snapshot_id": "MTYwMjE2Njc5NywwMDAwMDAyODAwMDAwMTc1MDg5NTM0NWYwMDAwMDE3NTA0ZDUzMGE3",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX68H8ZujdnN7/tracks",
              "total": 104
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX68H8ZujdnN7"
          },
          {
            "collaborative": false,
            "description": "The most unforgettable love songs from the 80s.",
            "external_urls": {
              "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXc3KygMa1OE7"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXc3KygMa1OE7",
            "id": "37i9dQZF1DXc3KygMa1OE7",
            "images": [
              {
                "height": null,
                "url": "https://i.scdn.co/image/ab67706f00000003d42319ba9b08e1c4c420ce20",
                "width": null
              }
            ],
            "name": "80s Love Songs",
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
            "snapshot_id": "MTYyODg2NjU3MCwwMDAwMDAyZjAwMDAwMTdiNDAwMzZhMTQwMDAwMDE3MGM0YWMyNTBm",
            "tracks": {
              "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXc3KygMa1OE7/tracks",
              "total": 55
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DXc3KygMa1OE7"
          }
        ],
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
  // 💀 Genre strip HTML
  const genresHtml = genres.map(genre => {
    if(genre.playlist)
      return <div className="genre"
      onClick={()=>{
          expandView();
          let playlistTracks = genre.playlist;

          // 💀 Playlist Tracks - COMPONENT
          const playlistTracksHtmlTemp = playlistTracks.map(track => {
            return <TrackSmallThumbnail track={track}/>
          })
          // 📦 setSTATE Playlist Track markup
          setPlaylistTracksHtml(playlistTracksHtmlTemp)
          
      }}>
        <div className="genre-icon" style={{backgroundImage: `url(${genre.icons[0].url})`}}></div>
        {genre.name}
      </div>
    else{
      console.log(genre)
      debugger
    }
  })

  const genresHtml2 = genres.map(() => {
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
