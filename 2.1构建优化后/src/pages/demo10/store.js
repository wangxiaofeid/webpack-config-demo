import { observable, action } from "mobx"
import AbstractList from "../../stores/abstractList";

export default class Demo10Store extends AbstractList{
  static namespace = 'demo10Store';
  
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