import { newGenericSingleton, instancesMap } from "./GenericSingleton.mjs";

class Abc {
  constructor(a, b, c) {
    this.hash = Math.random().toString(36).slice(-5);
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toString() {
    console.log(this.now, this.a, this.b, this.c);
  }
}

const a1b2c3 = newGenericSingleton(Abc, 1, 2, 3);
const a10b20c30 = newGenericSingleton(Abc, 10, 20, 30);

const a1b2c3Check = newGenericSingleton(Abc, 1, 2, 3);
const a10b20c30Check = newGenericSingleton(Abc, 10, 20, 30);

console.log(a1b2c3, a1b2c3Check);
console.log(a10b20c30, a10b20c30Check);
console.log(instancesMap);
