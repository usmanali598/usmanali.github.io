var tm = new TimelineMax();

// TweenMax.from( "h1", 4, { rotation: 400 } )
// TweenMax.fromTo( "h1", 4, { rotationY: -700 }, { rotationY: 180 } )
// TweenMax.to( "h1", 4, { rotationX: 7000 } )
// TweenMax.from( "h1", 4, { rotationZ: 500 } )

tm.staggerFrom( 'h1', 1, { x: -3800, rotation: 5760 } )

tm.to( '.pic', .2, { opacity: '1' } )

tm.staggerFrom( '.pic', .5, {    // opacity: 0,
    y: -1000, rotation: 2360, opacity: 1,
}, 1 )


tm.staggerFrom( [ '.contact', '.work', '.education', '.skills', '.languages' ], 1, { x: -3000 }, 1 )

// tm.staggerFromTo( '.scale', 1, { scale: 8, rotation: 2360 }, 1 )