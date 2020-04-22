import { Model, Table, PrimaryKey, Column } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  public id: string;

  @Column
  public username: string;
}
