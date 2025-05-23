const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

createGallery(images);
function createGallery() {
  let itemsLi = [];
  for (let i = 0; i < 9; i++) {
    // create li
    const itemLi = document.createElement('li');
    itemLi.classList.add('gallery-item');

    //destructure images
    const { preview, original, description } = images[i];

    // create a
    const itemA = document.createElement('a');
    itemA.classList.add('gallery-link');
    itemA.href = original;
    itemLi.append(itemA);

    //create img
    const itemImg = document.createElement('img');
    itemImg.classList.add('gallery-image');
    itemImg.src = preview;
    itemImg.alt = description;
    itemImg.dataset.src = original;
    itemA.append(itemImg);

    itemsLi.push(itemLi);

    gallery.addEventListener('click', fnReactionListener);

    function fnReactionListener(e) {
      e.preventDefault();
      if (e.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(
          `
    <img src= "${e.target.dataset.src}" 
    class="modal-img" 
    width="1112" 
    height="640" 
    alt='${e.target.alt}'
    >
    `,
          {
            onShow: (instance) => {
              const bg = instance.element();
              bg.style.background = '#2E2F42CC';
              const closeHandler = (event) => {
                if (!bg.querySelector('img').contains(event.target)) {
                  instance.close();
                  document.removeEventListener('click', closeHandler);
                }
              };
              setTimeout(() => {
                document.addEventListener('click', closeHandler);
              }, 100);
            },
          },
        );
        instance.show();
      }
    }
  }
  return gallery.append(...itemsLi);
}
