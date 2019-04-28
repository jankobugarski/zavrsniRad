fetch('https://baza-filmova.herokuapp.com/filmovi/ ')
  .then(res => res.json())
  .then(data => {

    let sablon = '';

    // ispisivanje svih objekata
    for(let i = 0; i < data.length; i++) {
      sablon += `<div class='col-md-3'>
                    <h4>${data[i].naziv}</h4>
                    <h5>${data[i].godina}</h5>
                    <img src='${data[i].slika}'>
                  </div>`;  }