let btn = document.getElementById('Randombutton');


btn.addEventListener('click',function randomImg() {

 let links = [
        { 
          text: "Rainy Indie Afternoon Music",
          spotify:  "https://open.spotify.com/playlist/3XZa6C8tc7njNXn2PWRwQs?go=1&sp_cid=768b00b2-bcb6-4b3b-aac3-23d3a76a7fc3&utm_source=embed_player_p&utm_medium=desktop&nd=1"
        },
        {
          text: "Acoustic Coffee Club",
          spotify:  "https://open.spotify.com/playlist/09a4ki7f0XxNzyTPwusWkJ?go=1&sp_cid=768b00b2-bcb6-4b3b-aac3-23d3a76a7fc3&utm_source=embed_player_p&utm_medium=desktop&nd=1",
        },
{
          text: "Calm Mornings",
          spotify:  "https://open.spotify.com/playlist/1RjJHvZ6FVsgdo4EDsbIEL?go=1&sp_cid=768b00b2-bcb6-4b3b-aac3-23d3a76a7fc3&utm_source=embed_player_p&utm_medium=desktop&nd=1",
        },
{
          text: "Anti Anxiety Playlist",
          spotify:  "https://open.spotify.com/playlist/37i9dQZF1EIg42NGihn0NZ",
        },
{
          text: "Autumn Coffee Shop",
          spotify:  "https://open.spotify.com/playlist/4Ls1pL9aRI082hMQT8VJcC",
        },
        {
          text: "Atmospheric Calm",
          spotify:  "https://open.spotify.com/playlist/37i9dQZF1DX4TnpT6vw5rE?go=1&sp_cid=768b00b2-bcb6-4b3b-aac3-23d3a76a7fc3&utm_source=embed_player_p&utm_medium=desktop&nd=1",
        },
        {
          text: "Forest Vibes",
          spotify:  "https://open.spotify.com/playlist/7ztCGMKJMU8tmTcos4EC1l",
        },
        {
          text: "Comforting Classics",
          spotify:  "https://open.spotify.com/playlist/2xXxYdGx5OvmmwupUQsaGZ",
        },
      ];
      let link = links[Math.floor(Math.random() * links.length)];
      document.getElementById("link").innerHTML =
        '<p>' + link.text + '</p>' +
        '<a href="' + link.spotify + '">' + 'Spotify ' + '</a>';
    } );


