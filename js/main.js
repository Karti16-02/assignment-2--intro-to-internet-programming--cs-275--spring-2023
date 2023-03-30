window.onload = () => {
      let body = document.querySelector('body')
        let script = document.createElement('script')
        script.setAttribute('src', 'json/data.json')

        body.append(script)
}

let body = document.querySelector(`body`);
let carouselslides = document.getElementsByClassName(`carousel-slides`)[0];

let navigation = document.getElementsByClassName(`carousel-navigation`);
navigation = navigation[0].children;

let leftArrow = navigation[0];
leftArrow.classList.add(`left-arrow`);

let rightArrow = navigation[1];
rightArrow.classList.add(`right-arrow`);

function slides(data) {
  let index = 0;
  const slideWidth = -660;

  for(let i = 0; i < data.length; i++){
    let slideInstance = document.createElement(`div`);
    slideInstance.classList.add(`slide`);

    let album = document.createElement(`p`);
    album.textContent = data.slide[i].album;
    album.classList.add(`album`);

    let artist = document.createElement(`p`);
    artist.classList.add(`artist`);
    artist.innerHTML = `<a href="${data.slide[i].url}">${data.slide[i].artist}</a>`;

    let picture = document.createElement(`img`);
    picture.setAttribute(`src`, data.slide[i].cover_image.path);
    picture.setAttribute(`id`, `pic`);
    picture.setAttribute(`alt`, data.slide[i].cover_image.alt_content);
    picture.setAttribute(`width`, data.slide[i].cover_image.width);
    picture.setAttribute(`height`, data.slide[i].cover_image.height);

    let credit = document.createElement(`p`);
    credit.setAttribute(`id`, `credit`);
    credit.innerHTML = `Credit: <a href="${data.slide[i].cover_image.credit}">${data.slide[i].cover_image.credit}</a>`;

    let description = document.createElement(`p`);
    description.textContent = data.slide[i].review.content;
    description.setAttribute(`id`, `description`);

    let author = document.createElement(`p`);
    author.setAttribute(`id`, `author`);
    author.innerHTML = `-<a href="${data.slide[i].review.url}">${data.slide[i].review.source}</a>`;
    slideInstance.appendChild(album);
    slideInstance.appendChild(artist);
    slideInstance.appendChild(picture);
    slideInstance.appendChild(credit);
    slideInstance.appendChild(description);
    slideInstance.appendChild(author);

    carouselslides.appendChild(slideInstance);

  }

  rightArrow.addEventListener(`click`, () => {
    if(index > 0) {
      leftArrow.style.zIndex = 3;
      index--;
      carouselslides.style.marginLeft = slideWidth * index + `px`;
      if(index === 0){
        rightArrow.style.zIndex = 0;
      }
    }
  });

  leftArrow.addEventListener(`click`, () => {
    if(index < carouselslides.children.length - 1) {
      rightArrow.style.zIndex = 3;
      index++;
      carouselslides.style.marginLeft = slideWidth * index + `px`;
      if(index === carouselslides.children.length -1){
        leftArrow.style.zIndex = 0;
      }
    }
  });

  document.addEventListener(`keydown`, (k) => {
    if(k.code === `ArrowRight`){
      if(index > 0) {
        leftArrow.style.zIndex = 3;
        index--;
        carouselslides.style.marginLeft = slideWidth * index + `px`;
        if(index === 0){
          rightArrow.style.zIndex = 0;
        }
      }
    }
  });

  document.addEventListener(`keydown`, (k) => {
    if(k.code === `ArrowLeft`){
      if(index < carouselslides.children )
    }
}
