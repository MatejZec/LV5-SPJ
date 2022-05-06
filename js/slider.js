var slike = $("img");
 slike[0].style.display = "block";
for (var i = 1; i< slike.length;i++) {
    slike[i].style.display = "none";
};

var counter = 0;

function Prev() {
  
      if(slike[counter].style.display == "block")
      { 
        if(counter > 0)
        {
            slike[counter].style.display ="none";
            counter = counter-1;
            slike[counter].style.display ="block"; 
      }
   }

};
function Next() {
    
        
      if(slike[counter].style.display == "block")
      { 
        if(counter < 4)
        {
             slike[counter].style.display ="none";
             counter = counter+1;
             slike[counter].style.display ="block";
        }  
   }
};