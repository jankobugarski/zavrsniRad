let poljeZaUrl = document.getElementById('slika')
let pocetnaSlika=document.getElementById('pocetna')


document.getElementById('slika').addEventListener('input',function() {
   pocetnaSlika.src = poljeZaUrl.value ;
})


