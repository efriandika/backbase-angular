import { TemperatureUnitPipe } from './temperature-unit.pipe';

describe('TemperatureUnitPipe', () => {
  let pipe: TemperatureUnitPipe;

  beforeEach(() => {
    pipe = new TemperatureUnitPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform metric unit', () => {
    expect(pipe.transform(10, 'metric')).toEqual('10\u00b0 C');
  });

  it('should transform imperial unit', () => {
    expect(pipe.transform(10, 'imperial')).toEqual('10\u00b0 F');
  });

  it('should return original value when unit is not supported', () => {
    expect(pipe.transform(10, 'someUnSupportedUnit')).toEqual('10');
  });
});
