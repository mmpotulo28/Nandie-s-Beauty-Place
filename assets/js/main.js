const galleryImages = document.querySelectorAll( '.gallery-img' );
const expandedImg = document.querySelector( '.expanded-img' );
const expandedBlock = document.querySelector( '.image-expanded' );
const expandCloseBtn = document.getElementById( 'expand-close' );
const expandLeftBtn = document.getElementById( 'expand-left' );
const expandRighttn = document.getElementById( 'expand-right' );
let source, currentImage, index = -1;

// get all images in gallery
const galleryImageList = [];
galleryImages.forEach( image => {
    galleryImageList.push( image );
} );

// listen for gallery image click
galleryImages.forEach( ( image ) => {
    image.onclick = () => {
        console.log( image.src );
        let source = image.src;
        currentImage = image;
        expandedImg.src = source;
        console.log( expandedImg.src );
        expandedBlock.style.display = 'flex';

        currentImage = image;

        for ( let i = 0; i < galleryImageList.length; i++ ) {
            if ( galleryImageList[ i ] == currentImage ) {
                index = i;
                break;
            }
        }
    };
} );

// listen for close button
expandCloseBtn.addEventListener( 'click', () => {
    expandedBlock.style.display = 'none';
} );


expandLeftBtn.onclick = () => {
    console.log( 'left clicked' );


    if ( index != -1 && index != 0 ) {
        index--;
        expandedImg.src = galleryImageList[ index ].src;
        console.log( 'left' );
    }
};


expandRighttn.onclick = () => {
    console.log( 'right clicked' );

    if ( index != -1 && index != galleryImageList.length ) {
        index++;
        expandedImg.src = galleryImageList[ index ].src;
        console.log( 'left' );
    }
};