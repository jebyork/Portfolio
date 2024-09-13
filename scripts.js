function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(`.skill-bar`);

    skillBars.forEach(bar => {
        const skillName = bar.getAttribute("skill-name");
        const rating = bar.getAttribute(`data-rating`);
        const percentageRating = rating * 10;

        const infoElement = bar.querySelector(`.info`);
        const ratingBar = bar.querySelector(`.rating-bar`);

        infoElement.textContent = `${skillName} ${rating}/10`;
        ratingBar.style.width = `${percentageRating}%`;
    });
});