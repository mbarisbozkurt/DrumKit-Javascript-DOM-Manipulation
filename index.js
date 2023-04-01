//annimation
function animation(key)
{
    var activeButton = document.querySelector("." + key); //".w" gibi
    activeButton.classList.add("pressed"); //efekt vermek için o butona styles.css'deki pressed'i classList'e ekle

    //efekti kaldır
    setTimeout(
        function()
        {
            activeButton.classList.remove("pressed");
        }, 100 //0.1 ms 
    )
}


//sound
function makeSound(key)
{
    //this.style.color ="white"; //***this = <button class="w drum">w</button>, bu butona "click" uygulandığında white olsun diye
    if(key === "w") //button tagının içeriği "w" ise
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }

    if(key === "a")
    {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }

    if(key === "s")
    {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }

    if(key === "d")
    {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }

    if(key === "j")
    {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }

    if(key === "k")
    {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }

    if(key === "l")
    {
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play();
    }
}

//click
var numOfButtons = document.querySelectorAll(".drum").length;
for(i = 0; i < numOfButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener
    ("click", 
        function()
        {
            makeSound(this.innerHTML);
            animation(this.innerHTML);
        }
    );
}

//keyboard
document.addEventListener
("keydown",
    function(event)
    {
        makeSound(event.key);
        animation(event.key);
    }
);

