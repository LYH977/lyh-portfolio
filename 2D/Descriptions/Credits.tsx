import RedirectIcon from '../Components/RedirectIcon'

const creditList = [{
    title: 'Attack on Titan',
    link: 'https://sketchfab.com/3d-models/titan-a6effae23f1048c098f3003a4fa6e6d3'
},
{
    title: 'Books',
    link: 'https://sketchfab.com/3d-models/books-618c9eafbf2b47baa1aefe4f973df40c'
},
{
    title: 'Graduation Cap',
    link: 'https://sketchfab.com/3d-models/graduation-86895e10baf54c46896823394766fb86'
}, {
    title: 'Malaysia Petronas Twin Tower',
    link: 'https://sketchfab.com/3d-models/petronas-twin-tower-97423ef101ac40d38604e94f72863d00'
}, {
    title: 'Moon',
    link: 'https://sketchfab.com/3d-models/ps1-style-low-poly-moon-a0800eda5580488092cbb48c415180a9'
}, {
    title: 'Naruto',
    link: 'https://sketchfab.com/3d-models/naruto-1f815313cbe44c1882712549607b1a2c'
}, {
    title: 'Picture Frame',
    link: 'https://sketchfab.com/3d-models/picture-frame-by-velivian-fesothe-9150adf097a24d929840eae6b2903dc4'
}, {
    title: 'Plant',
    link: 'https://sketchfab.com/3d-models/house-plant-4c4cfc7a848a45ada6e5facf2280ac3a'
}, {
    title: 'Shelf (Hexagon)',
    link: 'https://sketchfab.com/3d-models/wall-shelf-c65e6c88c17641adad2d5bf9f9db0d78'
}, {
    title: 'Shelf (Rectangle)',
    link: 'https://sketchfab.com/3d-models/floating-wall-shelf-unit-31b378d7ebd0494bb90109d7dd38b3f8'
}, {
    title: 'Sydney Opera House',
    link: 'https://sketchfab.com/3d-models/sydney-opera-house-317b2d540f0a4f7e8d87dd3b0372712d'
}, {
    title: 'Tablet',
    link: 'https://sketchfab.com/3d-models/low-poly-sci-fi-tablet-ee1fde7ec1514fd5a61790809ebd46a6'
},
]

export const CreditsMarkup = (
    <>
        <h1>List of Credits</h1>
        <p>Big shoutout to authors who provide these amazing 3D models in <a target='_blank' href='https://sketchfab.com/'>SketchFeb</a><RedirectIcon /></p>
        <ul>
            { creditList.map((item, index) => (
                <li key={ index }>
                    <a target='_blank' href={ item.link }>
                        { item.title }{ ' ' }
                    </a>
                    <RedirectIcon />
                </li>
            )) }
        </ul>
    </>
)
