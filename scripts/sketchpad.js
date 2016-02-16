$(document).ready(function(){
  var gridsize;
  var rowsize;
  var mode = "hover";
  var pickedcolor = "black";
  var griddisplay = 1;
  var rainbow = 0;
  var solid = 0;
  var colormode = "color";
  //Get initial mode
  colormode = $('#colormodebox input[type="radio"]:checked').val();
  if(colormode==="rainbow"){
    rainbow = 1;
    solid = 0;
  }else{
    rainbow = 0;
    solid=1;
  }
  //Initial value
  $('#gridinput').val(0);
  //Color Picker
  $("#colorpicker").spectrum({
    color: "#000",
    showButtons: false,
    change: function(color) {
        pickedcolor = color.toHexString();
    }
  });
  //Automatic grid sizing
  $(document).on('keyup', '#gridinput', function() {
    gridsize = $(this).val();
    if(gridsize > 50){
      $('#gridinput').css('background-color', '#F69D9D');
      gridsize = 50;
    }else{
      $('#gridinput').css('background-color', 'white');
    }
    $('#grid').empty();
    for(i=0; i<gridsize; i++) {
      rowsize = 500/gridsize;
      $('#grid').append('<div class="gridrow"></div>');
    }
    for(j=0; j<gridsize; j++) {
      $('#grid').children().append('<div class="gridcell"></div>')
    }
    $('.gridrow').css('height', rowsize);
    $('.gridcell').css('width', rowsize);
  });
  //Hover and Click mode
  $(document).on('mouseenter', '.gridcell', function() {
    if(mode === "click") {
      $(this).on('click', function(){
        if(rainbow) {
          pickedcolor = 'rgb(' + (Math.floor(Math.random() *256)) + ',' + (Math.floor(Math.random() *256)) + ',' + (Math.floor(Math.random() *256)) + ')';
        }
        $(this).css('background-color', pickedcolor);
      });
    }else{
      if(rainbow) {
        pickedcolor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      }
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
  //Grid display toggle
  $(document).on('click', '#griddisplay', function() {
    if(griddisplay){
      $('.gridcell').css('outline', 'none');
      griddisplay=0;
    }else{
      $('.gridcell').css('outline', '1px solid #949494');
      griddisplay=1;
    }
  });
  //Colormode implementation
  //$('#colormodebox input').on('change'. function() {

  //});
  $(document).on('change', '#colormodebox', function() {
    colormode = $('#colormodebox input[type="radio"]:checked').val();
    if(colormode==="rainbow"){
      rainbow = 1;
      solid = 0;
      grayscale = 0;
    }else{
      rainbow = 0;
      solid=1;
      grayscale=0;
      pickedcolor = $('#colorpicker').spectrum('get').toHexString();
    }
  });
});
