$(document).ready(function(){
  var gridsize;
  var rowsize;
  var mode = "hover";
  var pickedcolor = "black";
  var griddisplay = 1;
  var rainbow = 0;
  var solid = 0;
  var colormode = "color";
  var neon = 0;
  var random = 0;
  var neonColors = [
      "#F2EA02",
      "#E6FB04",
      "#FF0000",
      "#FF6600",
      "#00FF00",
      "#00FF66",
      "#0062FF",
      "#00FFFF",
      "#0033FF",
      "#FF00CC",
      "#FF0099",
      "#9900FF"];
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
    showButtons: true,
    chooseText: "Confirm",
    cancelText: "Cancel",
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
    if(griddisplay){
      $('.gridcell').css('outline', '1px solid #949494');
    }else{
      $('.gridcell').css('outline', 'none');
    }
  });
  //Hover and Click mode
  $(document).on('mouseenter', '.gridcell', function() {
    if(mode === "click") {
      $(this).on('click', function(){
        if(rainbow) {
          pickedcolor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() *256)) + ',' + (Math.floor(Math.random() *256)) + ')';
        }else if(neon) {
          random = Math.floor(Math.random()*neonColors.length);
          pickedcolor = neonColors[random];
        }
        $(this).css('background-color', pickedcolor);
      });
    }else{
      if(rainbow) {
        pickedcolor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      }else if(neon) {
        random = Math.floor(Math.random()*neonColors.length);
        pickedcolor = neonColors[random];
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
  $(document).on('change', '#colormodebox', function() {
    colormode = $('#colormodebox input[type="radio"]:checked').val();
    if(colormode==="rainbow"){
      rainbow = 1;
      solid = 0;
      neon = 0;
    }else if(colormode === "color"){
      rainbow = 0;
      solid=1;
      neon=0;
      pickedcolor = $('#colorpicker').spectrum('get').toHexString();
    }else {
      rainbow = 0;
      solid = 0;
      neon = 1;
    }
  });
});
