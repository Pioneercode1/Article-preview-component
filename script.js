// 
const btnIconShow = document.getElementById("img-icon-share");
const btnIconHidden = document.getElementById("img-icon-hidden");
// 
const avatarContainer = document.querySelector(".avatar-container");
const shareComponent = document.querySelector(".share-component-none");
// show shareComponent
btnIconShow.addEventListener("click", () => {
    avatarContainer.setAttribute("class", "avatar-container-none");
    // 
    shareComponent.setAttribute("class", "share-component-block");
});
// hidden shareComponent
btnIconHidden.addEventListener("click", () => {
    avatarContainer.setAttribute("class", "avatar-container");
    // 
    shareComponent.setAttribute("class", "share-component-none");
});