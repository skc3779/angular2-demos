import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Children, ChildrenService } from './children.service';


@Injectable()
export class ChildrenResolve implements Resolve<Children> {

  constructor(private cs: ChildrenService, private router: Router) { }

  //resolve(route: ActivatedRouteSnapshot): Promise<Children> | boolean {
  resolve(route: ActivatedRouteSnapshot) {

    let id = +route.params['id'];
    console.log('ChildrenResolve', id);
    return this.cs.findById(id).then(children => {
      if (children) {
        return children;
      } else {
        this.router.navigate(['/not-found']);
        return false;
      }
    });
  }
}
