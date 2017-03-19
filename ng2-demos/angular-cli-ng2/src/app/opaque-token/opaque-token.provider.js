"use strict";
var core_1 = require('@angular/core');
/**
 * 불투명 토큰 제공자 변수인 provide에는 인터 페이스를 상속받는 클래스를 설정할 수 없으므로
 * 아래와 같이 의존성 주입이 가능하게 하려면 provide 값을 불투명 토큰 객체로 처리해야 함
 * @type {OpaqueToken}
 */
exports.OPAQUE_TOKEN = new core_1.OpaqueToken('OPAQUE_TOKEN');
exports.MY_API_CONFIG = {
    endpointURL: 'http://192.168.0.1:80/rest',
    PORT: '8000'
};
exports.OpaqueTokenProvider = {
    provide: exports.OPAQUE_TOKEN,
    useValue: exports.MY_API_CONFIG
};
