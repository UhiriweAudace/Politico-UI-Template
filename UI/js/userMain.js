/************ User related data */

const content = document.getElementById("content");
const viewAllParty = document.getElementById("viewAllParty").addEventListener("click", () => {
    content.innerHTML = '<object width="900" height="800" type="text/html" data="UserAllParties.html"></object>'
})
const viewAllPolitician = document.getElementById("viewAllPolitician").addEventListener("click", () => {
    content.innerHTML = '<object width="900" height="800" type="text/html" data="UserAllPolitician.html"></object>'
})
const votePolitician = document.getElementById("votePolitician").addEventListener("click", () => {
    content.innerHTML = '<object width="950" height="800" type="text/html" data="UserVote.html"></object>'
})

