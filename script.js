
$(document).ready(function() {

$("#main section").waypoint( function( direction ) {
    if( direction === 'down' ) {
        change( $( this ) );
        $("header").css('opacity',0.7);
    }
}, { offset: '55%' } ).waypoint( function( direction ) {
    if( direction === 'up' ) {
        change( $( this ) );
    }
}, { offset: '-25%' } );

 
});