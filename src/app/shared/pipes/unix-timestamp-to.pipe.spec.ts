import { UnixTimestampToPipe } from './unix-timestamp-to.pipe';

describe('UnixTimestampToPipe', () => {
  it('create an instance', () => {
    const pipe = new UnixTimestampToPipe();
    expect(pipe).toBeTruthy();
  });
});
