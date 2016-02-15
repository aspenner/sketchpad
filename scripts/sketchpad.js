$(document).ready(function(){
  var gridsize;
  $('#gridinput').on("keyup change", function() {
    gridsize = $(this).val();
    $('#grid').empty();
    for(i=0; i<gridsize; i++) {
      console.log(i);
      $('#grid').append('<div class="gridrow"></div>');
    }
    for(j=0; j<gridsize; j++) {
      $('#grid').children().append('<div class="gridcell"></div>')
    }
  });
});
