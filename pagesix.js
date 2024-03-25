var move = {
    up: () => {
        if(index==0||index==1||index==2){
            index++
        } else if (index==3) {
            index = 0;
        }
    },
    down: () => {
        if(index==3||index==2||index==1){
            index--
        } else if (index==0) {
            index = 3;
        }
    }
}

var screens = [
    {
        img: "https://i1.wp.com/countrysquire.co.uk/wp-content/uploads/2020/10/x.jpeg?resize=1024%2C683&ssl=1",
        title: "Lack of Service and Employment",
        paragraph: "&nbsp;&nbsp;&nbsp;&nbsp;Rural areas lack important types of service. Health service, community, broadband, etc. They also lack employment opportunities. Most rural areas are dependent on the industry of farming, and farming only. Really, that's your only choice.",
        color: "rgba(80, 0, 0, 0.397)"
    },
    {
        img: "https://www.midwestfarmreport.com/wp-content/uploads/2021/04/rural-school-scaled.jpg",
        title: "Education",
        paragraph: "The quality of educatuon in Rural areas is at an extreme low. Small, and very few schools that lack good educators, and even money. In fact, most of the U.S.A.'s poorest counties happen to be rural.",
        color: "rgba(188, 186, 39, 0.34)"
    },
    {
        img: "https://www.goodfreephotos.com/albums/other-photos/tractor-on-farm.jpg",
        title: "Time and Stretched Self-Dependency",
        paragraph: "Those who live in rural areas are basically required to have farming skills. The convueincy of having a grocery store 5 minutes away from them may simply not be an option. Taking all the time to grow your own food, though may come with better quality, can be very time consuming and labor inducing.",
        color: "rgba(32, 119, 138, 0.34)"
    },
    {
        img: "https://www.comedydriving.com/wp-content/uploads/2012/02/Rural-Driving-FB.jpg",
        title: "Distance",
        paragraph: "Say you really do need to go to the grocery store. Just for that, it might take 45 minutes to get there by car. Thinking about going to the movie theatre? Be prepared to drive an amazing 1 hour and 30 minutes.",
        color: "rgba(16, 76, 23, 0.34)"
    }
]

var index = 0;

setInterval(function(){
    console.log(index);
    document.querySelector("[screentitle]").innerHTML = screens[index].title;
    document.querySelector("[screenparagraph]").innerHTML = screens[index].paragraph;
    document.querySelector("[screen]").style.backgroundColor = screens[index].color;
    document.querySelector("[screenimage]").src = screens[index].img;
}, 4.3)