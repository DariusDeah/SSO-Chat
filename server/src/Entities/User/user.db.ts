import { IUser } from "./user.model";
import db from "../../config/database.config";
class User extends Database<IUser> {
  constructor() {
    super();
  }
  async createTable(): Promise<void> {
    const query = `
    CREATE TABLE user
    (
      uuid varchar(255) NOT NULL PRIMARY KEY,
      firstName varchar(25) NOT NULL,
      lastName varchar(25) NOT NULL,
      googleId varchar(255) ,
      email varchar(255),
      password varchar(255),
      isActive boolean DEFAULT true
    )
      `;
    await db.execute(query);
  }
  async dropTable(): Promise<void> {
    const query = `
    DROP TABLE user
    `;
    await db.execute(query);
  }
  async alterTable(): Promise<void> {}
  async create(dataObject: IUser): Promise<IUser | void> {
    const columns = Object.keys(dataObject);
    const values = Object.values(dataObject);
    const query = `
    INSERT INTO user
    (
    ${columns.join(", ")}
    ) 
    Values
    (
    ${values}
    )
    `;
    db.execute(query);
  }
  async selectAll(): Promise<IUser[] | void> {
    const query = `
    SELECT * FROM user
    `;
    await db.execute(query);
  }
  async selectById(id: string): Promise<IUser | void> {
    const query = `
    SELECT * FROM user WHERE id = ${id} 
    `;
    await db.execute(query);
  }
  async update(dataField: string): Promise<IUser | void> {}
  async updates(...dataFields: string[]): Promise<IUser | void> {}
  async removeById(query: string): Promise<IUser | void> {}
}
export const user = new User();
