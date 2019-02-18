const displayContent = document.getElementById("display-inner-content")
displayContent.innerHTML = '<object width="900" height="800" type="text/html" data="parties.html"></object>'


const CreateParty = document.getElementById("CreateParty").addEventListener("click", () => {
    displayContent.innerHTML = '<object width="900" height="800" type="text/html" data="createParty.html"></object>'
})

const CreateOffice = document.getElementById("CreateOffice").addEventListener("click", () => {
    displayContent.innerHTML = '<object width="900" height="800" type="text/html" data="createOffice.html"></object>'
});
const Dashboard = document.getElementById("dashboard").addEventListener("click", () => {
    displayContent.innerHTML = '<object width="900" height="800" type="text/html" data="parties.html"></object>'
})