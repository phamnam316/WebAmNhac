const song = document.querySelector('.song')
const playButton = document.querySelector('.play-btn');
const playForward = document.querySelector('.forward-btn');
const playBackward = document.querySelector('.backward-btn')
const current = document.querySelector('#start');
const fullTime = document.querySelector('#end');
const rangeBar = document.querySelector('.seek_slider');
const shuffle = document.querySelector('.shuffle-btn');
const repeat = document.querySelector('.repeat-btn');
const musicImage = document.querySelector('.track-art');
const musicTitle = document.querySelector('.title');
const musicArtist = document.querySelector('.artist');

let indexSong =0;
let isRepeat = false;

repeat.addEventListener("click", function () {
    if (isRepeat) {
        isRepeat = false;
        repeat.style.color = "#ffffff";
    } else {
        isRepeat = true;
        repeat.style.color = "#00bffe";
    } 
})
// const playlist = ["Chimsau.mp3", "EKuro.mp3" , "starwalkin.mp3"];
const playlist = [
    {
        id:"1",
        name:"Chim sau",
        artist: "MCK",
        music: "Chimsau.mp3",
        img: "./Img/1200x1200bb.jpg"
    },
    {
        id:"2",
        name:"EKuro",
        artist: "Makushi",
        music: "Ekuro.mp3",
        img: "./Img/maxresdefault.jpg"
    },
    {
        id:"3",
        name:"Star Walkin'",
        artist: "Lil Nas X",
        music: "starwalkin.mp3",
        img: "./Img/starwalkin.jpg"
    }
]
song.setAttribute("src", `./Music/${playlist[indexSong].music}`);



playForward.addEventListener("click", function() {
    changeSong('next');
});
playBackward.addEventListener("click", function() {
    changeSong('back');
});

song.addEventListener("ended", handleEndSong)
function handleEndSong() {
    if (isRepeat) {
        isPlaying = true;   
        playPause();
    } else changeSong('next');
}

function changeSong(dir) {
    if (dir === 'next') {
        // next song
        indexSong++;
        if(indexSong >= playlist.length) {
            indexSong = 0;
        }
        isPlaying=true;
    } else if (dir === 'back') {
        // previous song
        indexSong--;
        if(indexSong < 0) {
            indexSong = 0;
        }
        isPlaying=true;
    }
    song.setAttribute("src", `./Music/${playlist[indexSong].music}`);
    musicImage.setAttribute("src", playlist[indexSong].img);
    musicTitle.textContent = playlist[indexSong].name;
    musicArtist.textContent = playlist[indexSong].artist;
    playPause();
}

let isPlaying = true;
playButton.addEventListener("click", playPause);

function playPause() {
    if(isPlaying) {
        song.play();
        playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`
        isPlaying = false;
    } else {
        song.pause();
        playButton.innerHTML = `<i class="fas fa-play"></i>`
        isPlaying = true;
    }
}

function formatTime(number) {
    const minute = Math.floor(number /60);
    const second = Math.floor(number - minute * 60)

    return `${minute} : ${second < 10 ? "0" + second : second}`
}
function displayTime () {
    const {duration, currentTime} = song;
    rangeBar.max = duration;
    rangeBar.value = currentTime;
    current.textContent = formatTime(currentTime);
    if (!duration) {
        fullTime.textContent = "00:00";
    } else {
        fullTime.textContent = formatTime(duration);
    }
    
    // } else fullTime.textContent = duration;

}
displayTime();
setInterval(displayTime,1000);

rangeBar.addEventListener("change", changeRange);
function changeRange() {
    const {duration, currentTime} = song;
    song.currentTime = rangeBar.value;
}

