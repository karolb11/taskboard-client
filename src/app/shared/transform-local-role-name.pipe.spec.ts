import { TransformLocalRoleNamePipe } from './transform-local-role-name.pipe';

describe('TransformLocalRoleNamePipe', () => {
  it('create an instance', () => {
    const pipe = new TransformLocalRoleNamePipe();
    expect(pipe).toBeTruthy();
  });
});
