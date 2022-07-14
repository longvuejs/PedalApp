import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import TitleProduct from './TitleProduct';

import color from '../../../contains/color';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const windowW = Dimensions.get('window').width;

const Product = () => {
  const navigation = useNavigation();
  const ListPedal = [
    {
      id: 1,
      title: 'Small Stone',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Phaser Effects Pedals'],
        ['Circuit', 'Analog'],
        ['Bypass', 'True Bypass'],
        ['Audio', 'Mono'],
        [
          'Power Supply',
          '9V battery included (optional 9.6VDC-200mA power adapter not included)',
        ],
        ['Dimensions (in)', '4.5 x 2.75 x 2.1'],
        ['Current Draw', '10mA'],
        ['Year Released', '2006'],
        ['UPC', '683274050041'],
      ],
      description: `The EHX Small Stone Phase Shifter generates thick sweeping phase shifting with liquid transparency. Feedback color control adds a tingling swirl. Blues players dig the Stone’s rapid rotating speaker effect. Country players add tasty seasoning to their chicken pickin’. Metal-heads dig its jet plane swoosh.
      - Variable rate control allows slow and smooth to rapid edge frequency sweeps
      - Color switch turns up the feedback for a more pronounced phase shifter effects
      - Tough and compact die-cast chassis
      - 9V battery included`,
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682837/App%20Pedal/Product%20Image/SMALL_STONE_qtpi5a.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682837/App%20Pedal/Product%20Image/SMALL_STONE_1_bakrbr.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682839/App%20Pedal/Product%20Image/SMALL_STONE_2_tlf3lp.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682838/App%20Pedal/Product%20Image/SMALL_STONE_3_uzi8z5.png',
        },
      ],
      buttonText: 'Specification',
    },
    {
      id: 2,
      title: 'MEMORY BOY',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Delay Effects Pedals'],
        ['Circuit', 'Analog'],
        ['Bypass', 'True Bypass'],
        ['Audio', 'Mono'],
        [
          'Power Supply',
          '9.6VDC-200mA power adapter included (optional 9V battery not included)',
        ],
        ['Dimensions (in)', '4.75 x 4 x 2.25'],
        ['Current Draw', '60mA'],
        ['Year Released', '2009'],
        ['UPC', '683274010984'],
      ],
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682833/App%20Pedal/Product%20Image/MEMORY_BOY_q5zsyn.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682833/App%20Pedal/Product%20Image/MEMORY_BOY_1_oqz5tx.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682839/App%20Pedal/Product%20Image/MEMORY_BOY_2_zgodas.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682841/App%20Pedal/Product%20Image/MEMORY_BOY_3_pmfdrx.png',
        },
      ],
      description: `The EHX Memory Boy straps on the cape and flies with heritage into the search for amazing sound at a price that mere mortals can afford.
      The Memory Boy uses the Deluxe Memory Man as a base, expanding upon it with additional modulation features and an optional Expression Pedal input allowing external control over Delay Time or Modulation Rate.
      The Memory Boy carries the performance heritage for warm analog delays and modulations that made its ancestors the go to legends that remain today. With two years in design, the focus was making the legend affordable to every musician while maintaining the character and artistic sounds that let you stand apart.
      All analog delay with Feedback
      Up to 550 ms delay time
      Selectable Chorus or Vibrato modulations rates
      Choose between triangle or square modulation waveforms
      Expression pedal control of delay time or modulation rate (expression pedal extends the range of modulation rate)
      True Bypass
      Power adapter included`,
      buttonText: 'Specification',
    },
    {
      id: 3,
      title: 'LESTER G',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Univibe & Rotary Effects Pedals'],
        ['Circuit', 'Analog'],
        ['Bypass', 'Buffered Bypass'],
        ['Audio', 'Stereo'],
        ['Power Supply', '9.6VDC-200mA power adapter included'],
        ['Dimensions (in)', '5.75 x 4.75 x 2.5'],
        ['Current Draw', '100mA'],
        ['Year Released', '2015'],
        ['UPC', '683274011721'],
      ],
      description: `The EHX Lester G uses the finest rotary speaker simulation available today, and comes with a variety of deluxe features. Stereo outputs provide a lush, realistic effect. Tube-emulated overdrive is available with the DRIVE knob, and speaker mix can be fine-tuned with the BALANCE knob. Switch between adjustable FAST and SLOW modes for an accurate reproduction of a classic rotary speaker cabinet’s speed adjustment. An expression pedal jack allows for fine tuning of the rotation speed with an expression pedal.
      The Lester G also features a compression circuit that adds lush sustain to electric guitar. Using the compressor, the LESTER G provides guitarists with the fat, full sustain of an organ, to get the most out of the rotating speaker effect. 
      Ultimate rotary speaker emulator
      Fully featured compressor built-in
      Mono In/Mono or Stereo Out
      Tube emulated overdrive
      Adjustable Fast and Slow modes
      Acceleration control
      High quality buffered bypass
      Power adapter included`,
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682840/App%20Pedal/Product%20Image/LESTER_G_pcffri.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682841/App%20Pedal/Product%20Image/LESTER_G_1_nyx32n.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682833/App%20Pedal/Product%20Image/LESTER_G_2_utnrrk.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682833/App%20Pedal/Product%20Image/LESTER_G_3_in87c3.png',
        },
      ],

      buttonText: 'Specification',
    },
    {
      id: 4,
      title: '95000',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Looper Effects Pedals'],
        ['Circuit', 'Digital'],
        ['Bypass', 'Buffered Bypass'],
        ['Audio', 'Stereo'],
        ['Power Supply', '9.6VDC-500mA power adapter included'],
        ['Dimensions (in)', '12.75 x 6 x 2.75'],
        ['Current Draw', '320mA'],
        ['Year Released', '2018'],
        ['UPC', '683274011950'],
      ],
      description: `he EHX 95000 Performance Loop Laboratory is the company’s most advanced looper to date, featuring six mono tracks and one stereo mixdown track per loop. It will record up to 375 minutes and 100 loops with a 16GB Micro SD card and switching between loops is quick and easy.
      The 95000 is housed in a rugged, aluminum chassis with a control layout that has been optimized for use as both a foot pedal and tabletop unit. This design ensures that the player can take maximum advantage of the looper’s powerful performance capabilities.
      The 95000 also features a robust I/O including two audio inputs, each capable of handling a microphone (phantom power is included), instrument or unbalanced line input so the unit can readily connect to all sound sources. Left / right outputs, a Monitor out and a Headphone Out are included.`,
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682840/App%20Pedal/Product%20Image/95000_yt4728.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682839/App%20Pedal/Product%20Image/95000_1_fdbilr.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682841/App%20Pedal/Product%20Image/95000_2_yns2j7.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682839/App%20Pedal/Product%20Image/95000_3_kuwpjx.png',
        },
      ],

      buttonText: 'Specification',
    },
    {
      id: 5,
      title: 'OCEANS 12',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Reverb Effects Pedals'],
        ['Circuit', 'Digital'],
        ['Bypass', 'Buffered Bypass'],
        ['Audio', 'Stereo'],
        ['Power Supply', '9.6VDC-200mA power adapter included'],
        ['Dimensions (in)', '4.75 x 3.9 x 2.5'],
        ['Current Draw', '150mA'],
        ['Year Released', '2020'],
        ['UPC', '683274012247'],
      ],
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682836/App%20Pedal/Product%20Image/OCEANS_12_zosmlt.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682836/App%20Pedal/Product%20Image/OCEANS_12_1_buxndd.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682836/App%20Pedal/Product%20Image/OCEANS_12_2_khetgg.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682836/App%20Pedal/Product%20Image/OCEANS_12_3_zb2gtt.png',
        },
      ],
      description: `The EHX Oceans 12 is the Oceans 11’s big brother with even more reverbs and functionality. It features two simultaneous, independent, stereo reverb engines, series and parallel control for the dual reverbs, 24 presets and advanced I/O allowing for stereo in/out or mono send/return with pre and post reverb options. The pedal also includes a new Tide Control for stereo image alteration, a Lo-fi Control, an infinite attenuation control and an input jack for external expression and 3-button footswitch control.

      A Tails switch provides a choice of whether the reverb effect fades out naturally or stops immediately when the pedal is switched to bypass. In most settings the pedal is also capable of producing infinite reverb which can be played over with a different reverb effect.
      
      The Oceans 12’s reverbs are:
      • ROOM – two modes: reverb algorithms modeled after a lively room and a spacious performance hall
      • SPRING – two modes: vintage 1962 Fender® 6G15 tube reverb emulation and the spring algorithm from the EHX Holy Grail
      • PLATE – two modes: two emulations of the smooth, metal plate reverb often used in high-end recording studios during the 1960s and ‘70s
      • REVERSE – two modes: a reverse reverb effect as well as true reversed echoes
      • ECHO – three modes: a digital delay with various echo rhythms feeding into a plate reverb
      • TREM – three modes: a classic, periodic volume envelope with various shapes applied to both the wet and dry mix of a hall reverb
      • MOD – three modes: combinations of chorus and flange reverbs that create rich reverb tails
      • DYNA – three dynamic, experimental reverb algorithms: swell, gate and duck
      • AUTO-INF – three modes: auto-infinite reverb (w/optional chorus or flange) that “listens” to your playing and crossfades to a new reverb wash upon detection of newly struck notes.
      • SHIMMER – two modes: two configurations of a rich octave-shifted reverb wash
      • POLYPHONIC – two modes: two configurable bi-directional pitch shifts that add dimensionality to the reverb tail
      • RESONANT – two modes: reverb excited by tunable resonators and configurable self-oscillating filters on the reverb tail
      
      2 simultaneous, independent, stereo reverb engines
      Series and parallel control for the dual reverbs
      24 presets
      Stereo in/out or mono send/return with pre and post reverb options
      Tide Control for stereo image alteration
      Lo-fi Control
      Infinite attenuation control
      Tap tempo to set your pre-delay time, echo time and more
      Input jack for external expression and 3-button footswitch control
      Power supply included`,
      buttonText: 'Specification',
    },
    {
      id: 6,
      title: 'MEMORY MAN',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Delay Effects Pedals'],
        ['Circuit', 'Analog'],
        ['Bypass', 'Selectable True Bypass'],
        ['Audio', 'Mono'],
        ['Power Supply', '9.6VDC-200mA power adapter included'],
        ['Dimensions (in)', '4.5 x 2.75 x 2.1'],
        ['Current Draw', '150mA'],
        ['Year Released', '2021'],
        ['UPC', '683274012346'],
      ],
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682834/App%20Pedal/Product%20Image/MEMORY_MAN_qkfsxq.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682834/App%20Pedal/Product%20Image/MEMORY_MAN_1_oq16zf.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682834/App%20Pedal/Product%20Image/MEMORY_MAN_2_gfhbnf.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682835/App%20Pedal/Product%20Image/MEMORY_MAN_3_ngvdlu.png',
        },
      ],
      description: `Experience the warmth of analog delay. Up to 550ms of vibrant echo that rivals tape delay; lush, spatial chorus and haunting vibrato are just a few of the treats in the Memory Man’s sonic schmorgasbord! Analog warmth that renders digital delay obsolete – the EHX Deluxe Memory Man echo with chorus/vibrato!

      True bypass
      Super organic analog delay with blend, feedback and delay time controls
      Selectable sweet analog chorus and vibrato with depth control
      Analog input gain control
      Power adapter included`,
      buttonText: 'Specification',
    },
    {
      id: 7,
      title: 'NANO LOOPER 360',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Looper Effects Pedals'],
        ['Circuit', 'Digital'],
        ['Bypass', 'Buffered Bypass'],
        ['Audio', 'Mono'],
        ['Power Supply', '9.6VDC-200mA power adapter included'],
        ['Dimensions (in)', '4.5 x 2.75 x 2.1'],
        ['Current Draw', '90mA'],
        ['Year Released', '2014'],
        ['UPC', '683274011530'],
      ],
      description: `The EHX Nano Looper 360 takes the simple, easy-to-use format of a single pedal looper and and adds 11 memory slots for storage of your favorite creations. With 6 minutes of high-quality loop recording time, unlimited overdubs, and easy undo/redo functionality, Nano Looper 360 is compact looper for any pedalboard.

      360 seconds of loop recording time which can be divided into 11 different loops for maximum control and flexibility
      High quality sound and unlimited overdubbing with no degradation in fidelity
      Uncompressed audio, 24-bit A/D/A and 44.1kHz sample rate
      User-friendly layout makes recording a loop, overdubbing, undo-redo and erasing a loop quick and easy
      Features a silent momentary footswitch
      Rugged die-cast package
      Power adapter included`,
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682835/App%20Pedal/Product%20Image/NANO_LOOPER_360_uizule.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682834/App%20Pedal/Product%20Image/NANO_LOOPER_360_1_r6wdvz.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682835/App%20Pedal/Product%20Image/NANO_LOOPER_360_2_t5wpq4.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682835/App%20Pedal/Product%20Image/NANO_LOOPER_360_3_is4snt.png',
        },
      ],

      buttonText: 'Specification',
    },
    {
      id: 8,
      title: 'THE WORM',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Multi Effects Pedals'],
        ['Circuit', 'Analog'],
        ['Bypass', 'True Bypass'],
        ['Audio', 'Mono'],
        ['Power Supply', '24VDC-100mA power adapter included'],
        ['Dimensions (in)', '4.75 x 4 x 2.25'],
        ['Current Draw', '50mA'],
        ['Year Released', '2008'],
        ['UPC', '683274010823'],
      ],
      description: `Modulation madness! All-analog multi-functional modulation effects processor featuring Phaser, Tremolo, Vibrato, and a Neo-modulated Wah. At the heart of the EHX Worm is a specially designed tone-bending engine that creates groundbreaking oscillatory effects.

      True bypass
      Mode selectable analog modulation effects: wah, phaser, vibrato, tremolo
      Manual mode removes the modulation so the effects can be swept by hand
      Optional expression pedal sweep capability
      Tough and compact die-cast chassis
      Power adapter included`,
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682838/App%20Pedal/Product%20Image/THE_WORM_upabjv.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682838/App%20Pedal/Product%20Image/THE_WORM_1_ps9x7e.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682838/App%20Pedal/Product%20Image/THE_WORM_2_wkcnlx.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682837/App%20Pedal/Product%20Image/THE_WORM_3_lv0jc7.png',
        },
      ],

      buttonText: 'Specification',
    },
    {
      id: 9,
      title: 'GRAND CANYON',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Delay Effects Pedals'],
        ['Circuit', 'Digital'],
        ['Bypass', 'Buffered Bypass'],
        ['Audio', 'Stereo'],
        ['Power Supply', '9.6VDC-200mA power adapter included'],
        ['Dimensions (in)', '4.75 x 3.9 x 2.6'],
        ['Current Draw', '150mA'],
        ['Year Released', '2018'],
        ['UPC', '683274012094'],
      ],
      description: `The EHX Grand Canyon is Electro-Harmonix’s most advanced multifunction delay and looper pedal. It’s equipped with 12 effect types plus a fully featured looper capable of recording and overdubbing the Grand Canyon’s effects.

      The pedal provides superior sound quality, up to three seconds of delay time, tap tempo and nine tap divide settings, stereo output, 13 presets, programmable EXP pedal settings, high quality analog bypass with soft switching and more. The Grand Canyon’s 13 modes are:
      
      1. ECHO – pristine 24-bit digital delay with available bit crush/sample rate reduction and low/high pass filtering
      2. MOD – Modulated delay, yields rich flanger, chorus, vibrato, warble and more
      3. MULTI – Multi-tap delay, set the exact number of echo repeats up to 31. Includes adjustable swell or decay volume envelopes on repeats.
      4. REVERSE – Reverse delay, an easy-to-use reverse delay with an intelligent pick detection algorithm for great sounding reverse echoes
      5. DMM – Deluxe Memory Man, re-creates the luscious tone of EHX ‘s legendary bucket-brigade delay pedal
      6. TAPE – Tape Delay, simulates the organic sound of an analog tape, echo machine including tape distortion, wow and flutter
      7. REVERB – Plate reverb plus echo. A reverberant echo where each repeat is followed by a wash of gorgeous plate reverb. Can also be used as a pure reverb without the delay
      8. PITCH – EHX’s critically acclaimed polyphonic pitch shifting plus digital delay provides pitch-shifted echoes and cascading echo repeats
      9.SHIM – Shimmer generates a rich octave-shifted wash of shimmering soundscapes
      10. SAMPLE/HOLD – Sample and hold, senses a note being played and produces echoes indefinitely until another note is detected
      11. DRUM – Magnetic drum echo that faithfully emulates a classic Binson Echorec® style delay. Features an assortment of playback head configurations that let you create musical, rhythmic, echo patterns
      12. DOUBLE – Thickens up a mono signal or creates a stereo spread. Includes detune and delay time offset of the left and right outputs
      13. LOOPER – Looper with up to 16 minutes of recording time. Includes unlimited overdubs, undo/redo, dedicated stop button, loop fade-out, reverse and speed adjust.
      
      Advanced multifunction delay and looper with up to three seconds of delay time
      12 effect types that cover a ton of tonal real estate to fuel your creativity: ECHO, MOD, MULTI, REVERSE, DMM, TAPE, REVERB, PITCH, SHIM, SAMPLE/HOLD, DRUM, DOUBLER
      Tails feature. Select whether the echoes fade out naturally or stops immediately when the pedal is switched to bypass mode
      Tap tempo with nine tap divide subdivisons
      Up to 16 minutes of recording time on the fully featured looper
      Loop audio remains in the Grand Canyon until you erase it, even after removing power
      13 presets can be saved or recalled
      3-button footswitch connector for remote operation`,
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682839/App%20Pedal/Product%20Image/GrandCanyon_xsuj04.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682839/App%20Pedal/Product%20Image/GrandCanyon_1_bnar72.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682841/App%20Pedal/Product%20Image/GrandCanyon_2_az6qxm.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682840/App%20Pedal/Product%20Image/GrandCanyon_3_l7abfo.png',
        },
      ],

      buttonText: 'Specification',
    },
    {
      id: 10,
      title: 'OCEANS 11',
      hashTag: 'New Pedal',
      specification: [
        ['Type Effect', 'Reverb Effects Pedals'],
        ['Circuit', 'Digital'],
        ['Bypass', 'Buffered Bypass'],
        ['Audio', 'Mono'],
        ['Power Supply', '9.6VDC-200mA power adapter included'],
        ['Dimensions (in)', '4.5 x 2.75 x 2.1'],
        ['Current Draw', '150mA'],
        ['Year Released', '2018'],
        ['UPC', '683274012100'],
      ],
      description: `The EHX Oceans 11 is a compact, affordable pedal packed with advanced functionality and 11 reverb styles ranging from essential to exotic.

      The EHX Oceans 11’s reverbs are:
      1. HALL – the rich reverberant sound of a grand concert hall
      2. SPRING – pays homage to the classic Fender® 6G15 tube spring reverb
      3. PLATE – the lush, warm reverb that got its name because a large metal plate was originally used to create it
      4. REVRS – emulates the quirky reverse reverb effect where a note’s reverb fades-in backwards. (Jimmy Page claims to have invented it.)
      5. ECHO –sends a recirculating echo thru the Plate reverb. The crisp clear delays get tastefully smudged by the airy plate reverb
      6. TREM – reverb plus tremolo that’s applied to both the wet and dry mix of a Hall reverb, your choice of three different tremolo shapes
      7. MOD – modulated reverb, three modes. Chorus laced onto the reverb tails creates a luscious atmospheric effect. Flanger wraps around the reverb tails and weaves a hypnotic tapestry. Chorus and flanger combined.
      8. DYNA – Swell, gate and duck. Swell silences your notes’ attacks before blooming the tails back into the soundscape. Gate passes the reverb tail thru a noise gate that opens when it detects playing. (Phil Collins popularized the technique by applying it to drums.) Duck compresses the reverb tail while you’re playing and fades it back in when you’re resting.
      9. AUTO-INF – Auto-infinite reverb that triggers a reverb wash for each note or chord. When a new one is struck, the previously resounding reverb crossfades to the new one
      10. SHIM – Shimmer generates a rich octave-shifted reverb wash that modulates and blossoms behind your signal
      11. POLY – Polyphonic reverb, two configurable bi-directional pitch shifts operating on your pre-reverb signal. Combine dissonant intervals with near infinite decays to create disorienting soundtracks, or choose perfect/major intervals to generate creative harmonies when jumping around a key signature
      
      The Oceans 11 features powerful, yet intuitive “hidden” parameters accessible thru its Secondary Knob Mode that let the player take greater control of its effects.
      
      An internal Tails switch also provides a choice of whether the reverb effect fades out naturally or stops immediately when the pedal is switched to bypass. In most settings the pedal is also capable of producing infinite reverb which can be played over with a fresh reverb effect complete with adjustable parameters!
      
      11 different reverb types: HALL, SPRING, PLATE, REVRS, ECHO, TREM, MOD, DYNA, AUTO-INF, SHIM and POLY
      Tails switch. Select whether the reverb fades out naturally or stops immediately when the pedal is switched to bypass
      Easy access to powerful “hidden” parameters thru Secondary Knob Mode
      Able to produce infinite reverb you can play over in most settings
      Power supply included
      SPECIFICATIONS
      Circuit
      Digital
      Bypass
      Buffered Bypass
      Audio
      Mono
      Power Supply
      9.6VDC-200mA power adapter included
      Dimensions (in)
      4.5 x 2.75 x 2.1
      Current Draw
      150mA
      Year Released
      2018
      UPC
      683274012100
      Owner's Manual
      Download
      `,
      image: [
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682835/App%20Pedal/Product%20Image/OCEANS_11_o7ke87.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682835/App%20Pedal/Product%20Image/OCEANS_11_1_ucevr4.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682836/App%20Pedal/Product%20Image/OCEANS_11_2_jhgdkw.png',
        },
        {
          img: 'https://res.cloudinary.com/dnzo47nze/image/upload/v1657682835/App%20Pedal/Product%20Image/OCEANS_11_3_nxos2i.png',
        },
      ],

      buttonText: 'Specification',
    },
  ];

  return (
    <View style={styles.container}>
      <TitleProduct />
      <View style={styles.divideColumns}>
        {ListPedal.map((item, index) => (
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? color.opacityPress : 'transparent',
              },
              styles.product,
            ]}
            onPress={() =>
              navigation.navigate('Details', {
                ListPedalTmp: ListPedal[index],
              })
            }
            key={item.id}>
            <View style={[styles.cardProduct, styles.shawdow]}>
              <View style={styles.top}>
                <Image
                  style={styles.image}
                  resizeMode="center"
                  source={{
                    uri: item.image[0].img,
                  }}
                />
              </View>
              <View style={styles.bottom}>
                <View style={styles.info}>
                  <Text style={styles.hashTag}>{item.hashTag}</Text>
                  <Text style={styles.nameProduct}>{item.title}</Text>
                </View>
                <TouchableOpacity
                  style={{flex: 1, alignItems: 'center'}}
                  onPress={() =>
                    navigation.navigate('Details', {
                      ListPedalTmp: ListPedal[index],
                    })
                  }>
                  <View style={styles.button}>
                    <Text style={styles.textButton}>{item.buttonText}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  divideColumns: {
    width: windowW,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  product: {
    width: windowW / 2,
    paddingHorizontal: 15,
  },

  cardProduct: {
    backgroundColor: color.textWhite,
    width: 180,
    height: 230,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    elevation: 10,
    marginVertical: 10,
  },
  top: {
    flex: 1.2,
  },
  bottom: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  info: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background,
    width: '70%',
    marginBottom: 10,
    borderRadius: 30,
  },
  textButton: {
    color: color.textWhite,
    fontWeight: '500',
    fontSize: 12,
  },
  hashTag: {
    color: color.textRed,
    fontWeight: '400',
    fontSize: 15,
    paddingBottom: 3,
  },
  nameProduct: {
    fontSize: 20,
    fontWeight: '500',
    color: color.textBlack,
    textTransform: 'capitalize',
  },
});
export default Product;
