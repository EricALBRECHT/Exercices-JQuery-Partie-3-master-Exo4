var largeur = largeur_initiale = $('.rectangle').width();
var couleur_initiale = $('.rectangle').css('background-color');
// ajoute 10 a la largeur du rectangle tant que la largeur est inferieure a 100px;
$('#bouton1').click(function (){
  if (largeur < 100){
    largeur = largeur + 10;
    $('.rectangle').width(largeur);
  }
  else{
      largeur = 10;
  }    
  console.log(largeur);
 });
 //le restangle deviens vert
$('#bouton2').click(function (){
    $('.rectangle').css('background-color','green');
});
 // Le rectangle reprend la couleur initiale 
$('#bouton3').click(function (){
    $('.rectangle').css('background-color',couleur_initiale);
});
//Masque le rectangle
$('#bouton4').click(function (){
    $('.rectangle').hide();
});
//Affiche le rectangle
$('#bouton5').click(function (){
    $('.rectangle').show();
});
