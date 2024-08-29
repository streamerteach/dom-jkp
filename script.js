window.onload = function () {
    // Select all team member images
    const teamMembers = document.querySelectorAll('.team-member');

    // Attach event listeners to each team member
    teamMembers.forEach(member => {
        const profileImage = member.querySelector('.profile');
        const titleElement = member.querySelector('.team-title');

        // Add hover effects
        profileImage.addEventListener('mouseover', function () {
            effectOn(profileImage);
        });

        profileImage.addEventListener('mouseout', function () {
            effectOff(profileImage);
        });

        // Add click event to edit title
        titleElement.addEventListener('click', function (e) {
            editTitle(e);
        });
    });
};

var editTitle = function (e) {
    const titleElement = e.target;
    const currentTitle = titleElement.textContent;

    // Create an input element for editing the title
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentTitle;

    // Replace the title with the input field
    titleElement.replaceWith(input);

    // Focus the input field
    input.focus();

    // When the input loses focus, save the new title
    input.addEventListener('blur', function () {
        const newTitle = input.value;
        titleElement.textContent = newTitle;

        // Replace the input with the updated title
        input.replaceWith(titleElement);
    });

    // Allow pressing 'Enter' to save the title
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            input.blur();
        }
    });
};

function effectOn(element) {
    // Add class 'hovering' for the effect
    element.classList.add('hovering');
}

function effectOff(element) {
    // Remove class 'hovering' for the effect
    element.classList.remove('hovering');
}
