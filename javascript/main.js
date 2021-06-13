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
        let h2 = document.getElementById("h2");
        let h1 =document.querySelector("h1")
        let but = document.getElementById("but")
        but.addEventListener("click",function(){
            let img = document.getElementById("img")
            let inpu = document.getElementById("inpu").value;
            if(inpu == data[num]){
                num++;
                h1.innerHTML = data[num];
                img.src = imgs[num];
                h2.innerHTML = num;
            } 
        })
        let count = 0;
        let cou= document.getElementById("count");


        setInterval(run,1000)
        function run(){

            count = count + 1;
            cou.innerHTML= count;
            console.log(count)
        }