import { IUser } from "./user.model";
import db from "../../config/database.config";
import { Database } from "../../database.abstract";
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
  async create(dataObject: IUser) {
    const columns = Object.keys(dataObject).join(", ");
    const values = Object.values(dataObject);
    const placeholders = "?".repeat(values.length).split("").join(", ");

    const query = `
    INSERT INTO user
    (
      ${columns}
    )
    VALUES
    (
      ${placeholders}
    )
     `;
    const [rows, fields] = await db.execute(query, values);
    return rows;
  }
  async selectAll(): Promise<any> {
    const query = `
    SELECT firstName,lastName,email,uuid FROM user
    `;
    const [rows, fields] = await db.execute(query);
    return rows;
  }
  async selectByUUID(uuid: string): Promise<any> {
    const query = `
    SELECT firstName,lastName,email,uuid FROM user WHERE uuid = "${uuid}"
    `;
    console.log(query);
    const [rows, fields] = await db.execute(query);
    return rows;
  }
  async update(dataField: string): Promise<IUser | void> {}
  async updates(...dataFields: string[]): Promise<IUser | void> {}
  async removeById(query: string): Promise<IUser | void> {}
}
export const user = new User();
