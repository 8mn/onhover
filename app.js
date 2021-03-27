document.body.style.border = "5px solid red";
console.log("fuck you!")
let imageLink = document.querySelectorAll('a');

// let anchor = imageLink.getAttribute('rel')
// let anchor = document.imageLink.childNodes;

// console.log(anchor)
console.log(imageLink[10])


for(let i=0;i< imageLink.length;i++){
    if(imageLink[i].getAttribute('rel') === "noopener nofollow ugc"){
        console.log(imageLink[i])
    }else{
        console.log("Nope")
    }
}

