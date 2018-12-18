import React, { Component } from "react";
import ReactDom from "react-dom";
import Module1 from "./module1";
import Module2 from "./module2";

const a = 1;

const m1 = new Module1();
const m2 = new Module2();

m1.say();
m2.say();

const p = function (){ 
  return new Promise((resolve, reject) => {
    console.log('Promise');
    resolve('123');
  });
}

new Map();

new Set();

async function fun(params) {
  console.log('await', await p());
}

fun();

const sym = Symbol();

console.log(Object.assign({}, {
  a: 2,
  b: [1, 2, 3, 4, 5]
}));

const [a1, b] = [1, 2];
const c = [1, 2, 3, 4];
const d = [...c, 5];
const e = {
  ['1' + 2]: 3
}

function A(b) {
  b.prototype.say = function() {
    console.log(`my name is ${this.name}`);
  }
  return b;
}

@A
class B{
  constructor() {
    this.name = 'wxf'
  }
}

(new B()).say();

import(/* webpackChunkName: "module3" */'./module3').then(Module3 => {
  (new Module3.default()).say()
})

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }

  add = () => {
    this.setState({
      num: ++this.state.num
    });
  }

  render() {
    return <div>
      <button onClick={this.add}>{this.state.num}</button>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app'))

if(module.hot){
  module.hot.accept();
}


