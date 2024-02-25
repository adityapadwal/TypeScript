// What if you want to create a type that has every property of multiple types/ interfaces

type Veg = {
    paneerTikka: string,
    malaiKofta: string,
    vQuantity: number | string
}

type NonVeg = {
    chickenTikka: string,
    butterChicken: string,
    nvQuantity: number | string
}

type both = Veg & NonVeg;

const o1: Veg = {
    paneerTikka: "spicy",
    malaiKofta: "medium",
    vQuantity: 2
}

const o2: NonVeg = {
    chickenTikka: "spicy",
    butterChicken: "medium",
    nvQuantity: 2
}

const o3: both = {
    paneerTikka: "spicy",
    malaiKofta: "medium",
    vQuantity: 2,
    chickenTikka: "spicy",
    butterChicken: "medium",
    nvQuantity: 2
}