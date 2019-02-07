
   $(document).ready(function(){

    // $(document).scroll(function(e){
        
    //     if(e.currentTarget.scrollingElement.scrollTop>200){
    //         $('input,textarea').show(1000);
    //     }
    //     else{
    //         $('input,textarea').hide(1000);
    //     }
    // });

        //$('input,textarea').hide();
        
        // $('input,textarea').hover(function(){
        //     $(this).css('background-color','red');
        // });
        // $('input,textarea').mouseleave(function(){
        //     $(this).css('background-color','white');
        // });
        $('#hide').click(function(){
            //$('input,textarea').hide(1000);
            //$('input,textarea').fadeOut(1000);
            $('input,textarea').slideDown(1000);
        });
        
        $('#show').click(function(){
            //$('input,textarea').show(500);            
            $('input,textarea').fadeIn(3000);         
            $('input,textarea').slideUp(1000);
        });
        var clicked=false;
        $('#toggle').click(function(){            
            //$('input,textarea').toggle(1000);
            //$('input,textarea').fadeToggle(1000);           
            //$('input,textarea').val($('input,textarea').val()*1+1);
            // if(clicked==false){
            //     $('#ta').animate({height:'+=100px',fontSize:'+=10px'},2000,"linear",function(){
            //         alert('Animated');
            //     });                
            //     clicked=true;
            // }
            // else{
            //     $('#ta').animate({height:'-=100px',fontSize:'-=10px'},2000,"swing");
            //     clicked=false;
            // }
            $('#ta').animate({height:'+=100px',fontSize:'+=10px'},1000,"swing").animate({height:'-=100px',fontSize:'-=10px'},1000,"swing");            
            
        });


        $('input,textarea').mouseenter(function(){
            $(this).addClass('si');
        });
        $('input,textarea').mouseleave(function(){
            $(this).removeClass('si');
        });
    });
    