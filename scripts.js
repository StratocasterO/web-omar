if (String(location.href).includes(".cat")){
    // loads catalan content TO DO

} else if (String(location.href).includes("/en")){
    // loads english content TO DO
    
}

// once loaded, add click listeners:
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#fis").addEventListener("click", fis)
    document.querySelector("#for").addEventListener("click", form)
    document.querySelector("#pro").addEventListener("click", pro)
    document.querySelector("#mus").addEventListener("click", mus)
})

// redirections to CV sections
const fis = _ => {location.href = "#fisico"}
const form = _ => {location.href = "#formador"}
const pro = _ => {location.href = "#programador"}
const mus = _ => {location.href = "#musico"}