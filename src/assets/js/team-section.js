const teamSrc = [
    'src/assets/image/team/waren.jpeg',
    'src/assets/image/team/simmons.jpeg',
    'src/assets/image/team/duoing.jpeg',
    'src/assets/image/team/howard.jpeg',
];

const teamList = document.querySelector('.team_list');
const teamItems = teamList.querySelectorAll('.team_list-item');
const teamMemberPhoto = document.querySelector('.team-photo');

let isClicked = false;

export function teamSection() {
    teamList.addEventListener('click', (e) => {
        if (isClicked) return;
        const target = e.target.closest('.team_list-item');
        if (target) {
            console.log(e)
            if (target.classList.contains('team_list-item-active')) return

            isClicked = true;

            teamItems.forEach(item => item.classList.remove('team_list-item-active'));
            target.classList.add('team_list-item-active');
            teamMemberPhoto.style.opacity = '0';
            teamMemberPhoto.ontransitionend = () => {
                teamMemberPhoto.src = teamSrc[target.getAttribute('data-id')]
                teamMemberPhoto.style.opacity = '1';
                isClicked = false;
            };
        }
    })
}

teamSection()
