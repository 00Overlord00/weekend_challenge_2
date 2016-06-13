var placeHolder = -1;
var newData;

$(document).ready(function(){
console.log( 'SCRIPT: GO' );

$(function(){
  $( '#getJSONajax' ).click(function(){
    console.log( 'button clicked' );
    buildInterface();
    $.ajax({
      url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
      dataType: 'json',
      success: function( data ) {
        // console.log( 'in ajax success' );
        newData = data;
        // console.log( newData );
        // buildDirectory();
      },
      statusCode: {
        404: function() {
          alert( 'error connecting to server' );
        }
      }
    });
  });
});

var buildInterface = function() {
  $( 'body' ).append( '<div id = "stagingArea"></div>' );
  $( '#stagingArea' ).append( '<div id = "sweetSpot"></div>' );
  $( '#stagingArea' ).append( '<button id = "prev">Previous</button>' );
  $( '#stagingArea' ).append( '<button id = "next">Next</button>' );
  displayStudent();
};

var cycleForward = function() {
    console.log( 'The next button works.' );
    placeHolder++;
    displayStudent();
};

var cycleBack = function() {
      console.log( 'The prev button works.');
    placeHolder--;
    displayStudent();
  };


var displayStudent = function() {
  console.log( 'Function firing.' );
  $( '#sweetSpot' ).empty();
  var nameOut = newData.students[placeHolder].first_name + " " + newData.students[placeHolder].last_name;
  var infoOut = newData.students[placeHolder].city + ", " + newData.students[placeHolder].shoutout;
  var adjustedIndex = placeHolder +1;
  var counterOut = adjustedIndex + "/" + newData.students.length;
  $( '#sweetSpot' ).append( '<h1>' + nameOut + '</h1>' );
  $( '#sweetSpot' ).append( '<p>' + infoOut + '</p>' );
  $( '#sweetSpot' ).append( '<p>' + counterOut + '</p>' );
};

$( document ).on( 'click', '#next', function(){
  cycleForward();
});

$( document ).on( 'click', '#prev', function(){
  cycleBack();
});

// var buildDirectory = function() {
//   for(var i = 0; i < students.length; i++) {
//
  // }
//
});
