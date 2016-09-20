function ninja_href_call(e,which)
{
	/*Get NINJA Data */
	var ninja_url = e.target.getAttribute('data-ninja-url');
	var ninja_target = e.target.getAttribute('data-ninja-target');
	
	/*Check if there is no NINJA target*/
	if(ninja_target == null || typeof ninja_target == undefined || which === 3)
	{
		ninja_target = "_self";
	}
	
	/*Open the link in NINJA WAY*/
	var win = window.open(ninja_url, ninja_target);
	if (win && ninja_target == "_blank")
	{
		win.focus();
	}
}



function ninja_href(element)
{
	if(element == null || typeof element == undefined){
		element = ".ninja-href";
	}

	/*Listen Everything */
	if (document.addEventListener) 
	{
		/* Waiting for Left and Middle Click */
		document.addEventListener('click', function(e) {
			if(e.target && e.target.matches(element))
			{
				/* Only Listen to Left and Middle Click */
				if (e.which === 1 || e.which === 2) 
				{
					e.preventDefault();
					ninja_href_call(e,e.which);
					
				}
			}
		}, false);
		
		/* Waiting for Right Click */
		document.addEventListener('contextmenu', function(e) {
			if(e.target && e.target.matches(element))
			{
				ninja_href_call(e,e.which);
				e.preventDefault();
			}
		}, false);
	} else {
		/* Waiting for Left and Middle Click */
		document.attachEvent('click', function() {
			if(e.target && e.target.matches(element))
			{
				/* Only Listen to Left and Middle Click */
				if (e.which === 1 || e.which === 2) 
				{
					e.preventDefault();
					ninja_href_call(e,e.which);
					
				}
			}
		});
	
		/* Waiting for Right Click */
		document.attachEvent('oncontextmenu', function() {
			if(e.target && e.target.matches(element))
			{
				ninja_href_call(e,e.which);
				window.event.returnValue = false;
			}
		});
	}

}
