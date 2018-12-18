export default class Module1{
  constructor() {
    this.a = 'Module2';
  }

  say = () => {
    console.log(`I am ${this.a}`);
  }
}