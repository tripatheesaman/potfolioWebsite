let tabs = document.getElementsByClassName("about__h2");
let tabContents = document.getElementsByClassName("about__tab-contents");

const openTab = (selectedTab) => {
  for (tab of tabs) {
    tab.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(selectedTab).classList.add("active-tab");
};
let sideMenu = document.getElementById("sidemenu");
const openMenu = () => {
  sideMenu.style.right = "0";
};
const closeMenu = () => {
  sideMenu.style.right = "-200px";
};
