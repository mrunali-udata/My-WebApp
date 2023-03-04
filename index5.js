$(document).ready(function(){
    var x="x";
    var o="o";
    var turns=0;
  
    var sp1=$('#sp1');
    var sp2=$('#sp2');
    var sp3=$('#sp3');
    var sp4=$('#sp4');
    var sp5=$('#sp5');
    var sp6=$('#sp6');
    var sp7=$('#sp7');
    var sp8=$('#sp8');
    var sp9=$('#sp9');

    $('#bo li').on('click',function(){
        if(sp1.hasClass('o') && sp2.hasClass('o') && sp3.hasClass('o')||
        sp4.hasClass('o') && sp5.hasClass('o') && sp6.hasClass('o')||
        sp7.hasClass('o') && sp8.hasClass('o') && sp9.hasClass('o')||
        sp1.hasClass('o') && sp4.hasClass('o') && sp7.hasClass('o')||
        sp2.hasClass('o') && sp5.hasClass('o') && sp8.hasClass('o')||
        sp3.hasClass('o') && sp6.hasClass('o') && sp9.hasClass('o')||
        sp1.hasClass('o') && sp5.hasClass('o') && sp9.hasClass('o')||
        sp3.hasClass('o') && sp5.hasClass('o') && sp7.hasClass('o')
        ){
            alert('Winner: O');
            $('#bo li').text('+');
            $('#bo li').removeClass('disable');
            $('#bo li').removeClass('o');
            $('#bo li').removeClass('x');
        }else if(sp1.hasClass('x') && sp2.hasClass('x') && sp3.hasClass('x')||
        sp4.hasClass('x') && sp5.hasClass('x') && sp6.hasClass('x')||
        sp7.hasClass('x') && sp8.hasClass('x') && sp9.hasClass('x')||
        sp1.hasClass('x') && sp4.hasClass('x') && sp7.hasClass('x')||
        sp2.hasClass('x') && sp5.hasClass('x') && sp8.hasClass('x')||
        sp3.hasClass('x') && sp6.hasClass('x') && sp9.hasClass('x')||
        sp1.hasClass('x') && sp5.hasClass('x') && sp9.hasClass('x')||
        sp3.hasClass('x') && sp5.hasClass('x') && sp7.hasClass('x')
        ){
            alert('Winner: X');
            $('#bo li').text('+');
            $('#bo li').removeClass('disable');
            $('#bo li').removeClass('o');
            $('#bo li').removeClass('x');
        }else if(turns==9){
            console.log(turns);
            alert('Tie Game');
            $('#bo li').text('+');
            $('#bo li').removeClass('disable');
            $('#bo li').removeClass('o');
            $('#bo li').removeClass('x');
            turns=0;
        }else if($(this).hasClass('disable')){
            alert('This spot is already filled');
        }else if(turns%2==0){
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            console.log(turns);
            if(sp1.hasClass('o') && sp2.hasClass('o') && sp3.hasClass('o')||
        sp4.hasClass('o') && sp5.hasClass('o') && sp6.hasClass('o')||
        sp7.hasClass('o') && sp8.hasClass('o') && sp9.hasClass('o')||
        sp1.hasClass('o') && sp4.hasClass('o') && sp7.hasClass('o')||
        sp2.hasClass('o') && sp5.hasClass('o') && sp8.hasClass('o')||
        sp3.hasClass('o') && sp6.hasClass('o') && sp9.hasClass('o')||
        sp1.hasClass('o') && sp5.hasClass('o') && sp9.hasClass('o')||
        sp3.hasClass('o') && sp5.hasClass('o') && sp7.hasClass('o')
        ){
            alert('Winner: O');
            turns=0;
        }
        }else {
            turns++;
            $(this).text(x);
            $(this).addClass('disable x');
            console.log(turns);
            if(sp1.hasClass('x') && sp2.hasClass('x') && sp3.hasClass('x')||
        sp4.hasClass('x') && sp5.hasClass('x') && sp6.hasClass('x')||
        sp7.hasClass('x') && sp8.hasClass('x') && sp9.hasClass('x')||
        sp1.hasClass('x') && sp4.hasClass('x') && sp7.hasClass('x')||
        sp2.hasClass('x') && sp5.hasClass('x') && sp8.hasClass('x')||
        sp3.hasClass('x') && sp6.hasClass('x') && sp9.hasClass('x')||
        sp1.hasClass('x') && sp5.hasClass('x') && sp9.hasClass('x')||
        sp3.hasClass('x') && sp5.hasClass('x') && sp7.hasClass('x')
        ){
            alert('Winner: X');
            turns=0;
        }
        }
    })

        //reset
        $('#reset').on('click',function(){
            $('#bo li').text('+');
            $('#bo li').removeClass('disable');
            $('#bo li').removeClass('o');
            $('#bo li').removeClass('x');
            turns=0;
        })
    
})

