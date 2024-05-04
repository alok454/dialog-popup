const showDialogButton = document.querySelector("#show-dialog");
const dialogParent = document.querySelector(".dialog-parent");
const closeDialogButton = dialogParent.firstElementChild.lastElementChild;


showDialogButton.addEventListener('click', (e) => {
    dialogParent.id = "show-dialog-display"
    console.log(dialogParent.id)
})

closeDialogButton.addEventListener('click', (e) => {
    dialogParent.id = "";
    console.log(dialogParent.id)
})