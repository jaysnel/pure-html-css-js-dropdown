document.addEventListener('click', function(e) {
    e = e || window.event;
    parent = e.target.parentNode;
    childAnswer = parent.querySelector('.answer');
    childExpandIcon = parent.querySelector('.expander-icon');
    dropdown = Object.values(parent.classList).includes("dropdown") ? true : false;

    if(dropdown) updateDropdowns();

    function updateDropdowns() {
        allShownAnswers = Object.values(document.getElementsByClassName("show-answer"));
        allShownAnswers.forEach(el => {
            el.classList.remove("show-answer");
        })

        allExpandIcons = Object.values(document.getElementsByClassName("expander-icon"));
        allExpandIcons.forEach(el => {
            el.classList.remove("flip-icon");
        })

        childAnswer.classList.add("show-answer");
        childExpandIcon.classList.add("flip-icon");
    }
})