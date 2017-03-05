import { Engine, Speedmeter, CarService } from './car.service';

/**
 * 팩토리 제공자
 * 새로운 객체를 의존성 주입을 통해 받아서 사용
 * @param speedmeter
 * @param engine
 * @returns {CarService}
 */
let carServiceFactory = (speedmeter: Speedmeter, engine: Engine) => {
  speedmeter.speed=100;
  speedmeter.maxSpeed=500;
  engine.name="슈퍼엔진";
  return new CarService(speedmeter,engine);
};

export let FactoryProvider =
{
  provide: CarService,
  useFactory: carServiceFactory,
  deps: [Speedmeter, Engine]
};
