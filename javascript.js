
function testing()
{

    var projects = document.getElementById( 'projects' );
    setTimeout( function ()
    {
        // var ahref = document.createElement( 'a' );
        // // var src = document.createAttribute( 'href' );
        // ahref.href = 'projects/projects.html';
        // // a.innerHTML = 'btn'
        // // var adding = ahref.appendChild( src );
        // // projects.appendChild( ahref )
        // document.body.appendChild( ahref );
        // alert( 'hi there' )
        window.location.href = 'projects/projects.html'
    }, 300 )
}
function home()
{
    setTimeout( function ()
    {
        window.location.href = '../index.html'
    }, 500 )
}

function aboutPage()
{
    setTimeout( function ()
    {
        window.location.href = 'aboutPage/about.html'
    }, 500 )
}

// ( function ()
// {
//     const home = document.getElementById( 'home' );
//     const about = document.getElementById( 'about' );
//     var projects = document.getElementById( 'projects' );
//     const contact = document.getElementById( 'contact' );

//     projects.addEventListener( 'click', function ()
//     {
//         // setTimeout( function ()
//         // {
//         // var ahref = document.createElement( 'a' );
//         // // var src = document.createAttribute( 'href' );
//         // a.href = 'projects/projects.html';
//         // // var adding = ahref.appendChild( src );
//         // projects.appendChild( ahref )
//         // document.body.appendChild( projects );
//         alert( 'hi' );
//         // }, 500 )
//     } )
// } )();