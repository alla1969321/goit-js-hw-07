const images = [
  {
    url: "https://s3-alpha-sig.figma.com/img/5dde/4622/0907ed8fd691000bbe73fee51101d8ee?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qu0JInCxP0t10eWIAHoHbGueiqdnktfB5EPA98zaAimE1T0ty~ggbdcuCR3yhv7TmjvCfv6TWkdqY5DsvWRs1JaNeG9~qgoUh2ZM27XEIMi89aLmaSSQr81YRRl7fx~4KsscrSkI2XE0Qk~rBdRMyL~dOFbdTmYXNdXz2i6bCuv9UoAR-uFeJXuDhRUj-U5JSK7mrhuVMwFp3Hf7cQ6857oUPGnEFZ86oE9KO8ufGztZZoN-Kr-ryjvRXeQf7ppFCMWP-2GRKx5oHYXzEAyn1wMDVjOKpENZniynzdaXdqLIdy6pCOzfWJM0c50bl3BRtwIqCvC6LpUBc1XmLgnfzQ__",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const makeGalleryCard = (imgInfo) => {
  const liElement = document.createElement("li");
  liElement.classList.add("gallery-item");
  liElement.style.width = "calc((100% - 48px) / 3)"

  const cardImg = document.createElement("img");
  cardImg.src = imgInfo.url;
  cardImg.alt = imgInfo.alt;
  cardImg.width = "360";
  cardImg.height = "300";
  

  liElement.append(cardImg);
  return liElement;
}

const gelleryCardArr = images.map(imgInfo => makeGalleryCard(imgInfo));

const listOfCard = document.querySelector(".gallery");
listOfCard.append(...gelleryCardArr);

listOfCard.style.listStyleType = "none";
listOfCard.style.display = "flex";
listOfCard.style.flexWrap = "wrap";
listOfCard.style.columnGap = "24px";
listOfCard.style.rowGap = "48px";
listOfCard.style.margin = "100px auto 100px auto";
listOfCard.style.padding = "0";
listOfCard.style.justifyContent = "center";
listOfCard.style.maxWidth = "1128px";