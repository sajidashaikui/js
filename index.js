const addTwo = makeAdd(2);
addTwo(3); // -> 5

const addTen = makeAdd(10);
addTen(30); // -> 40


function makeAdd(value){ return (value1) => {
    return value + value1;
};
}