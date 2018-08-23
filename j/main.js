if ('Windows' in window)
{
	Windows.UI.WebUI.WebUIApplication.addEventListener('suspending', pause);
	Windows.UI.WebUI.WebUIApplication.addEventListener('suspending', resume);
}

var $output = document.getElementsByTagName('output')[0],
		current = 0,
		next = 1,
		uri;

function add( text ){
	$output.innerHTML += text + '\r\n';
}

function pause(){
	add('pause');
}

function resume(){
	add('pause');
}

setTimeout(function(){
	add(current);
	current = next;
	next = current + next;
	uri = 'LICENSE?c=' + current + '&n=' + next;
	fetch(new Request(uri)).then(function(){
		add('fetched '+uri);
	});
},
500);