//image imports
import peter from './img/peter.jpg';
import stewie from './img/stewie.png';
import quag from './img/quag.png';
import brian from './img/brian.png';
import lois from './img/lois.png';
import meg from './img/meg.png';
import chris from './img/chris.png';
import joe from './img/joe.png';
import consuella from './img/consuella.png';
import death from './img/death.png';
import cleve from './img/cleve.png';
import herbert from './img/hebert.jpg';

//peter sounds
import idea from './sounds/peter/an_idea.mp3';
import crazy from './sounds/peter/areyou_crazy.mp3';
import arh from './sounds/peter/arhh_peter.mp3';
import beat from './sounds/peter/beatyou.mp3';
import fine from './sounds/peter/fine.mp3';
import bird from './sounds/peter/bird_peter.mp3';

//consuela sounds
import afuera from './sounds/consuella/afuera.mp3';
import broken from './sounds/consuella/broken.mp3';
import mo_lemon from './sounds/consuella/mo_lemon.mp3';
import no from './sounds/consuella/no-4.mp3';
import ok from './sounds/consuella/ok.mp3';
import rain from './sounds/consuella/rain.mp3';

//herbert sounds
import convo_starter from './sounds/herbert/convo_starter.mp3';
import excuse_me from './sounds/herbert/excuse_me.mp3';
import little_man from './sounds/herbert/little_man.mp3'

//quagmire sounds
import arhh from './sounds/quag/arhh.mp3';
import fatchicks from './sounds/quag/fatchicks.mp3';
import giggidy from './sounds/quag/giggidy.mp3';
import lookatme from './sounds/quag/lookatme.mp3';
import no_prob from './sounds/quag/no_prob.mp3';

//lois sounds
import fuck_you from './sounds/lois/fu.mp3';
import gotosleep from './sounds/lois/gotosleep.mp3';
import hello from './sounds/lois/hello.mp3';
import lost_mind from './sounds/lois/lost_mind.mp3';
import ohno from './sounds/lois/ohno.mp3';

//stewie sounds
import brian_shout from './sounds/stewie/brian.mp3';
import donottellme from './sounds/stewie/donottellme.mp3';
import im_stewie from './sounds/stewie/im_stewie.mp3';
import puke from './sounds/stewie/puke.mp3';
import you_suck from './sounds/stewie/you_suck.mp3';

const data = [
        {
            id: 1,
            name: 'Peter',
            image: peter,
            sounds: [idea, crazy, arh, beat, fine, bird],
            soundNames: ['an idea', 'are you crazy', 'arhh', 'beat you', 'fine', 'bird']
        },
        {
            id: 2,
            name: 'Stewie',
            image: stewie,
            sounds: [brian_shout, donottellme, im_stewie, puke, you_suck],
            soundNames: ['brian', 'dont tell me', 'im stewie', 'puke', 'you suck']
        },
        {
            id: 3,
            name: 'Quagmire',
            image: quag,
            sounds: [arhh, fatchicks, giggidy, lookatme, no_prob],
            soundNames: ['arhh', 'fat chicks', 'giggidy', 'dont look at me like that', 'no problem']
        },
        {
            id: 4,
            name: 'Lois',
            image: lois,
            sounds: [fuck_you, gotosleep, hello, lost_mind, ohno],
            soundNames: ['fuck you', 'go to sleep', 'hello', 'lost my mind', 'oh no']
        },
        {
            id: 5,
            name: 'Herbert',
            image: herbert,
            sounds: [convo_starter, excuse_me, little_man],
            soundNames: ['convo starter','excuse me','little man']
        },
        {
            id: 6,
            name: 'Consuella',
            image: consuella,
            sounds: [afuera,broken,mo_lemon,no,ok,rain],
            soundNames: ['afuera','broken','mo lemon','no','ok','rain']
        },
        {
            id: 7,
            name: 'Meg',
            image: meg,
            sounds: [],
            soundNames: []
        },
        {
            id: 8,
            name: 'Chris',
            image: chris,
            sounds: [],
            soundNames: []
        },
]

export default data;