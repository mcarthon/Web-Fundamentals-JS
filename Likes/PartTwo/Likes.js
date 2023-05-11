var likesArray = [9, 9, 9];
let classArray = [
    document.querySelector("#like-count-0"),
    document.querySelector("#like-count-1"),
    document.querySelector("#like-count-2")
];


function addLikes(idx) {
    likesArray[idx]++;
    classArray[idx].innerText = `${likesArray[idx]} like(s)`;
}