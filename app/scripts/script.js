$( "formsid" ).on( "submit", function( event ) {
    event.preventDefault();
    console.log( $( this ).serialize() );
    console.log("scripts buttoin pressed")
  });
  console.log("scripts linked");