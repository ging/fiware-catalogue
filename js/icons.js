(function($){
    $(document).ready(function(){
		$('a[href$="/instances"]').html('<i class="fa fa-file-text-o"></i><span> Instances</span>');
		$('a[href$="creating-instances"]').html('<i class="fa fa-magic"></i><span> Creating Instances</span>');
		$('a').filter(function(index) {
			return $(this).text() === "Overview";
			}).html("<i class='fa fa-eye'></i><span> Overview</span>");
		$('a[href$="documentation"]').html('<i class="fa fa-book"></i><span> Documentation</span>');
		$('a[href$="downloads"]').html('<i class="fa fa-download"></i><span> Downloads</span>');
		$('a[href$="terms-and-conditions"]').html('<i class="fa fa-list-ul"></i><span> Terms and conditions</span>');
		$('a[href$="bundle-deployment"]').html('<i class="fa fa-database"></i><span> Bundle Deployment</span>');
        	$('a[href$="creating-instances-8"]').html('<i class="fa fa-magic"></i><span> Creating Instances</span>');
        	$('a[href$="documentation-11"]').html('<i class="fa fa-book"></i><span> Documentation</span>');
        	$('a[href$="downloads-5"]').html('<i class="fa fa-download"></i><span> Downloads</span>');
        	$('a[href$="instances-6"]').html('<i class="fa fia-file-text-o"></i><span> Instances</span>');
        	$('a[href$="terms-and-conditions-9"]').html('<i class="fa fa-list-ul"></i><span> Terms and conditions</span>');
		$('a[href$="documentation-61"]').html('<i class="fa fa-book"></i><span> Documentation</span>');
		$('a[href$="instances-56"]').html('<i class="fa fa-book"></i><span> Instances</span>');
		$('a[href$="instances-23"]').html('<i class="fa fa-book"></i><span> Instances</span>');
	        $('a[href$="downloads-45"]').html('<i class="fa fa-download"></i><span> Downloads</span>');
		$('a[href$="downloads-55"]').html('<i class="fa fa-download"></i><span> Downloads</span>');
 		$('a[href$="documentation-4"]').html('<i class="fa fa-book"></i><span> Documentation</span>');
		$('a[href$="documentation-18"]').html('<i class="fa fa-book"></i><span> Documentation</span>');
		$('a[href$="terms-and-conditions-2"]').html('<i class="fa fa-list-ul"></i><span> Terms and conditions</span>');
		$('a[href$="terms-and-conditions-15"]').html('<i class="fa fa-list-ul"></i><span> Terms and conditions</span>');
		$('a[href$="creating-instances-20"]').html('<i class="fa fa-magic"></i><span> Creating Instances</span>');
		$('a[href$="creating-instances-23"]').html('<i class="fa fa-magic"></i><span> Creating Instances</span>');

		$('ul li').filter(function(index) { return $(this).text() === "Incubated GEs/GEris"; }).closest('ul').addClass('incubated-ge');
		$('ul li').filter(function(index) { return $(this).text() === "FIWARE GEis"; }).closest('ul').addClass('fiware-ge');
		$('ul li').filter(function(index) { return $(this).text() === "FIWARE GEris"; }).closest('ul').addClass('compliant-ge');
		$('ul li').filter(function(index) { return $(this).text() === "Deprecated GEis"; }).closest('ul').addClass('archived-geis');
    
    $('ul li').filter(function(index) { return $(this).text() === "Deprecated GEis"; }).closest('div').parent().prev().addClass('archived-geis-bg');
    $('ul li').filter(function(index) { return $(this).text() === "FIWARE GEris"; }).closest('div').parent().prev().addClass('compliant-ge-bg');
    $('ul li').filter(function(index) { return $(this).text() === "Incubated GEs/GEris"; }).closest('div').parent().prev().addClass('incubated-ge-bg');
    $('ul li').filter(function(index) { return $(this).text() === "FIWARE GEis"; }).closest('div').parent().prev().addClass('fiware-ge-bg');

    $('#block-views-exp-api-list-page').prepend('<h4>filters</h4>');
 $('#block-system-main').addClass('col-md-12');
    $('.node-hardware').children().closest('h2').hide(); 
    $('.node-device').children().closest('h2').hide();
    $('#edit-filter-wrapper').addClass('filter-search');
    $('#edit-filterchapters-wrapper').addClass('filter-chapters');
    $('#edit-filterranks-wrapper').addClass('filter-ranks');
    $('#block-views-exp-api-list-page').wrap('<div class="col-md-2 col-xs-12 filter-bar">');
    $('.view-api-list').addClass('col-md-10');
    $('.view-api-list').addClass('enabler-list-content');
    $('.view-api-list').addClass('col-xs-12');
		$('a[href$="incubated-gesgeris"]').closest('div').addClass('incubated-ge');
		$('a[href$="fiware-geis"]').closest('div').addClass('fiware-ge');
		$('a[href$="fiware-geris"]').closest('div').addClass('compliant-ge');
		$('a[href$="deprecated-geis"]').closest('div').addClass('archived-geis');
                $('#block-views-exp-api-list-pag').closest('div').html('<a href="/whatsnew">Whatsnew</a>');
		if($('article').hasClass('node-unpublished')){
                 $(".node-unpublished").append('<img class="img-notpublished" src="/sites/all/themes/fiwareSASS/images/not_published.png">');
       }});

	$( document ).ajaxComplete(function( event,request, settings ) {
  	        $('ul li').filter(function(index) { return $(this).text() === "Incubated GEs/GEris"; }).closest('ul').addClass('incubated-ge');
                $('ul li').filter(function(index) { return $(this).text() === "FIWARE GEis"; }).closest('ul').addClass('fiware-ge');
                $('ul li').filter(function(index) { return $(this).text() === "FIWARE GEris"; }).closest('ul').addClass('compliant-ge');
		$('ul li').filter(function(index) { return $(this).text() === "Depreated GEis"; }).closest('ul').addClass('archived-geis');
                    $('ul li').filter(function(index) { return $(this).text() === "Deprecated GEis"; }).closest('div').parent().prev().addClass('archived-geis-bg');
    $('ul li').filter(function(index) { return $(this).text() === "FIWARE GEris"; }).closest('div').parent().prev().addClass('compliant-ge-bg');
    $('ul li').filter(function(index) { return $(this).text() === "Incubated GEs/GEris"; }).closest('div').parent().prev().addClass('incubated-ge-bg');
    $('ul li').filter(function(index) { return $(this).text() === "FIWARE GEis"; }).closest('div').parent().prev().addClass('fiware-ge-bg');         
    $('#edit-filter-wrapper').addClass('filter-search');
    $('#edit-filterchapters-wrapper').addClass('filter-chapters');
    $('#edit-filterranks-wrapper').addClass('filter-ranks');
    if (!$('article').hasClass('node-unpublished').length){
          $(".node-unpublished").append('<img class="img-notpublished" src="/sites/all/themes/fiwareSASS/images/not_published.png">');
     }
    $('.view-api-list').addClass('col-md-10');
    $('.view-api-list').addClass('enabler-list-content');
    $('.jquery-once-1-processed').addClass('col-md-10');
    $('.jquery-once-1-processed').addClass('enabler-list-content');
    $('.jquery-once-1-processed').addClass('col-xs-12');
});
})(jQuery);
