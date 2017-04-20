var boxes=[{icon:"icon-paperplane", tittle:"Un avión de papel",subt:"Perfecto"},
         {icon:"icon-diamond", tittle:"¿Conoces Ruby?",subt:"Lenguaje de Programación"},
         {icon:"icon-heart", tittle:"I do CSS & HTML",subt:"For living"},
         {icon:"icon-mug", tittle:"La vida comienza",subt:"Despues de un café"},
         {icon:"icon-food", tittle:"Platito de comida",subt:"Ñomi ñomi"}];

window.addEventListener('load',function(){
  var contenedor=document.getElementById('contenedor');

  boxes.forEach(function(e){
    var box=document.createElement('div');
    var span=document.createElement('span');
    var h2=document.createElement('h2');
    var h5=document.createElement('h5');
    var p=document.createElement('p');

    box.setAttribute("class","box");
    span.classList.add(e.icon);
    span.classList.add("size-icon");
    h2.appendChild(document.createTextNode(e.tittle));
    h5.appendChild(document.createTextNode(e.subt));
    p.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum totam accusantium esse, sit quia expedita amet quasi vel nemo et, autem fugiat doloremque perferendis similique! Accusamus blanditiis, aliquid architecto soluta!"));

    box.appendChild(span);
    box.appendChild(h2);
    box.appendChild(h5);
    box.appendChild(p);
    contenedor.appendChild(box);
  });
});
