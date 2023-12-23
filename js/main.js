var container = document.querySelector(".container");

var arr = [
    {
        img:"./images/irsad.jpeg",
        title:"Irsad",
        text:"% 1, 3, 6 ayliq oz qiymetine",
    },
    {
        img:"./images/maxi.png",
        title:"Maxi.az",
        text:"% 6 ayliq oz qiymetine",
    },
    {
        img:"./images/starbucks.jpeg",
        title:"Starbucks",
        text:"% 3ayliq oz qiymetine",
    },
    {
        img:"./images/rayban.png",
        title:"RayBan",
        text:"% 12 ayliq oz qiymetine",
    },
    {
        img:"./images/nike.jpeg",
        title:"Nike",
        text:"% 1, 3, 6 ayliq oz qiymetine",
    },
    {
        img:"./images/levis.jpeg",
        title:"Levi's",
        text:"% 1, 3, 6 ayliq oz qiymetine",
    },
    {
        img:"./images/koton.jpeg",
        title:"Koton",
        text:"% 1, 3, 6 ayliq oz qiymetine",
    },
    {
        img:"./images/paul.png",
        title:"Pull & Bear",
        text:"% 1, 3, 6 ayliq oz qiymetine",
    },
    {
        img:"./images/irsad.jpeg",
        title:"Irsad",
        text:"% 1, 3, 6 ayliq oz qiymetine",
    },
    {
        img:"./images/maxi.png",
        title:"Maxi.az",
        text:"%  6 ayliq oz qiymetine",
    },
    {
        img:"./images/starbucks.jpeg",
        title:"Starbucks",
        text:"% 3 ayliq oz qiymetine",
    },
    {
        img:"./images/rayban.png",
        title:"RayBan",
        text:"% 12 ayliq oz qiymetine",
    },

    
];


arr.forEach(element=>{
     var div = document.createElement('div');
     div.classList.add('div');
     container.appendChild(div);


     var img = document.createElement('img');
     img.classList.add('image');
     img.src = element.img;
     div.appendChild(img);


    var title = document.createElement('h3');
     title.classList.add('title');
     title.textContent = element.title;
     div.appendChild(title);


    var  text = document.createElement('p');
     text.classList.add('text');
     text.textContent = element.text;
     div.appendChild(text);


});
