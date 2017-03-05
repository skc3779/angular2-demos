import { Component, Injectable, Optional } from '@angular/core';

/**
 * 선택적 장식자를 이요한 의존성 주입
 * 선택적(@Optional) 장식자 활용해 Provider 속성이 없어 제공자가 제공되지 않을 때 입력 객체를 null 값으로 처리함으로써
 * 애플리케이션이 중단되지 않게 합니다
 */
@Injectable()
export class Engine {
  public name: string = "엔진";
}

@Component({
  selector: 'app-optional-decorator',
  template: `{{msg}}`,
  //providers:[Engine]
})
export class OptionalDecoratorComponent {
  public msg: string;
  // 제공자(providers)가 제공되지 않을 때 선택적(@Optional)를 사용해서
  // 입력개체를 null값으로 처리함으로 애플리케이션 중단 방지
  constructor( @Optional() public engine: Engine) {
    if (this.engine === null) {
      this.msg = "null입니다.";
    } else {
      this.msg = "의존주입 성공 : " + this.engine.name;
    }
  }
}
