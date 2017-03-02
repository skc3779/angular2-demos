///<reference path="../../../node_modules/angular-2-local-storage/dist/local-storage.service.d.ts"/>
import {Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {LocalStorageService} from 'angular-2-local-storage';

export class User {
  constructor(public id: number, public name: string) { }
}

const USERS = [
  new User(1, '첫번째 사용자'),
  new User(2, '두번째 사용자'),
  new User(3, '세번째 사용자')
];

export let userPromise = Promise.resolve(USERS);


@Injectable()
export class AuthService {
  constructor(private localStorageService: LocalStorageService) {
  }

  private _isLogin: boolean = false;
  redirectUrl: string;
  private _userId: string;

  get isLogin(): boolean {
    if(this.localStorageService.get("isLogin") != null) {
      this._isLogin = this.localStorageService.get<boolean>("isLogin");
      console.log('localStorageService isLogin', this._isLogin);
    }
    return this._isLogin;
  }

  set isLogin(bf:boolean) {
    console.log('set isLogin',bf);
    this.localStorageService.set("isLogin", bf);
  }

  get userId(): string {
    if(this.localStorageService.get("userId")) {
      this._userId = this.localStorageService.get<string>("userId");
      console.log('localStorageService userId', this._userId);
    }
    return this._userId;
  }

  set userId(name:string) {
    this.localStorageService.set("userId",name);
  }


  checkId(userId: string): Promise<User> {
    return userPromise
      .then(children => children.find(children => children.id === +userId));
  }

  login(userId: string): Observable<boolean> {
    return Observable.of(true).delay(500).do(val => this.isLogin = true).do(val => this.userId = userId);
  }

  logout(): void {
    this.isLogin = false;
  }
}
