// WinRT
if ('Windows' in window)
{
	Windows.UI.WebUI.WebUIApplication.addEventListener('suspending', pause, false);
	Windows.UI.WebUI.WebUIApplication.addEventListener('resuming', resume, false);
}

// Page Visibility
document.addEventListener('visibilitychange', visibility, false);

// Page Lifecycle
if ('onfreeze' in document) {
	document.addEventListener('freeze', freeze, false);
	document.addEventListener('resume', resume, false);
}

var $output = document.getElementsByTagName('output')[0],
		$button = document.createElement('button'),
		$p = document.createElement('p'),
		current = 0,
		next = 1,
		uri,
		interval;

function add( text ){
	$output.innerHTML += text + '\r\n';
}

function visibility(){
	if ( document.visibilityState == 'visible' )
	{
		add('visibility changed to visible');
		start();
	}
	else if ( document.visibilityState == 'hidden' )
	{
		add('visibility changed to hidden');
		stop();
	}
}

function pause(){
	add('pause');
	stop();
}

function freeze(){
	add('freeze');
	stop();
}

function resume(){
	add('resume');
	start();
}

function start() {
	$button.innerText = 'Stop';
	interval = setInterval(function(){
		add(current);
		current = next;
		next = current + next;
		uri = '/manifest.json?c=' + current + '&n=' + next;
		fetch(new Request(uri))
			.then(function(){
				add('fetched '+uri);
			});
	},
	5000);
}

function stop() {
	$button.innerText = 'Start';
	clearInterval( interval );
}

$button.addEventListener('click', buttonClick, false);
function buttonClick(){
	if ( $button.innerText=='Stop' )
	{
		add('Manually stopped');
		stop();		
	}
	else
	{
		add('Manually started');
		start();
	}
}
$p.appendChild($button);
$output.parentNode.insertBefore($p, $output);

start();