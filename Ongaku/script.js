let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let song4 = document.getElementById("song4");
let song5 = document.getElementById("song5");

const played = document.getElementById("played");

let curr_song = document.getElementById("curr_song");


// btn_element.addEventListener("click", () => {
//     document.body.style.backgroundColor = "red";
//   })


song1.onclick = () => {
    curr_song.innerHTML = "Anti-Hero";
    
    let item = document.createElement('li');
    item.textContent = "Anti-Hero";
    audio.src = "https://upload.wikimedia.org/wikipedia/en/a/a4/Anti-Hero_by_Taylor_Swift_%28audio%29.ogg";

    played.appendChild(item);
    audio.play();
}
song2.onclick = () => {
    curr_song.innerHTML = "A&W";
    let item = document.createElement('li');
    item.textContent = "A&W";
    played.appendChild(item);
}
song3.onclick = () => {
    curr_song.innerHTML = "Daydreamin'";
    let item = document.createElement('li');
    item.textContent = "Daydreamin'";
    played.appendChild(item);
}
song4.onclick = () => {
    curr_song.innerHTML = "Woman";
    let item = document.createElement('li');
    item.textContent = "Woman";
    played.appendChild(item);
}
song5.onclick = () => {
    curr_song.innerHTML = "Sunflower";
    let item = document.createElement('li');
    item.textContent = "Sunflower";
    played.appendChild(item);
}
