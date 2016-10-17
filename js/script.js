(function ($) {
	$(document).ready(function(){    
		// alert("Hello! I am an alert box!!");
    // $('.field-name-field-efficency-description').hide();
    
    $('.field-name-field-label').css("cursor","pointer").click(function(){
    
      $('.field-name-field-efficency-description').removeClass("active");
       $(this).next().toggleClass("active");
      // if(!$(this).next().hasClass('active')) {
           // $(this).next().addClass("active");
        // }
        
      // else {
        // $(this).next().removeClass("active");
        // }


    
   });
    $('.field-name-field-efficency-description').css("cursor","pointer").click(function(){
    
    $(this).toggleClass("active");
    
    });
     
    
    

});
})(jQuery);
