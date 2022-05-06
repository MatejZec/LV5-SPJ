$(document).ready(function(){

    



    $("#btn").click(function(){
        var aktivnost = $("#inpt").val();
        console.log(aktivnost);
        $("#todo").append(`<li><span class="check"><input type="checkbox" class="checkbox"></span><span class="trash"><i class="fa fa-trash"></i></span>${aktivnost}</li>`);
    });

    $('ul').on('click', ".trash", function(e) {
        $(this).parent().fadeOut(500, function() {
             $(this).remove();
        });
        e.stopPropagation();
      });

      $('.checkbox').change(function() {

        if (this.checked) {
          $(this).parent().parent().css("text-decoration", "line-through");
        } else {
          $(this).parent().parent().css("text-decoration", "none");
        }
      });  
});