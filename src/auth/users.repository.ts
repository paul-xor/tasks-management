import { User } from './user.entity';
import { DataSource, Repository } from 'typeorm';

export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  //
}
