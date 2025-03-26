 

let teamBox = document.querySelectorAll('.team-box');
let button = document.querySelector('.btn');
button.addEventListener('click', function () {
    let winner = Math.floor(Math.random() * teamBox.length);
    console.log("Winner Index:", winner);
    let colors = [
        { bg: 'blue', text: 'white' },
        { bg: 'yellow', text: 'red' },
        { bg: 'red', text: 'yellow' },
        { bg: 'purple', text: 'white' },
        { bg: 'orange', text: 'yellow' },
        { bg: 'blue', text: 'white' },
        { bg: 'red', text: 'white' },
        { bg: 'blue', text: 'golden' },
        { bg: 'blue', text: 'white' },
        { bg: 'blue', text: 'white' }
    ];
    teamBox[winner].style.backgroundColor = colors[winner].bg;
    teamBox[winner].style.color = colors[winner].text;
    teamBox[winner].style.height = '150px';
    teamBox[winner].style.width = '320px';
    teamBox[winner].style.fontSize = '24px';
    setTimeout(() => {
        teamBox[winner].style.backgroundColor = '';
        teamBox[winner].style.color = '';
        teamBox[winner].style.height = '';
        teamBox[winner].style.width = '';
        teamBox[winner].style.fontSize = '';
    }, 3000);
});