const prompt = require(`prompt-sync`)();
const username = prompt(`Enter your name? `);
console.log(`Your name is ${username}`);

let heroHealth = 100;
let heroAge = 25
let heroPath = 4
const heroAttack = 10;
const heroDefense = 5;


let monsterHealth = 80;
const monsterAttack = 8;
const monsterDefense = 3;

function calculateHeroDamage (heroDefense, monsterAttack) {
    let heroDamage = monsterAttack - heroDefense;
}

function calculateMonsterDamage (monsterDefense, heroAttack) {
    let monsterDamage = heroAttack - monsterDefense;
}

if (heroPath < 10) {
    for (let heroPath = 4; heroPath < 10;) {
        console.log(`You still have more steps to take on your journey to face the monster. How many steps do you want to take?`);
        let steps = prompt(`Enter number of steps: `);
        heroPath += parseInt(steps);
        console.log(`You have taken ${steps} steps and are now at position ${heroPath}.`);
        if (heroPath >= 10) {
    console.log(`You have encountered a monster with ${monsterHealth} health!`)
    }}
} 
let battleChoice = prompt(`Do you want to battle the monster? (yes/no): `)
if (battleChoice === `yes`) {
    battle();
} else if (battleChoice === `no`) {
    console.log('You did not chose to battle the monster. Game over.')
}





    function battle() {
        while (heroHealth > 0 && monsterHealth > 0) {
            monsterHealth -= calculateMonsterDamage(monsterDefense, heroAttack);
            console.log(`The hero defeated the monster!`);}
            
            }
