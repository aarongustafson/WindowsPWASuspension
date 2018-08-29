if ('Windows' in window)
{
	Windows.UI.WebUI.WebUIApplication.addEventListener('suspending', pause, false);
	Windows.UI.WebUI.WebUIApplication.addEventListener('suspending', resume, false);
}

document.addEventListener('visibilitychange', visibility, false);

if ('onfreeze' in document) {
	document.addEventListener('freeze', freeze, false);
	document.addEventListener('resume', resume, false);
}

var $output = document.getElementsByTagName('output')[0],
		current = 0,
		next = 1,
		uri;

function add( text ){
	$output.innerHTML += text + '\r\n';
}

function visibility(){
	if ( document.visibilityState == 'visible' )
	{
		add('visibility changed to visible');
	}
	else if ( document.visibilityState == 'hidden' )
	{
		add('visibility changed to hidden');
	}
}

function pause(){
	add('pause');
}

function freeze(){
	add('freeze');
}

function resume(){
	add('resume');
}

setInterval(function(){
	add(current);
	current = next;
	next = current + next;
	uri = '/manifest.json?c=' + current + '&n=' + next;
	fetch(new Request(uri))
		.then(function(){
			add('fetched '+uri);
		});
},
2000);