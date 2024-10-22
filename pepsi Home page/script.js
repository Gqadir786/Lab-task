document.addEventListener('DOMContentLoaded' , ()=>{
    const blueButton  = document.getElementById('blue_btn');
    const redButton  = document.getElementById('red_btn');
    const grayButton  = document.getElementById('gray_btn');
    const mainButton = document.getElementById('btnFirst');
    const image = document.getElementById('image');
    
    blueButton.addEventListener('click' , ()=>{
        document.body.style.backgroundColor = "rgb(7, 84, 198)";
        image.src = "blue2.png";
        mainButton.style.backgroundColor = "rgb(7, 84, 198)";
    
    })
    
    redButton.addEventListener('click' , ()=>{
        document.body.style.backgroundColor = "red";
        image.src = "red2.png";
        mainButton.style.backgroundColor = "red";
    })
    
    grayButton.addEventListener('click' , ()=>{
        document.body.style.backgroundColor = "gray";
        image.src = "gray.png";
        mainButton.style.backgroundColor = "gray";
    })

})
