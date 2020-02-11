// Import lit-html functions
import {html, render} from 'lit-html';

const items = [{srcset: '', src:''},
{srcset: 'https://intrinsic-layout-guide.glitch.me/img/tees/Defenders-of-the-moon-tee.webp 1x', src:'https://intrinsic-layout-guide.glitch.me/img/tees/Defenders-of-the-moon-tee.jpg'},
{srcset: 'https://intrinsic-layout-guide.glitch.me/img/tees/Statix-Boy-Black-Tee.webp 1x', src:'https://intrinsic-layout-guide.glitch.me/img/tees/Statix-Boy-Black-Tee.jpg'},
{srcset: 'https://intrinsic-layout-guide.glitch.me/img/tees/Discover-Paradise-Vintage-Black-Scoop.webp 1x', src:'https://intrinsic-layout-guide.glitch.me/img/tees/Discover-Paradise-Vintage-Black-Scoop.jpg'},
{srcset: 'https://intrinsic-layout-guide.glitch.me/img/tees/The-Archer-Tee-BLACK.webp 1x', src:'https://intrinsic-layout-guide.glitch.me/img/tees/The-Archer-Tee-BLACK.jpg'},
{srcset: 'https://intrinsic-layout-guide.glitch.me/img/tees/Strange-World-Black-Tee.webp 1x', src:'https://intrinsic-layout-guide.glitch.me/img/tees/Strange-World-Black-Tee.jpg'},
{srcset: 'https://intrinsic-layout-guide.glitch.me/img/tees/Alchemist-Returns-Tee-BLACK.webp 1x', src:'https://intrinsic-layout-guide.glitch.me/img/tees/Alchemist-Returns-Tee-BLACK.jpg'},
{srcset: 'https://intrinsic-layout-guide.glitch.me/img/tees/Shred-Seattle-Tee.webp 1x"', src:'https://intrinsic-layout-guide.glitch.me/img/tees/Shred-Seattle-Tee.jpg'},]


const myTemplate = ()=> html`
<section class="horizontal-snap">
  <a><picture>
    <source type="image/webp" srcset="">
    <img src="" loading="lazy">
  </picture></a>
</section>
`;


render(myTemplate(), document.body.querySelector('section')
);

