document.body.style.border = "5px solid red";
console.log("**********************")
let imageLink = document.querySelectorAll('a');

// let anchor = imageLink.getAttribute('rel')
// let anchor = document.imageLink.childNodes;

// console.log(anchor)
// console.log(imageLink[10])
let image = document.createElement('img')

let src = ''

image.style.display = 'none'
image.style.margin = 'auto'
image.setAttribute('src') = src



for(let i=0;i< imageLink.length;i++){
    if(imageLink[i].getAttribute('rel') === "noopener nofollow ugc"){
        // console.log(imageLink[i])
        if(imageLink[i].getAttribute('href').includes('.jpg')){
            // console.log("#################")
            imageLink[i].onmouseover = function(){
                alert("hii")
                src = imageLink.getAttribute('href')
                image.style.display = 'block'
            }
            // console.log(imageLink[i])
        }else if(imageLink[i].getAttribute('href').includes('.png')){
            imageLink[i].onmouseover = function(){
                alert("hii")
                src = imageLink.getAttribute('href')
                image.style.display = 'block'
            }
        }
    }
}

