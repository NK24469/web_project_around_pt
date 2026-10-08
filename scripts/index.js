let initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const cardsList = document.querySelector(".cards__list");

function renderCard(name, link, cardsList) {
  const cardElement = getCardElement(name, link);
  cardsList.prepend(cardElement);
}

initialCards.forEach(function (item) {
  renderCard(item.name, item.link, cardsList);
});

const profileEditBtn = document.querySelector(".profile__edit-button");
const profileEditModal = document.querySelector("#edit-popup");
const popupClose = profileEditModal.querySelector(".popup__close");

const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__description");

const nameInput = profileEditModal.querySelector(".popup__input_type_name");
const aboutInput = profileEditModal.querySelector(
  ".popup__input_type_description",
);

const profileForm = document.querySelector("#edit-profile-form");

const cardAddBtn = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector("#new-card-popup");
const popupNewCardClose = popupNewCard.querySelector(".popup__close");
const newCardForm = document.querySelector("#new-card-form");

const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardLinkInput = document.querySelector(".popup__input_type_url");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(profileEditModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeModal(profileEditModal);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardName = cardNameInput.value;
  const cardLink = cardLinkInput.value;

  renderCard(cardName, cardLink, cardsList);
  closeModal(popupNewCard);

  newCardForm.reset();
}

newCardForm.addEventListener("submit", handleCardFormSubmit);

cardAddBtn.addEventListener("click", () => {
  openModal(popupNewCard);
});

popupNewCardClose.addEventListener("click", () => {
  closeModal(popupNewCard);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

profileEditBtn.addEventListener("click", function () {
  handleOpenEditModal();
});

popupClose.addEventListener("click", function () {
  closeModal(profileEditModal);
});

function getCardElement(
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg",
) {
  const cardTemplate = document
    .querySelector("#card__template")
    .content.querySelector(".card");

  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = name;
  cardImage.setAttribute("src", link);

  return cardElement;
}
