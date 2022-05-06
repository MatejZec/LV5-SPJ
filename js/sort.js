$(document).ready(function () {
	var $el;
    var oldPos = 0;
    var newPos = 0;
    var dragging = false;

	var listLength = $('.list_container > div').length;

    var selectionHeight = $('.list_container .list_item').height() + parseInt($('.list_container .list_item').css("border-bottom-width")) + parseInt($('.list_container .list_item').css("border-top-width")) + parseInt($('.list_container .list_item').css("margin-bottom"));
	
	var classInfo = '';
		
	$('.list_container .list_item').each(function(index){
		$(this).addClass(numToClass(index));
		classInfo += '.' + numToClass(index) + ' {top: ' + index*selectionHeight + 'px;}\n';
	});
	
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.list_container {height:' + (selectionHeight*listLength - 4) +'px; }\n';
	document.getElementsByTagName('head')[0].appendChild(style);
	
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = classInfo;
	document.getElementsByTagName('head')[0].appendChild(style);

    $('.list_item').mousedown(function (ev) {
        $el = $(this);
        oldPos = $el.index() + 1;
        newPos = oldPos;
        dragging = true;
        startY = ev.clientY;
        startT = parseInt($el.css('top'));
		$el.addClass('selected');
    });

    $(window).mousemove(function (ev) {
        if (dragging) {
			$el.attr('class', 'list_item')
        	$el.addClass('selected');
			
            
            var newTop = startT + (ev.clientY - startY);
            $el.css('cursor', 'pointer');
         
            var maxTop = $el.parent().height() - $el.height();
            newTop = newTop < 0 ? 0 : newTop > maxTop ? maxTop : newTop;
            $el.css('top', newTop);

            newPos = getPos(newTop, selectionHeight);

            if (oldPos != newPos) {
                moveThings(oldPos, newPos, selectionHeight);
                oldPos = newPos;
            }
        }
    }).mouseup(function () {
        dragging = false;
        $el.removeClass('selected');
		setNewClass($el, newPos); 
        $el.css('top', (newPos-1) * selectionHeight);
        
    });
});

function numToClass(a) {
    var numbers = new Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine");
    
	var sNumber = a.toString();
	var output = '';
	
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output += numbers[sNumber[i]];
    }
	
	return output;
}

function getPos(a, b) { 
	return Math.round( (a/b) + 1 );	
}

function moveThings(a, b, c) { 
	var first = numToClass(b-1);
	var $newEl = $('.list_container .' + first);
	
    if (a < b) { 
		var second = numToClass(b-2);
		var newTop = b*c - 2*c;
    } else { 
		var second = numToClass(b);
		var newTop = b*c;
    }
	
	$newEl.css('top', parseInt($newEl.css('top')));
	
	$newEl.removeClass(first);
	$newEl.addClass(second);
	$newEl.stop().animate({top: newTop}, 200, function(){
		$newEl.removeAttr('style');
	});
		
	
	
	return false;
}

function setNewClass(e, a) { 
    e.attr('class', 'list_item').addClass(numToClass(a-1));
}
