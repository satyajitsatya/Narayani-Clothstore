let maincontainer = document.getElementById("main-container");
let productcontainer = document.getElementById("product-container");
let slider1 = document.getElementById("slider1")
let slider2 = document.getElementById("slider2")
let slider3 = document.getElementById("slider3")
let pasize = document.getElementById("asize")
let pacolor = document.getElementById("acolor")
let ptype = document.getElementById("type")
// let pcolor = document.getElementById("color")
let pfabric = document.getElementById("fabric")
let ppattern = document.getElementById("pattern")
let psleeve = document.getElementById("sleeve")
console.log("script is asicuted succesfully")




let pcard = document.querySelectorAll(".product-card");
pcard.forEach((value)=>{
    value.addEventListener("click",()=>{
        console.log(value.childnodess)
        let imgsrc1 = value.childNodes[1].src;
        let imgsrc2 = value.childNodes[3].src;
        let imgsrc3 = value.childNodes[5].src;
        let asize = value.childNodes[9].innerHTML;
        let acolor = value.childNodes[11].innerHTML;
        let type = value.childNodes[13].innerText;
        // let color = value.childNodes[15].innerText;
        let fabric = value.childNodes[15].innerText;
        let pattern = value.childNodes[17].innerText;
        let sleeve = value.childNodes[19].innerText;
        

        slider1.src = imgsrc1;
        slider2.src = imgsrc2;
        slider3.src = imgsrc3;
       ptype.innerText = type;
       pasize.innerHTML = asize;
       pacolor.innerHTML = acolor;
      //  pcolor.innerText = color;
       pfabric.innerText = fabric;
       ppattern.innerText =pattern;
       psleeve.innerText = sleeve;
       
        maincontainer.style.display="none"
        productcontainer.style.display="inline"
        // console.log(value.childNodes)
        // console.log(imgsrc1,imgsrc2,imgsrc3,asize,type,fabric,sleeve)
    })
})
let button1= document.getElementById("control-button1")
let button2= document.getElementById("control-button2")
button1.addEventListener("click",()=>{
  button1.className="carousel-control-prev-icon"
  button2.className="carousel-control-next-icon"
})
button2.addEventListener("click",()=>{
  button2.className="carousel-control-next-icon"
  button1.className="carousel-control-prev-icon"
})

