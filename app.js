document.body.style.border = "5px solid red";
console.log("**********************")
let imageLink = document.querySelectorAll('a');

// let anchor = imageLink.getAttribute('rel')
// let anchor = document.imageLink.childNodes;

// console.log(anchor)
// console.log(imageLink[10])
let image = document.createElement('img');


image.style.display = 'none'
image.style.margin = 'auto'
image.style.top='50%'
image.style.zIndex = 99

image.style.height = '80%'
image.style.width = '80%'
image.style.border = '2px solid black'
image.style.padding = '5px'
image.style.backgroundColor = '#f5f5f5f5'



for(let i=0;i< imageLink.length;i++){
    if(imageLink[i].getAttribute('rel') === "noopener nofollow ugc"){
        console.log(imageLink[i])
        if(imageLink[i].getAttribute('href').includes('.jpg')){
            imageLink[i].onmouseover = () =>{
                image.src =  imageLink[i].getAttribute('href')
                image.style.display = 'block'
                imageLink[i].appendChild(image)
            imageLink[i].onmouseout = () => {
                image.style.display = 'none'
            }
            }
        }else if(imageLink[i].getAttribute('href').includes('.png')){
            imageLink[i].onmouseover = () =>{
                image.src = imageLink[i].getAttribute('href')
                image.style.display = 'block'
                imageLink[i].appendChild(image)
            }
            imageLink[i].onmouseout = () => {
                image.style.display = 'none'
            }
        }
    }
}