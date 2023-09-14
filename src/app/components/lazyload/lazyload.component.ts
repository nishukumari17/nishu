import { Component } from '@angular/core';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.css']
})
export class LazyloadComponent {
  defaultImage = 'https://www.placecage.com/500/1000';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';

  images = `https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg 700w,
            https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg 1100w`;
            screen_lg = '120px';
            screen_md = '99px';
            image1 = 'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?fm=jpg';
  image2 = 'https://images.unsplash.com/photo-1439931444800-9bcc83f804a6?fm=jpg';
  image3 = 'https://images.unsplash.com/photo-1417128281290-30a42da46277?fm=jpg';
}
