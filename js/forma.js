$(document).ready(function()
{
    /*$('#myForm').submit(function() {


        var $inputs = $('#myForm :input');
    
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
            console.log(values[this.name]);
            
        });
        
    
    });*/
    $('form').submit(printObj);

        function printObj(e) {
        e.preventDefault();
        
        if (JeliBroj($('#oib').val())&&JeliBroj($('#jmbag').val()) && JeliBroj($('#pb').val()))
        {
            if (testDate($('#datum').val()))
            {
                var obj = {
                ime: $('#ime').val(),
                oib: $('#oib').val(),
                jmbag: $('#jmbag').val(),
                datum: $('#datum').val(),
                adresa: $('#adresa').val(),
                postanski_broj: $('#pb').val(),
                grad: $('#grad').val(),
            }
                console.log(obj);
            }
            else
            {
                console.log("Nije dobar format datuma");
            } 

        }
        else{
            console.log("nisu svi brojevi")
        }

           
            
        
    }
    function testDate(str) 
    {
        var t = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if(t === null)
          return false;
        var d = +t[1], m = +t[2], y = +t[3];
      
        // Below should be a more acurate algorithm
        if(m >= 1 && m <= 12 && d >= 1 && d <= 31) {
          return true;  
        }
      
        return false;
    }
    function JeliBroj(value)
    {
        let isnum = /^\d+$/.test(value);
        if (isnum) 
        {
            return true;
        }
        else
            return false;
    }
	
});