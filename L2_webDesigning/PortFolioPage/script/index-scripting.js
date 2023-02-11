let skill_card = document.querySelectorAll('.skill-card')
console.log(skill_card);


Array.from(skill_card).forEach((skillCard) => {
    skillCard.addEventListener('click', () => {
        // console.log(skillCard);
    })
})