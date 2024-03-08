// enums allows you to define a set of named constants

enum Direction {
    Up,
    Down,
    Left,
    Right
};

function doSomething(keyPressed: Direction) {
	// do something.
};

doSomething(Direction.Up);
console.log(Direction.Up); // outputs 0
console.log(Direction.Down); // outputs 1
console.log(Direction.Left); // outputs 2
console.log(Direction.Right); // outputs 3

// This makes code slightly cleaner to read out
// The final value stored at runtime is still a number (0, 1, 2, 3). 
 