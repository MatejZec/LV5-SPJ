function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function Spremi()
{
    var podatak = $("#value").val();
    var vrsta_podatka = $("#options").val();
    console.log(vrsta_podatka);
    var data = {vrsta_podatka:podatak};

   var jsonData = JSON.stringify(data); 

    download(jsonData, 'zadatak8.json', 'text/json');

} 