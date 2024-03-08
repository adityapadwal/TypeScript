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

// This makes code slightly cleaner to read out
// The final value stored at runtime is still a number (0, 1, 2, 3). 
 