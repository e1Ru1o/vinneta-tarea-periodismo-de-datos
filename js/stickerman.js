var names = ["Ciencia de la computacion", "Economia", "Fisica", "Derecho", "Historia", "Matematica", "Farmacia"];
var stickers = [15, 5, 10, 1, 4, 14, 7];
var saved = "pan";

var li = document.getElementsByTagName("li");
console.log(li.length);
var img = document.getElementsByTagName("img");
console.log(img.length);

function updateStk(){
    console.log("method call");
    for(var i = 0; i < li.length; i++){
        if(li[i].className == "active selected"){
            console.log("active selected");
            var hash = li[i].innerHTML;
            console.log(hash);
            console.log(saved);
            if(hash !== saved){
                console.log("saving");
                saved = hash;
                for(var j = 0; j < names.length; j++){
                    if(names[j] === hash){
                        console.log(j);
                        for(var k = 0; k < img.length; k++){
                            if(k < stickers[j])
                                img[k].hidden = false;
                            else 
                                img[k].hidden = true;
                        }
                    }
                }
            }
        }
    }
    return true;
}

updateStk();