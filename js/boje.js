$(document).ready(function()
{
    //var colors = ['#B14C37 ', '#37B139', '#E7D112', '#4962DF'];

     

     $('button').click(function() {
        var randColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');;
         $('body').css('background-color', randColor);
         $('p').text("trenutna boja: " + randColor)
     });
	
});