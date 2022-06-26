document.getElementById("manSteal").onclick = () => {
    let movie1 = document.getElementById("manSteal").innerHTML;
    
    window.localStorage.setItem("movie1", movie1)
    window.localStorage.getItem("movie1")


}
document.getElementById("babyDriver").onclick = () => {
    let movie2 = document.getElementById("babyDriver").innerHTML;
    
    window.localStorage.setItem("movie2", movie2)
    window.localStorage.getItem("movie2")


}


document.getElementById("darkTower").onclick = () => {
    let movie3 = document.getElementById("darkTower").innerHTML;
    
    window.localStorage.setItem("movie3", movie3)
    window.localStorage.getItem("movie3")


}

document.getElementById("bladeRunner").onclick = () => {
    let movie4 = document.getElementById("bladeRunner").innerHTML;
    
    window.localStorage.setItem("movie4", movie4)
    window.localStorage.getItem("movie4")
}

login =() =>  {
    let emails = document.getElementById("username").value;
    window.localStorage.setItem("username", emails);
    let password = document.getElementById("password1").value;
    window.localStorage.setItem("password1", password);
    window.localStorage.getItem('username',"password1");
  }