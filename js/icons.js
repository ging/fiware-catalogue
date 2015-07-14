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
        	$('a[href$="instances-6"]').html('<i class="fa fa-file-text-o"></i><span> Instances</span>');
        	$('a[href$="terms-and-conditions-9"]').html('<i class="fa fa-list-ul"></i><span> Terms and conditions</span>'); 	   
		$('a[href$="documentation-61"]').html('<i class="fa fa-book"></i><span> Documentation</span>');
		$('a[href$="instances-56"]').html('<i class="fa fa-book"></i><span> Instances</span>');
		$('a[href$="downloads-55"]').html('<i class="fa fa-download"></i><span> Downloads</span>');  
 		$('a[href$="documentation-4"]').html('<i class="fa fa-book"></i><span> Documentation</span>');
		$('a[href$="terms-and-conditions-2"]').html('<i class="fa fa-list-ul"></i><span> Terms and conditions</span>');
		$('a[href$="creating-instances-20"]').html('<i class="fa fa-magic"></i><span> Creating Instances</span>');
	});
})(jQuery);
