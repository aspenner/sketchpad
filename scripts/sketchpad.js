$(document).ready(function(){
  var gridsize;
  var rowsize;
  var mode = "hover";
  var pickedcolor = "black";
  $("#colorpicker").spectrum({
    color: "#000",
    change: function(color) {
        pickedcolor = color.toHexString();
    }
});
  $('#gridinput').on('keyup change', function() {
    gridsize = $(this).val();
    if(gridsize > 50){
      $('#gridinput').css('background-color', '#F69D9D');
      gridsize = 50;
    }else{
      $('#gridinput').css('background-color', 'white');
    }
    $('#grid').empty();
    for(i=0; i<gridsize; i++) {
      rowsize = 500/gridsize
      $('#grid').append('<div class="gridrow"></div>');
    }
    for(j=0; j<gridsize; j++) {
      $('#grid').children().append('<div class="gridcell"></div>')
    }
    $('.gridrow').css('height', rowsize);
    $('.gridcell').css('width', rowsize);
  });
  $(document).on('mouseenter', '.gridcell', function() {
    if(mode === "click") {
      $(this).on('click', function(){
        $(this).css('background-color', pickedcolor);
      });
    }else{
      $(this).css('background-color', pickedcolor);
    }
  });
  //Clear button
  $(document).on('click', '#clear', function() {
    $('.gridcell').css('background-color', 'white');
  });
  //Mode button
  $(document).on('click', '#mode', function() {
    if(mode === "hover"){
      mode = "click";
      $(this).text("Click Mode");
    }else {
      mode = "hover";
      $(this).text("Hover Mode");
    }
  });
});
