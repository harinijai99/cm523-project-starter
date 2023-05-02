let btn = document.getElementById('choosebutton');


btn.addEventListener('click',function randomImg() {

 let links = [
        { 
          text: "Engaging in physical fitness",
          description: "Pure Barre Fitness",
          location:  "http://www.purebarre.com/location-search",
        },
        {
          text: "Learning a new creative skill",
          description: "Skillshare",
          location:  "https://www.skillshare.com/en/browse?coupon=GOOGNBEN30DAYSFREE&utm_source=Google&utm_medium=paidsearch&utm_campaign=Croud_Search_Google_US_US_EN_BOF_Non-Brand&utm_term=&matchtype=&gclid=Cj0KCQjw6cKiBhD5ARIsAKXUdyZS0Z1aDVK_CwROgxo8DnP2oLTj4iSt0gf1FP-kiYGK4RbFQxRmAdYaAt7mEALw_wcB ",
        },
{
          text: "Building a self care routine",
          description: "A self care checklist ",
          location:  "https://www.missteapositive.com/blog/daily-self-care-checklist-self-care-101-for-beginners",
        },
{
          text: "Volunteer for a cause you believe in",
          description: "Volunteer Match,",
          location:  "https://www.volunteermatch.org/",
        },
{
          text: "Volunteer for a cause you believe in",
          description: "Volunter world ",
          location:  "https://www.volunteerworld.com/en/volunteer-abroad/united-states-of-america",
        },
        {
          text: "Engaging in community activities ",
          description: "All events in - discover events happening in and around your city",
          location:  "https://allevents.in/",
        },
        {
          text: "Engaging in community activities ",
          description: "Band is in town - Discover local music playing near you",
          location:  "https://bandsintown.com/",
        },
        {
          text: "Learning a new language",
          description: "Duolingo",
          location:  "https://www.duolingo.com/ ",
        },
      ];
      let link = links[Math.floor(Math.random() * links.length)];
      document.getElementById("alink").innerHTML =
        '<p>' + link.text + '</p>' + 
        '<a href="' + link.location + '">' + link.description + '</a>';
    } );