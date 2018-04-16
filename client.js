console.log(people);

$(document).ready(onReady);
console.log('jQuery is ready');

let min = 0;
let max = people.length -1;
let randomPerson = people[randomNumber(min, max)].name;
function onReady() {
    for(let person of people ) {
        $('body').append('<div><img src="https://github.com/' + person.githubUsername + '.png?size=250" alt="Profile image of ' + person.name+'" </div>');
        $('div:last').data('name', person.name);
        console.log($('div:last').data('name'));
    }
    $('h1').text(randomPerson);
    $('div').on('click', checkGuess); 

}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
function checkGuess(){
    if($(this).closest('div').data('name')== randomPerson) {
        console.log('success');
        alert('Success!!!!');
        $('h1').append('<button id="goAgain">Play Again</button>');
        $('#goAgain').on('click', function() {
            randomPerson = people[randomNumber(min, max)].name;
            $('h1').text(randomPerson);
        
        });
    }
    else{
        console.log('wrong');
        alert('Wrong! Try Again');
    }
}


