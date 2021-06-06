import { UnixTimestampToPipe } from './unix-timestamp-to.pipe';

describe('UnixTimestampToPipe', () => {
  let pipe: UnixTimestampToPipe;

  beforeEach(() => {
    pipe = new UnixTimestampToPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should print formatted datetime', () => {
    expect(pipe.transform(1622864787)).toContain('2021');
    expect(pipe.transform(1622864787)).toContain(':');
  });

  it('should print formatted time', () => {
    expect(pipe.transform(1622864787, 'time')).toContain(':');
    expect(pipe.transform(1622864787, 'time')).not.toContain('2021');
  });
});
