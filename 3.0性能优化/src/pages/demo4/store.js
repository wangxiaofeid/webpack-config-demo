import { observable, action } from "mobx"
import AbstractList from "../../stores/abstractList";

export default class Demo4Store extends AbstractList{
  static namespace = 'demo4Store';
  
  constructor() {
    super({
      search: {
        url: '/api/user/list',
        method: 'post'
      },
      add: {
        url: '/api/user/add',
        method: 'post'
      },
      edit: {
        url: '/api/user/edit',
        method: 'post'
      },
      delete: {
        url: '/api/user/delete',
        method: 'post'
      }
    })
  }


}