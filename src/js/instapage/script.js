const urlParams = new URLSearchParams(window.location.search);
const step_count = "";
const page_id = "";
const version_id = "";

const hasQtty = false;

const isFirstPage = false;
const isFinalPage = true;
const country = "au";
const buyRedirect = `https://au.buckedup.com?${urlParams}`;
const discountCode = "";

const params = {};
for (let key in params) {
  urlParams.set(key, params[key]);
}

const productsID = [1393];
const orderBumpIds = {};
const buyButtonsIds = ["#btn1"];
const noThanksButtonsIds = ["#btn-no"];
const redirectUrl = `https://au.buckedup.com?${urlParams}`;
const noThanksRedirect = `https://au.buckedup.com?${urlParams}`;

//stop here.
const origin = window.location.pathname.replace("/", "").replace("/", "");
const getTopLevelDomain = () => {
  const fullDomain = window.location.hostname;
  const domainRegex = /\.([a-z]{2,})\.([a-z]{2,})$/;
  const match = fullDomain.match(domainRegex);
  if (match) {
    return `.${match[1]}.${match[2]}`;
  } else {
    return fullDomain;
  }
};
const cookieConfig = `path=/; domain=${getTopLevelDomain()};max-age=3600`;
document.cookie = `offer_id=${discountCode};${cookieConfig}`;
document.cookie = `page_id=${page_id};${cookieConfig}`;
urlParams.forEach((value, key) => {
  document.cookie = `${key}=${value};${cookieConfig}`;
});
localStorage.setItem("first_page", origin);