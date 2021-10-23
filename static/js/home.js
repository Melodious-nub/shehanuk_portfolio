let projects = Array.from($('.project'));
let projects_count = projects.length;
let current_diplayed = 2;

if (current_diplayed >= projects_count) {
    $('#showMoreProjects').hide();
}

projects.forEach((element, index) => {
    if (index >= current_diplayed) {
        element.style.display = 'none'
    }
});

$('#showMoreProjectsContainer').on('click', () => {
    current_diplayed += 2;

    projects.forEach((element, index) => {

        if (index >= current_diplayed) {
            element.style.display = 'none';
        } else {
            element.style.display = 'flex';
        }
        if (current_diplayed >= projects_count) {
            $('#showMoreProjects').hide();
        }

    });
})