window.onload = function () {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseover', function () {
            effectOn(member);
        });

        member.addEventListener('mouseout', function () {
            effectOff(member);
        });

        const titleElement = member.querySelector('.team-title');
        titleElement.addEventListener('click', function (e) {
            editTitle(e);
        });
    });
};

var editTitle = function (e) {
    const titleElement = e.target;
    const currentTitle = titleElement.textContent;

    const newTitle = prompt("Enter a new title:", currentTitle);

    if (newTitle !== null) {
        titleElement.textContent = newTitle;
    }
};

function effectOn(element) {
    element.classList.add('hovering');
}

function effectOff(element) {
    element.classList.remove('hovering');
}
