function tryLogin(event) {
  event.preventDefault();

  const userIdx = userList.indexOf(loginID.value);

  if (userIdx !== -1) {
    login(userIdx);
  } else {
    signInDialog.showModal();
  }

  console.log(userList);
}

function login(userIdx) {
  loginForm.classList.toggle(HIDDEN_CSS);
  logoutForm.classList.toggle(HIDDEN_CSS);
  extraHeader.classList.toggle(HIDDEN_CSS);

  loginID.value = "";

  extraSpan.innerText = `Greetings, ${userList[userIdx]}`;
  const randomProfileIdx = Math.floor(Math.random() * 5);
  profilePhoto.style.backgroundImage = `$url{profilePhotoList[randomProfileIdx]}`;

  console.log(profilePhotoList[randomProfileIdx]);
}

function signIn(event) {
  event.preventDefault();

  userList.push(loginID.value);
  saveUserList();

  signInDialog.close();
}

function logOut() {
  loginForm.classList.toggle(HIDDEN_CSS);
  logoutForm.classList.toggle(HIDDEN_CSS);
  extraHeader.classList.toggle(HIDDEN_CSS);
}

function saveUserList() {
  localStorage.setItem(USER_KEY, JSON.stringify(userList));
}

function loadUserList() {
  const savedUserList = localStorage.getItem(USER_KEY);

  if (null !== savedUserList) {
    const parsedUserList = JSON.parse(savedUserList);
    userList = parsedUserList;
  }
}

const loginForm = document.querySelector("#login-form");
const loginID = loginForm.querySelector("#login-form input");

const logoutForm = document.querySelector("#logout-form");
const logOutButton = logoutForm.querySelector("#logout-form input");

const signInDialog = document.querySelector("#login-dialog");
const signInButton = signInDialog.querySelector(
  "#login-dialog #confirm-button"
);

const extraHeader = document.querySelector(".extra-header");
const extraSpan = document.querySelector(".greet-user");

const profilePhoto = document.querySelector("#profile-photo");

loginForm.addEventListener("submit", tryLogin);
signInButton.addEventListener("click", signIn);
logOutButton.addEventListener("click", logOut);

loadUserList();
