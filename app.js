
document.getElementById('Calculate').addEventListener('click',function(){
    var result = ($("#L1").val() * $("#R2").val())/$("#R1").val();
    $("#L2").val(result);
});

