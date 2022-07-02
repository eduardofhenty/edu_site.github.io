//script de Jquerry para para mostrar/ocultar preço e produto de alguns produtos
//Definindo acoes para cada um dos produtos
$(function(){
$("#b_prod1").click(function(){
$("#d_p1").toggle();
$("#p_p1").toggle();
$("#d_p1").html("<p>Descricao do prod1 </p>");
$("#d_p1").css("color","black" );
$("#p_p1").html("<p> $$10 </p>");
$("#p_p1").css("color","black" );
});
});

$(function(){
    $("#b_prod2").click(function(){
    $("#d_p2").toggle();
    $("#p_p2").toggle();
    $("#d_p2").html("<p>Descricao do prod2 </p>");
    $("#d_p2").css("color","black" );
    $("#p_p2").html("<p> $$20 </p>");
    $("#p_p2").css("color","black" );
    });
});


$(function(){
    $("#b_prod3").click(function(){
    $("#d_p3").toggle();
    $("#p_p3").toggle();    
	$("#p_p3").html("<p>Info 3 </p> <p>Info 4 </p> ");
    $("#d_p3").css("color","black" );    
    $("#p_p3").css("color","black" );
    });
});

//Aqui algumas funçoes para o site
//$("#galeria").html("<p>Info 3 </p> <p>Info 4 </p> ");

$(function(){    
        $("#galeria").mouseenter( function(){        
       //$("#gal_inf").html( '<a href="galeria.html">  <ol>   <li>primeiro item</li>   <li>segundo item</li>   <li>terceiro item</li></ol>'  );            
            
      $("#gal_inf").html('<ol> <a href="galeria1.html"> <li> Item 1 </li>  </a> <a href="galeria2.html"> <li> Item 2 </li>  </a> <a href="galeria3.html"> <li> Item 3 </li>  </a> </ol>');            

    });
});

$(function (){
$("#galeria").mouseleave( function(){
$("#gal_inf").toggle() ;
});

});



$(function(){
   
    
    $("#atualiza").load("arq.txt")   ;  
          
        
    



   

});



          

//<a href="galeria1.html"> <li> Item 1 </li>  </a> <a href="galeria2.html"> <li> Item 2 </li>  </a> <a href="galeria3.html"> <li> Item 3 //</li>  </a>

//<ol start="7">   <li>primeiro item</li>   <li>segundo item</li>   <li>terceiro item</li></ol>
 
 
