

$(document).ready(function(){
    $("#btn1").click(function(){
   
      $("#firstbtn").toggle();
      $("#secondbtn").hide();
    });
  });

  $(document).ready(function(){
    
    $("#btn2").click(function(){
     
      $("#secondbtn").toggle();
      $("#firstbtn").hide();
    });
  });

