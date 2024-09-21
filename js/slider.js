const currentDate = new Date();
const currentHour = currentDate.getHours();
console.log(currentHour);

const imgSrc = document.querySelector("#img-src");

if (currentHour >= 0 && currentHour < 6) {
  imgSrc.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYdv9oJNqhw-TfRN4LA38cLHWlyVapASIKA&usqp=CAU";
} else if (currentHour >= 6 && currentHour < 12) {
  imgSrc.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPi8I7eURs9EZJEQdp0do42us1KP8BkTrUOw&usqp=CAU";
} else if (currentHour >= 12 && currentHour < 18) {
  imgSrc.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBMglABe03_aY-m4umgPieAOtHvJS4kqAfg&usqp=CAU";
} else if (currentHour >= 18 && currentHour < 24) {
  imgSrc.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttj_h3qWQcOWf721CZPABQ_EZ_hl0KhVvaQ&usqp=CAU";
}
