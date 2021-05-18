let quotes = document.getElementsByClassName('quote')
	function show(slideNumber)
		{
			for (var i = 0; i < quotes.length; i++) 
				{
					quotes[i].classList.add('__unshow__')
				}
			quotes[slideNumber-1].classList.remove('__unshow__')
		}