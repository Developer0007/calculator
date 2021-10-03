
document.getElementById('Calculate').addEventListener('click',function(){
    var result = ($("#L1").val() * $("#R2").val())/$("#R1").val();
    $("#L2").val(result);
});

document.getElementById('VCalculate').addEventListener('click',function(){
    var volratio1 = $("#VR1").val();
    var volratio2 = $("#VR2").val();
    var sum = $("#V").val() / (parseInt(volratio1) + parseInt(volratio2));

    $("#VL1").val(sum * volratio1);
    $("#VL2").val(sum * volratio2);
});