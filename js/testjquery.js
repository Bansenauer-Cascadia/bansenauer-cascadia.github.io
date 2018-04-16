$(function(){
    /* Tell Javascript what to do when the 
        span tag is clicked */
    $("span").click(
        function(){
            $(this).css("background-color","lightgreen");
        }  
    );

  $(".mine")
      .html("jQuery branch here")
      .css("background-color","skyblue");
});
