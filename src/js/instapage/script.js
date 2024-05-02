const urlParams = new URLSearchParams(window.location.search);
const step_count = "lp";
const page_id = "KS-LP-OPS";
const version_id = "auksfb1";

const hasQtty = false;

const isFirstPage = true;
const isFinalPage = false;
const country = "au";
const buyRedirect = `https://.com?${urlParams}`;
const discountCode = "auksfb1";

const params = {};
for (let key in params) {
  urlParams.set(key, params[key]);
}
// 1393
const productsID = [1397];
const orderBumpIds = {};
const buyButtonsIds = ["#btn1", "#btn2", "#btn3"];
const noThanksButtonsIds = [];
const redirectUrl = `https://.com?${urlParams}`;
const noThanksRedirect = `https://.com?${urlParams}`;

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
