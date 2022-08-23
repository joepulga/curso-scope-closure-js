
function fruits() {
    if(true) {
        var fruit1 = 'Apple'; //function Scope
        let fruit2 = 'Kiwi'; // Block scope
        const fruit3 = 'Banana'; // Block scope

        console.log(fruit2); // Output: Kiwi
        console.log(fruit3); // Output: Banana
    }
    console.log(fruit1); // Output: Apple
}
fruits();