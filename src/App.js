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
