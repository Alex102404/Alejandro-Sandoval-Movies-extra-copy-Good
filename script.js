let imageUrs=[];
let imageContainer=document.querySelector("#Place1");
// Declare your genre arrays here
let zombier=["https://resizing.flixster.com/kJ4b906QdQHz__5Drl7fK8N1ytI=/206x305/v2/https://flxt.tmsimg.com/assets/p3946_p_v8_ad.jpg","https://resizing.flixster.com/6jHBgB_YrZ9RFKgR6hA13BbXedQ=/206x305/v2/https://flxt.tmsimg.com/assets/p9264983_p_v8_ab.jpg","https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_.jpg"];
let horror=["https://m.media-amazon.com/images/M/MV5BMTY2ODc2NTQ2OF5BMl5BanBnXkFtZTYwNzA4OTU3._V1_.jpg","https://www.flickeringmyth.com/wp-content/uploads/2020/08/host_quadshudder_mr.jpg","https://is5-ssl.mzstatic.com/image/thumb/U6cpeuFdzMIB2mX7GIltFA/1200x675mf.jpg"];

let action=["https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg","https://www.thebroadtheater.com/wp-content/uploads/2023/03/john_wick_chapter_four.jpg"];
// Make sure to declare your HTML elements as variables! 
let button1=document.querySelector(".submit");
let button2=document.querySelector(".suggest");

button1.onclick=function(){
let input1 = document.querySelector(".input1").value;
    let Mostrar= document.querySelector(".Mostrar");
    Mostrar.innerHTML = ""; 
    if (input1 ==="Zombie" || input1 ==="zombie") {
        for (let url of zombier) {
            let img = "<img src=" + url + ">";
            Mostrar.insertAdjacentHTML("beforeend", img);}}
            else if(input1==="horror"|| input1==="Horror"){for (let url of horror){ let img ="<img src="+url+">";
                                                                                Mostrar.insertAdjacentHTML("beforeend", img);}}
                                                                                   else if(input1==="action" || input1==="Action"){for (let url of action){ let img="<img src="+url+">";
Mostrar.insertAdjacentHTML("beforeend",img);                                                                 
                
        }
    } 
};
button2.onclick=function(){{let input2=document.querySelector(".input2").value;
                                 
  imageUrs.push(input2);
                                 let img = "<img src=" +input2+ ">";
  imageContainer.insertAdjacentHTML("beforeend", img);

                                                              
}
    
};
