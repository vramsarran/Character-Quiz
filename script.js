$(".monica").hide();
$(".ross").hide();
$(".rachel").hide();
$(".chandler").hide();

$("button").click(function(){
    let numberInput = Number($(".number").val());
    let choiceInput = $(".choice").val();
    
    
    
     if (choiceInput === "cooking" && numberInput >=5){ 
        $(".result").text("Congratulations! You're Monica. You chose category " + numberInput + " on how clean you are and You like "+ choiceInput + "!");
        $(".result").css("color", "white");
         $(".ross").hide();
         $(".rachel").hide();
         $(".chandler").hide();
        $(".monica").show();
    }  
    
    else if (choiceInput === "lecturing" && numberInput >=4){ 
        $(".result").text("Congratulations! You're Ross. You chose category " + numberInput + " on how clean you are and You like "+ choiceInput + "!");
        $(".result").css("color", "white");
        $(".monica").hide();
        $(".rachel").hide();
        $(".chandler").hide();
        $(".ross").show();
    }
    
    
    
     else if (choiceInput === "fashion" && numberInput >1){ 
        $(".result").text("Congratulations! You're Rachel. You chose category " + numberInput + " on how clean you are and You like "+ choiceInput + "!");
        $(".result").css("color", "white");
         $(".monica").hide();
         $(".ross").hide();
         $(".chandler").hide();
        $(".rachel").show();
    
    }
    
    else if (choiceInput === "consulting" && numberInput >=2){ 
        $(".result").text("Congratulations! You're Chandler. You chose category " + numberInput + " on how clean you are and You like "+ choiceInput + "!");
        $(".result").css("color", "white");
        $(".monica").hide(); 
        $(".ross").hide();
        $(".rachel").hide();
        $(".chandler").show();
    
    }
});

$('button').each( function(){
  var counter = 0;
  
  $(".scale-button").click( function(){
    counter ++;
    $(".counter").text('This quiz has been taken ' + counter + ' time/s' );
  });
});