const date = new Date();

const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = String(date.getFullYear());

const fullDate = `${day}/${month}/${year}`;

const title = document.getElementById("title");
title.innerText = fullDate;
