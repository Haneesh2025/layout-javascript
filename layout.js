function copy1(){
    document.getElementById("inp2").value = document.getElementById("inp1").value;

}
function alert1(){
    var p1=document.getElementById("p1")
    var p2=document.getElementById("p2")

    alert(document.getElementById("inp1").value)
    alert(p1.innerText)
    alert(p2.innerText)
    
}
function copy2(){
    document.getElementById("p2").innerText=document.getElementById("inp1").value
    
}

function copy3(){
    document.getElementById("p1").innerHTML= document.getElementById("p1").innerText+document.getElementById("inp1").value+document.getElementById("inp2").value

}

function pic(){
    var p2=document.getElementById("p2")
    p2.style.backgroundImage="url(https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
    p2.style.backgroundSize="cover"

}