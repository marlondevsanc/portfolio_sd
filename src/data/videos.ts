export interface VideoItem {
    title: string;
    src: string;
    logo?: string;
}

import daikareel1 from '/Images/daikastore/reels/1.mp4';
import daikareel2 from '/Images/daikastore/reels/2.mp4';
import daykalogo from '/Images/daikastore/logodaykas.jpeg';

// Fireplaces 
import fireplacelogo from '/Images/fireplace/logofireplace.jpg'

import fireplace1 from '/Images/fireplace/reels/Reel 1- Fireplace.mp4'
import fireplace2 from '/Images/fireplace/reels/Reel 2- Fireplace.mp4'
import fireplace3 from '/Images/fireplace/reels/Reel 3- Fireplace.mp4'
import fireplace4 from '/Images/fireplace/reels/Reel 4- Fireplace.mp4'
import fireplace5 from '/Images/fireplace/reels/Reel 5- Fireplace.mp4'
import fireplace6 from '/Images/fireplace/reels/Reel 6- Fireplace.mp4'
import fireplace7 from '/Images/fireplace/reels/Reel 7- Fireplace.mp4'
import fireplace8 from '/Images/fireplace/reels/Reel 8- Fireplace.mp4'

// Flower Anto
import logofloweranto from '/Images/floweranto/logofloweranto.jpeg';
import flowerantoreel from '/Images/floweranto/reels/reel2.mp4';

// Kensof
import logokensof from '/Images/kensof/logokensof.jpeg';
import kensofreel1 from '/Images/kensof/reels/Reel 1- Kensof.mp4';
import kensofreel2 from '/Images/kensof/reels/Reel 2- Kensof.mp4';
import kensofreel3 from '/Images/kensof/reels/Reel 3- Kensof.mp4';
import kensofreel4 from '/Images/kensof/reels/Reel 4- Kensof.mp4';

// Dreamers Concept Store
import logoDreamers from '/Images/dreamers/Logo-doradoblanco.png'
import dreamersReel1 from '/Images/dreamers/reels/IMG_5331.mp4';
import dreamersReel2 from '/Images/dreamers/reels/IMG_5332.mp4';
import dreamersReel3 from '/Images/dreamers/reels/IMG_5333.mp4';
import dreamersReel4 from '/Images/dreamers/reels/IMG_5334.mp4';
import dreamersReel5 from '/Images/dreamers/reels/IMG_5335.mp4';
import dreamersReel6 from '/Images/dreamers/reels/IMG_5336.mp4';
import dreamersReel7 from '/Images/dreamers/reels/IMG_5337.mp4';

// Valientes y bellas
import logovalientes from '/Images/valientesybellas/logovalientesybellas.jpg'
import valientesreel1 from '/Images/valientesybellas/reels/IMG_5328.mp4';
import valientesreel2 from '/Images/valientesybellas/reels/IMG_5329.mp4';;
import valientesreel3 from '/Images/valientesybellas/reels/IMG_5330.mp4';
import valientesreel4 from '/Images/valientesybellas/reels/VYB5331.mp4';

// Soludental

import logosoludental from '/Images/soludental/soludentallogo.jpg'
import soludentalreel1 from '/Images/soludental/reels/IMG_5338.mp4';
import soludentalreel2 from '/Images/soludental/reels/IMG_5339.mp4';
import soludentalreel3 from '/Images/soludental/reels/IMG_5340.mp4';
import soludentalreel4 from '/Images/soludental/reels/IMG_5341.mp4';
import soludentalreel5 from '/Images/soludental/reels/IMG_5342.mp4';


// Internista Agusto Somarriba

import asomarribaVideo1 from '/Images/agustoSomarriba/reels/A.S- 1.mp4';
import asomarribaVideo2 from '/Images/agustoSomarriba/reels/A.S- 2.mp4';
import asomarribaVideo3 from '/Images/agustoSomarriba/reels/A.S- 3.mp4';
import asomarribalogo from '/Images/agustoSomarriba/logo.png';


export const videos: VideoItem[] = [
    { title: 'Agusto Somarriba', src: asomarribaVideo1, logo: asomarribalogo },
    { title: 'Agusto Somarriba', src: asomarribaVideo2, logo: asomarribalogo },
    { title: 'Agusto Somarriba', src: asomarribaVideo3, logo: asomarribalogo },
    { title: 'Fireplace', src: fireplace1, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace2, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace3, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace4, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace5, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace6, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace7, logo: fireplacelogo },
    { title: 'Fireplace', src: fireplace8, logo: fireplacelogo },
    { title: 'Soludental', src: soludentalreel1, logo: logosoludental },
    { title: 'Soludental', src: soludentalreel2, logo: logosoludental },
    { title: 'Soludental', src: soludentalreel3, logo: logosoludental },
    { title: 'Soludental', src: soludentalreel4, logo: logosoludental },
    { title: 'Soludental', src: soludentalreel5, logo: logosoludental },
    { title: 'Kensof', src: kensofreel1, logo: logokensof },
    { title: 'Kensof', src: kensofreel2, logo: logokensof },
    { title: 'Kensof', src: kensofreel3, logo: logokensof },
    { title: 'Kensof', src: kensofreel4, logo: logokensof },
    { title: 'Dreamers Concept Store', src: dreamersReel1, logo: logoDreamers },
    { title: 'Dreamers Concept Store', src: dreamersReel2, logo: logoDreamers },
    { title: 'Dreamers Concept Store', src: dreamersReel3, logo: logoDreamers },
    { title: 'Dreamers Concept Store', src: dreamersReel4, logo: logoDreamers },
    { title: 'Dreamers Concept Store', src: dreamersReel5, logo: logoDreamers },
    { title: 'Dreamers Concept Store', src: dreamersReel6, logo: logoDreamers },
    { title: 'Dreamers Concept Store', src: dreamersReel7, logo: logoDreamers },
    { title: 'Valientes y Bellas', src: valientesreel4, logo: logovalientes },
    { title: 'Valientes y Bellas', src: valientesreel1, logo: logovalientes },
    { title: 'Valientes y Bellas', src: valientesreel2, logo: logovalientes },
    { title: 'Valientes y Bellas', src: valientesreel3, logo: logovalientes },
    { title: 'Flower Online Anto', src: flowerantoreel, logo: logofloweranto },
       {
        title: 'Daykas Store',
        src: daikareel1,
        logo: daykalogo,
    },
    {
        title: 'Daykas Store',
        src: daikareel2,
        logo: daykalogo,
    },
];
