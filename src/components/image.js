import Img from '../img/download.png';

class Image {

    insertImage() {
        const img = document.createElement('img');
        img.src = Img;
        img.width = 200;

        document.querySelector('body').appendChild(img);
    }
}

export default Image;