var num


$(window).scroll(function() {
    var scrollTop = $(this).scrollTop()

    console.log(scrollTop)

    var i = (scrollTop / 15).toFixed(0)

    if (i !== num)

        $(".show").attr({
            "src": "img" + i + ".png",
            "alt": i
        })
     

        


    if (i < 10){
      document.getElementById('time').innerHTML = "00" + ": " + 00 + i;
    }

    if (i >= 10){
      document.getElementById('time').innerHTML = "00" + ": "  + i;
    }


    num = i


    $(document).ready(function () {

    $(window).scroll(function () {

        if (i == 0) { 
            $('#text').html('Do you know what happened to you? ');
             $('#text').css({'margin-top':'350px'});
        }

         if (i == 1) { 
            $('#text').html('My memories have thrown me back ');
            $('#text').css({'margin-top':'620px'});
        }

         if (i == 2) { 
            $('#text').html('So many times to that day ');
            // $('.show').css({width:'400px' height:'400px'});
        }

        if (i == 3) { 
            $('#text').html('I started doubting myself ');
        }

         if (i == 4) { 
            $('#text').html('Did this stuff really happened to me? ');
        }

         if (i == 5) { 
            $('#text').html('I just do not know, I just... ');
        }

         if (i == 6) { 
            $('#text').html(' I do not remember ');
            $('#text').css({'margin-top':'350px'});
            
        }

         if (i == 7) { 
            $('#text').html(' It was around 1:30pm');
            $('#text').css({'margin-top':'620px'});

            $('#7').trigger("play");
            
        }

        if (i == 8) { 
            $('#text').html(' We had stopped for lunch, I saw when they arrived');
            $('#7').trigger("pause");
         

            // $('#text').css({'margin-top':'20px'});
            
            
        }


        if (i == 9) { 
      
              $("text").addClass("center");
              $('#text').html(' two guys, on motorcycle');
              $('#8').trigger("play");
             
      
            // $('#text').css({'margin-top':'20px'});
            
            
        }

          if (i == 10) { 
            $('#text').html('two girls, traveling ');
             $('#8').trigger("pause");
            // $('#text').css({'margin-top':'20px'});
            
            
        }

        if (i == 14) { 
            $('#text').html(' No evidence was found ');
             
            // $('#text').css({'margin-top':'20px'});
            
            
        }

         if (i == 15) { 
          
            $('#text').html(' She reports ');        
            $('#text').css({'margin-top':'350px'});


            
            
            
        }

        if (i == 16) { 
          
            $('#text').html(' She screams ');        
            $('#text').css({'margin-top':'350px'});
            $('#16').trigger('play');


            
            
        }

         if (i == 17) { 
          
            $('#text').html(' HELP!! ');        
            $('#text').css({'margin-top':'350px', 'color': 'red'});
            $('#16').trigger('pause');

            
            
        }

          if (i == 18) { 
          
            $('#text').html('She had known him for three years ');        
            $('#text').css({'margin-top':'620px', 'color': 'white'});
            $('#18').trigger('play');


         
            
            
        }


          if (i == 19) { 
          
            $('#text').html('They had two children together '); 
             $('#18').trigger('pause');       
            
            $('#19').trigger('play');


         

        }



          if (i == 20) { 
          
            $('#text').html('02/02/2011'); 


            $('#text').css({'margin-top':'350px'});


             $('#19').trigger('pause');       
            



         
            
            
        }



          if (i == 21) { 
          
            $('#text').html('AGE NOT KNOWN'); 
    
            
        }

        if (i == 22) { 


          
            $('#text').html('WOMAN'); 
            $('#text').css({'color': 'white'});
    
            
        }



        if (i == 23) { 


          
            $('#text').html('FOUND IN PUBLIC SPACE'); 
            $('#text').css({'margin-top':'620px'});
    
            
        }



        if (i == 24) { 


          
            $('#text').html('IT WAS NOT THE FIRST TIME');
            $('#text').css({'margin-top':'350px', 'color': 'RED'});
    
           
    
            
        }


 

         if (i == 24) { 



            $(document).ready(function() {
            $('#text').wrap("<a href='3.html'></a>");

});



          
           
    
            
        }


 if (i == 25) { 


          
            $('#text').html('IT WAS NOT THE FIRST TIME');
            $('#text').css({'margin-top':'350px', 'color': 'RED'});
    
           
    
            
        }









        });
        });


})





