(function ($) {
	$(document).ready(function(){    
		$('#dLabel').click(function () {
    	console.log("ClICKED");
        setTimeout(function(){$('#block-search-form').focus();},0);
    });
    $('.dropdown-menu input[type=text]').click(function(e){
        e.stopPropagation();
    });
});
})(jQuery);
