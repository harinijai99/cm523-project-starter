let btn = document.getElementById('Randombutton');


btn.addEventListener('click',function randomImg() {

 let links = [
        { 
          text: "Playlist 1",
          spotify:  "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
        },
        {
          text: "Playlist 2",
          spotify:  "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ",
        },
{
          text: "Playlist 3",
          spotiify:  "https://open.spotify.com/playlist/37i9dQZF1DX9sIqqvKsjG8",
        },
{
          text: "Playlist 4",
          spotify:  "https://open.spotify.com/playlist/37i9dQZF1DWT5lkChsPmpy",
        },
{
          text: "Playlist 5",
          spotify:  "https://open.spotify.com/playlist/37i9dQZF1DWZZbwlv3Vmtr",
        },
        {
          text: "Playlist 6",
          spotify:  "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U",
        },
      ];
      let link = links[Math.floor(Math.random() * links.length)];
      document.getElementById("link").innerHTML =
        '<p>' + link.text + '</p>' +
        '<a href="' + link.spotify + '">' + 'Spotify ' + '</a>';
    } );


