// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var height , width , color ;

//this jquery picks height & weight from the sizepicker form to build canvas
$( "#sizePicker" ).submit( function( event ) {

  //the default is to run submit function before inputs received
  event.preventDefault();

  //extract the actual value of height and weight to build grid 
  height = $('#inputHeight').val();
  weight = $('#inputWeight').val();
  makeGrid(height,weight);
  //console.log(height);

});

function makeGrid(h,w) {
	
	//Grid is built using table row tag in html 
  // first step is to remove a grid if it is present 
	$('tr').remove();
	
	//Build grid based on input height and width 
	for (var i = 1; i <= h; i++) {
		$('#pixelCanvas').append('<tr id = table' + i + '></tr>');
        for (var j = 1; j <= w; j++) {
        	$('#table'+ i ).append('<td></td>'); 
        }
    }

  // add color to cell
  $('td').click(function (){
  	color = $('#colorPicker').val();
     
    if($(this).attr('style')){
    	$(this).removeAttr('style');
    } else {
    	$(this).attr('style','background-color:' + color);
    }

  })
}
