"use strict";
var car_service_1 = require('./car.service');
/**
 * 팩토리 제공자
 * 새로운 객체를 의존성 주입을 통해 받아서 사용
 * @param speedmeter
 * @param engine
 * @returns {CarService}
 */
var carServiceFactory = function (speedmeter, engine) {
    speedmeter.speed = 100;
    speedmeter.maxSpeed = 500;
    engine.name = "슈퍼엔진";
    return new car_service_1.CarService(speedmeter, engine);
};
exports.FactoryProvider = {
    provide: car_service_1.CarService,
    useFactory: carServiceFactory,
    deps: [car_service_1.Speedmeter, car_service_1.Engine]
};
