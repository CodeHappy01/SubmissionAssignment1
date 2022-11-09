// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//variables for button

const btn = document.getElementById('btn');

let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

function changeBackground(color) {
    document.body.style.background = color;
}
//Changes button color when clicked, shows video and text
function play1() {
    var frame = document.getElementById("youtube-frame");
    var welp = document.getElementById("welp");
    frame.innerHTML += "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    welp.innerHTML += "<p>Welp... you did it. Just make sure you don't press it again or... well.... go ahead....</p>";

    btn.style.backgroundColor = colors[index];
    btn.style.color = 'white';

    index = index >= colors.length - 1 ? 0 : index + 1;

    video.style.visibility = "visible";

    changeBackground('red');
}