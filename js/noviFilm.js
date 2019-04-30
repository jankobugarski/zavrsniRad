let poljeZaUrl = document.getElementById('slika')
let pocetnaSlika=document.getElementById('pocetna')


poljeZaUrl.addEventListener('input',function() {
    pocetnaSlika.src=poljeZaUrl.value
    
})


