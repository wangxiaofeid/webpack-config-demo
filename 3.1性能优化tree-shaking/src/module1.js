import _ from "lodash-es";

export function fun1() {
  console.log('fun1');
}

export function fun2() {
  console.log(_.find([1, 2, 3, 4], i => i == 2));
  console.log('fun2');
}