fetch('http://localhost:8888/api/V1/categories/list')
.then(res => res.json())
.then(json => {
    var lista = document.querySelector('.items');
    var mobileMenu = document.querySelector('.mobile-menu-itens');
    var listaSidebar = document.querySelector('.sidebar-menu');
    json.items.forEach(function(val){
        lista.innerHTML += `<li><a href="`+val.path+`_.html">`+val.name+`</a></li>`;
        mobileMenu.innerHTML += `<li><a href="`+val.path+`_.html">`+val.name+`</a></li>`;
        console.log(val.name);
    })
    lista.innerHTML += `<li><a href=""> Contato</a></li>`;
    mobileMenu.innerHTML += `<li><a href=""> Contato</a></li>`;

})



fetch('http://localhost:8888/api/V1/categories/list')
.then(res => res.json())
.then(json => {
    var listaCalcados = document.querySelector('.filtro-categoria');
    json.items.forEach(function(val){
        listaCalcados.innerHTML += `<li key="`+val.id+`"><a href="`+val.path+`">`+val.name+`</a></li>`;
    })
})


fetch('http://localhost:8888/api/V1/categories/2')
.then(res => res.json())
.then(json => {
    var gridCalcas = document.querySelector('.grid-calcas');
    json.items.forEach(function(val){
        gridCalcas.innerHTML += 
        `<div class="card`+val.id+`">
        <img src="`+val.image+`" width="150px" height="150px"/>
          <h4 class="name-`+val.path+`">`+val.name+`</h4>
          <h3>R$`+val.price+`</h3>
          <button>COMPRAR</button>
         </div>`;
    })
})

