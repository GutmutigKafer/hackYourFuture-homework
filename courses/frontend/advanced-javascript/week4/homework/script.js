import { key } from "./secret.js";

const inputUrl = document.getElementById("input-url");
const submitButton = document.getElementById("submit-button");
const libraryDom = document.getElementById("library");

const library = [];
let loadingScreen = null;

class Screenshot {
  constructor(website, link, id) {
    this.website = website;
    this.link = link;
    this.id = id;
    this.element = null;
  }

  renderPreview() {
    const isOverlay = document.querySelector(".screenshot-overlay");
    if (isOverlay) isOverlay.remove();

    const image = document.createElement("img");
    image.setAttribute("src", this.link);
    const showScreenshot = document.createElement("div");
    showScreenshot.setAttribute("class", "screenshot-overlay");
    const popupWindow = document.createElement("div");
    popupWindow.setAttribute("class", "popup");

    const h3 = document.createElement("h3");
    h3.textContent = "Screenshot taken!";
    popupWindow.appendChild(h3);

    popupWindow.appendChild(image);
    showScreenshot.appendChild(popupWindow);
    document.body.appendChild(showScreenshot);

    const p = document.createElement("p");
    p.innerHTML = `<a href="${this.website}">Website</a>   ||   <a href="${this.link}">Screenshot Link</a>`;
    popupWindow.appendChild(p);

    const closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.setAttribute("class", "close-btn");
    popupWindow.appendChild(closeButton);

    closeOverlay(showScreenshot, closeButton);
  }

  renderInLibrary() {
    const newPhoto = document.createElement("img");
    newPhoto.setAttribute("src", this.link);
    newPhoto.setAttribute("class", "photo");
    newPhoto.dataset.id = this.id;
    libraryDom.appendChild(newPhoto);
  }
}

const getScreenshot = async () => {
  const url = inputUrl.value.trim();
  const host = "website-screenshot6.p.rapidapi.com";
  let validUrl;

  try {
    validUrl = new URL(url);
  } catch {
    const error = new InvalidUrlError(url);
    showError(error.userMessage);
    return;
  }
  showLoading();

  const encodedUrl = encodeURIComponent(validUrl.href);
  const sendUrl = `https://${host}/screenshot?url=${encodedUrl}&width=1920&height=1080`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": key,
      "x-rapidapi-host": host,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(sendUrl, options);

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    const result = await response.json();

    if (result) {
      const screenshot = new Screenshot(validUrl.href, result.screenshotUrl);
      screenshot.renderPreview();
      library.push(screenshot);
      screenshot.id = library.indexOf(screenshot);
      addToLibrary(screenshot);
      console.log(library);
    }
  } catch (error) {
    if (error instanceof ScreenshotError) {
      showError(error.userMessage);
    } else {
      console.log(error);
      showError("An unexpected error occurred. Please try again.");
    }
  } finally {
    hideLoading();
  }
};

const saveScreenshot = () => {};

const showLoading = () => {
  if (loadingScreen) return;
  loadingScreen = document.createElement("div");
  loadingScreen.setAttribute("class", "loading-overlay");
  loadingScreen.innerHTML = `
  <div class="loading-circle"></div>
    <p>Taking screenshot, please wait...</p>
  `;
  document.body.appendChild(loadingScreen);
};

const hideLoading = () => {
  if (loadingScreen) {
    loadingScreen.remove();
    loadingScreen = null;
  }
};

const showError = (message) => {
  const errorDiv = document.createElement("div");
  errorDiv.setAttribute("class", "error");
  errorDiv.textContent = message;
  document.body.appendChild(errorDiv);
  setTimeout(() => errorDiv.remove(), 4000);
};

const closeOverlay = (overlay, button) => {
  button.addEventListener("click", () => {
    overlay.remove();
  });
};

submitButton.addEventListener("click", () => {
  getScreenshot();
});
const addToLibrary = async (screenshot) => {
  await screenshot.renderInLibrary();
  libraryDom.childNodes.forEach((onePhoto) => {
    onePhoto.addEventListener("click", () => {
      const photoDomId = onePhoto.dataset.id;
      const photoInLibrary = library[photoDomId];
      photoInLibrary.renderPreview();
      console.log(onePhoto);
      console.log(photoInLibrary);
    });
  });
};

//! ------ Error classes -------
//!
//!
class ScreenshotError extends Error {
  constructor(message, userMessage) {
    super(message);
    this.name = "ScreenshotError";
    this.userMessage = userMessage || "Something went wrong. Please try again.";
  }
}

class InvalidUrlError extends ScreenshotError {
  constructor(url) {
    super(
      `Invalid URL: ${url}`,
      "Please enter a valid URL (e.g., https://example.com)",
    );
    this.name = "InvalidUrlError";
  }
}

class ApiError extends ScreenshotError {
  constructor(status, statusText) {
    super(
      `API responded with ${status} ${statusText}`,
      "The screenshot service is currently unavailable. Please try later.",
    );
    this.name = "ApiError";
    this.status = status;
  }
}
