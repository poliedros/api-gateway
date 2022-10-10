import { JwtStrategy } from './jwt.strategy';
import { Role } from './../enums/role.enum';

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy;
  beforeEach(() => {
    jwtStrategy = new JwtStrategy();
  });
  it('should validate', async () => {
    const payload = await jwtStrategy.validate({
      sub: '3',
      username: 'carlos',
      roles: [Role.Admin],
    });

    expect(payload).toEqual({
      id: payload.id,
      username: payload.username,
      roles: [Role.Admin],
    });
  });
});
