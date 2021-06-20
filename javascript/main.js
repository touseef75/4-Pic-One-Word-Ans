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
        let sco = 0;
        let end = 0;

        let score = document.getElementById("score");
        let h1 =document.getElementById("h1")
        let but = document.getElementById("but2")
        but.addEventListener("click",function(){
            let img = document.getElementById("img")
            let inpu = document.getElementById("inpu").value;
            if(inpu == data[num]){
                num++;
                sco++;
                end = end + 1;
                h1.innerHTML = data[num] ;
                img.src = imgs[num];
                score.innerHTML = sco;
                console.log(end)
            }else if(end == 9){
                alert("finish")
             let win = document.getElementById("win");
             win.innerHTML = rel + "<br>" + "congrates you win";
            }
             if( h1.style.display = "block"){
                h1.style.display = "none";
        }
        })
        // timer logic
        let count = 0;
        let cou = document.getElementById("count");
        setInterval(run,1000)
        function run(){
            if(end <= 9){
                count = count + 1;
                cou.innerHTML= count;
            }else{
                clearInterval(run)
            }
            
        }
        // hint logic
        let but1 = document.getElementById("but1");
        but1.addEventListener("click",function(){
            if(sco >= 3){
                h1.style.display = "block";
                sco = sco - 3;
            }else(
                alert("you score must be greater then 3")
            )
        })
        // get data from local storage
        let play = document.getElementById("play");
        let rel = localStorage.getItem('player');
        play.innerHTML += rel ;
