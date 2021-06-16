  let data = ["bat","can","tip","fan","hit","new","oak","sad","tie","joy"]
  let imgs = ["./images/bat.jpg",
              "./images/can.png",
              "./images/tip.jpg",
              "./images/fan.jpg",
              "./images/hit.jpg",
              "./images/new (1).jpg",
              "./images/oak.jpg",
              "./images/sad.jpg",
              "./images/tie.jpg",
              "./images/joy.jpg",]
        
        let num = 0;
        let num2 =0;
        let h2 = document.getElementById("h2");
        let h1 =document.getElementById("h1")
        let but = document.getElementById("but2")
        but.addEventListener("click",function(){
            let img = document.getElementById("img")
            let inpu = document.getElementById("inpu").value;
            if(inpu == data[num]){
                num++;
                num2++;
                h1.innerHTML = data[num] ;
                img.src = imgs[num];
                h2.innerHTML = num2;
            }if( h1.style.display = "block"){
                h1.style.display = "none";

        }
        })
        let count = 0;
        let cou = document.getElementById("count");


        setInterval(run,1000)
        function run(){

            count = count + 1;
            cou.innerHTML= count;
            console.log(count)
        }
        let but1 = document.getElementById("but1");
        but1.addEventListener("click",function(){
            if(num2 >= 3){
                h1.style.display = "block";
                num2 = num2 - 3;
            }else(
                alert("you score must be greater then 3")
            )
        })
        let play = document.getElementById("play");
        let rel = localStorage.getItem('player');
        play.innerHTML += rel ;
