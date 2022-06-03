import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
interface IUser {
  uuid: number;
  firstName: string;
  lastName: string;
  googleId: string;
  email: string;
  isActive: boolean;
}
