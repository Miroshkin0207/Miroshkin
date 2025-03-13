function najatie() {
    let nadpis = document.getElementById("nadpis")
    if (nadpis.innerHTML==="") {
    nadpis.innerHTML="Молодец!"
    }else if (nadpis.innerHTML==="Молодец!"){
        nadpis.innerHTML=""
    }
}
