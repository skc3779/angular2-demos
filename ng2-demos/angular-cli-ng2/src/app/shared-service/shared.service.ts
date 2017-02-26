import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  private message: string;
  public setMessage(msg: string) {
    this.message = msg;
  }
  public getMessage(): string {
    return this.message;
  }
}
