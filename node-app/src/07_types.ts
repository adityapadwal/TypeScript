// Very similar to interfaces, types let you aggregate data together.

type User = {
    firstName: string;
    lastName: string;
    age: number;
}

interface User2 {
    firstName: string;
    lastName: string;
    age: number;
}

// But they let you do few other things different from interfaces
// eg. union and intersection

/* 
    Diference between types and interfaces
    1. Interfaes can be used to implement classes (types cannot).
    2. Types can be used to perform unoins and intersections

*/ 
