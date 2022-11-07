fetch('http://localhost:8888/api/V1/categories/list')
.then(res => res.json())
.then(json => {
    var lista = document.querySelector('.items');
    var mobileMenu = document.querySelector('.mobile-menu-itens');
    var listaSidebar = document.querySelector('.sidebar-menu');
    json.items.forEach(function(val){
        lista.innerHTML += `<li><a href="`+val.path+`_.html">`+val.name+`</a></li>`;
        mobileMenu.innerHTML += `<li><a href="`+val.path+`_.html">`+val.name+`</a></li>`;
        listaSidebar.innerHTML += `<li><a href="`+val.path+`_.html">`+val.name+`</a></li>`;
        console.log(val.name);
    })
    lista.innerHTML += `<li><a href=""> Contato</a></li>`;
    mobileMenu.innerHTML += `<li><a href=""> Contato</a></li>`;
    listaSidebar.innerHTML += `<li><a href=""> Contato</a></li>`;
//console.log(json.items[0].name);
})


