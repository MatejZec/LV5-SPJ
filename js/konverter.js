function convert(param1){
    var factor;
    f = $('#from').val();//document.getElementById('from').value
    t = $('#to').val();//document.getElementById('to').value

    if(f == t){
        factor = 1
    }
    else if(f == 'EUR' && t == 'USD'){
        factor = 1.06;
    }
    else if(f == 'USD' && t == 'EUR'){
        factor = 1/1.06;
    }
    else if(f== 'EUR' && t == 'HRK')
    {
        factor = 7.45;
    }
    else if(f== 'HRK' && t == 'EUR')
    {
        factor = 1/7.45;
    }
    else if(f== 'USD' && t == 'HRK')
    {
        factor = 7.16;
    }
    else if(f== 'HRK' && t == 'USD')
    {
        factor = 1/7.16;
    }

    if(param1 == "C"){
        document.getElementById('secondinput').value = document.getElementById('firstinput').value * factor
    }
    if(param1 == "F"){
        document.getElementById('firstinput').value = document.getElementById('secondinput').value * factor
    }

}