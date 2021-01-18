export const View = state =>
  div({ class: 'screen', 'data-name': 'about' }, [
    div({ class: 'header' }, [
      svg({ class: 'logo', viewBox: '0 0 54 60' }, [
        path({ d: 'M36 0v10h9v40h-9v10h18V0zM0 0v60h18V50H9V10h9V0z', fill: '#0c0c0c' }),
      ]),
      h2(['Artificial', br(), 'Museum']),
    ]),

    img({
      class: 'header',
      src: `${state.staticUrl}/about/about_header.jpg`,
      width: '1200',
      height: '900',
    }),

    div({ class: 'slogan' }, [
      p("WE DON'T NEED SPACE,"),
      p('TIME IS IRRELEVANT,'),
      p('OBJECTS STAY AS USEFUL'),
      p('AS THE USER.'),
    ]),

    div({ class: 'manifest' }, [
      p([
        b('TheSystem - Artificial Museum'),
        ' is the connection between physical, digital, and imaginary worlds,',
        ' transforming analog art into digital experiences.',
      ]),
      p([
        'These "augmented" artworks form the foundation of an artificial museum,',
        ' allowing artists to bridge the chasm between their art',
        ' and the evolving digitized world around them.',
      ]),

      p([
        'The Museum is connected to the real world through the',
        ' web-based augmented reality application you are currently visiting,',
        ' we hope you will enjoy your stay.',
      ]),
    ]),

    img({
      class: 'preview',
      src: `${state.staticUrl}/about/about_preview.jpg`,
      width: '1200',
      height: '900',
    }),

    div({ class: 'manifest' }, [
      b('TheSystemCollective'),
      ' is a syndicate of independent artists, makers, programmers,',
      ' engineers, philosophers, activists, and scientists,',
      ' collectively using art and technology to transform our world.',
      ' We believe in a literal definition of "open source",',
      ' and convert public spaces into a museum,',
      ' ready for artists to freely position their art.',
    ]),

    Team(state),

    div({ class: 'collectives' }, [
      h4('Involved collectives'),

      p([
        'Dachsbau,',
        ' ',
        Link({ to: 'https://metalab.at', text: 'Metalab' }),
        ' ',
        Link({ to: 'https://notgalerie.at', text: 'Notgalerie' }),
        ' ',
        Link({ to: 'https://www.facebook.com/sandkastensyndikat/', text: 'Sandkasten Syndikat' }),
        ' ',
        Link({ to: 'https://setzkastenwien.at/', text: 'Setzkasten Wien' }),
        ' ',
        'Villa Schapira',
        ' ',
        Link({ to: 'http://mysoundofmusic.at', text: 'Zirkus Mops' }),
      ]),
    ]),

    div({ class: 'commissioned' }, [
      h4('Commissioned by:'),
      Link({ to: 'https://koer.or.at' }, [
        img({
          class: 'koer',
          height: '60',
          src: `${state.staticUrl}/support/koer.svg`,
          alt: 'Kunst im öffentlichen Raum Wien GmbH',
        }),
        img({
          height: '60',
          src: `${state.staticUrl}/support/wien-kultur.svg`,
          alt: 'Stadt Wien',
        }),
      ]),

      footer([
        div([
          svg({ class: 'logo', viewBox: '0 0 54 60' }, [
            path({ d: 'M36 0v10h9v40h-9v10h18V0zM0 0v60h18V50H9V10h9V0z', fill: '#ffffff' }),
          ]),

          div([
            h4('Impressum'),

            h5('Address:'),
            p('TheSystemCollective, z.H. Daniela Weiss'),
            p('Yppenplatz 5'),
            p('1170 Wien'),
            p('Austria'),
          ]),

          h5('Represented by:'),
          p('Litto / Daniela Weiss'),

          h5('Email:'),
          Link({
            to: 'mailto:thesystemcollective@gmail.com',
            text: 'thesystemcollective@gmail.com',
          }),
        ]),

        div([
          h4('Privacy notice'),

          p('We promise to never analyze, transmit, or save any data about you.'),

          h5('Local data'),
          p([
            'All browser features that collect sensitive data',
            ' (device orientation, 3d-map of your surroundings, camera video streams, geolocation)',
            ' DO NOT and NEVER WILL transmit this data to our servers.',
          ]),

          h5('Session storage'),
          p([
            'We save some data in your browser (your last gps location).',
            'This information gets deleted as soon as you close the browser tab.',
          ]),
        ]),

        div({ class: 'social' }, [
          a(
            {
              href: 'https://www.instagram.com/theartificialmuseum/',
              nofollow: true,
              noreferrer: true,
              noopener: true,
            },
            [
              svg({ viewBox: '0 0 512 512', height: '45' }, [
                path({
                  fill: '#fafafa',
                  d:
                    'M256 50l102 1c24 1 38 5 47 9a78 78 0 0129 18 78 78 0 0118 30c4 8 8 22 9 46 1 27 2 35 2 102l-2 102a139 139 0 01-9 47 83 83 0 01-47 47c-9 4-23 8-47 9-27 1-35 2-102 2l-102-2a140 140 0 01-47-9 78 78 0 01-29-18 78 78 0 01-18-29c-4-9-8-23-9-47-1-27-2-35-2-102l2-102c1-24 5-38 9-47a78 78 0 0118-29 78 78 0 0130-18c8-4 22-8 46-9a1750 1750 0 01102-1m0-46c-68 0-77 0-104 2a185 185 0 00-61 11 124 124 0 00-45 29 124 124 0 00-29 45 185 185 0 00-11 61c-2 27-2 36-2 104l2 104c1 27 5 45 11 61a124 124 0 0029 45 124 124 0 0045 29c16 6 34 10 61 11a1831 1831 0 00208 0 185 185 0 0061-11 129 129 0 0074-74c6-16 10-34 11-61 2-27 2-36 2-104l-2-104a185 185 0 00-11-61 124 124 0 00-29-45 124 124 0 00-45-29 185 185 0 00-61-11c-27-2-36-2-104-2z',
                }),
                path({
                  fill: '#fafafa',
                  d:
                    'M256 127a129 129 0 10129 129 129 129 0 00-129-129zm0 213a84 84 0 1184-84 84 84 0 01-84 84z',
                }),
                circle({ fill: '#fafafa', cx: '391', cy: '122', r: '30' }),
              ]),
            ],
          ),

          Link(
            {
              to: 'https://www.youtube.com/channel/UCBwKwgk_eU8w-ccmTOFXADQ',
              nofollow: true,
              noeferrer: true,
              noopener: true,
            },
            [
              svg({ class: 'youtube', viewBox: '0 0 156 109', height: '30' }, [
                path({
                  d:
                    'M152 17a20 20 0 00-13-14c-12-3-61-3-61-3S29 0 17 3A20 20 0 003 17C0 39-2 71 3 92a20 20 0 0014 14c12 3 61 3 61 3s49 0 61-3a20 20 0 0014-14c3-21 5-54-1-75z',
                  fill: '#fafafa',
                }),
                path({ d: 'M62 78l41-23-41-24z', fill: '#0c0c0c' }),
              ]),
            ],
          ),
        ]),
      ]),
    ]),
  ])
