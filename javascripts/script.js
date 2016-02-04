$(document).ready(function() {
    $('#return').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);

    });

    $("#app_logo").click(function(e) {
       
        e.stopPropagation();
        $('#drawer').show();
    });
  
    $("#app_articles").click(function(e) {
      
        e.stopPropagation();
        $('#drawer_articles').show();
    });
    $(document).click(function() {
        $('#drawer').hide();
        $('#drawer_articles').hide();
    });

});