import { SpeedUnitPipe } from './speed-unit.pipe';

describe('SpeedUnitPipe Testing', () => {
  let pipe: SpeedUnitPipe;

  beforeEach(() => {
    pipe = new SpeedUnitPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform metric unit', () => {
    expect(pipe.transform(100, 'metric')).toEqual('100 meter/s');
  });

  it('should transform imperial unit', () => {
    expect(pipe.transform(100, 'imperial')).toEqual('100 miles/h');
  });

  it('should return original value when unit is not supported', () => {
    expect(pipe.transform(100, 'someUnSupportedUnit')).toEqual('100');
  });
});
