const Editparty = document.getElementById("EditParty").addEventListener("click", () => {
    displayContent.innerHTML = '<object width="900" height="800" type="text/html" data="PartiesList-edit.html"></object>'
});

const DeleteParty = document.getElementById("DeleteParty");
DeleteParty.addEventListener("click", () =>
    displayContent.innerHTML = '<object width="900" height="800" type="text/html" data="PartiesList-delete.html"></object>'
);