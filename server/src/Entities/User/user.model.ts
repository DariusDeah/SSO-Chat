export interface IUser {
  uuid: number;
  firstName: string;
  lastName: string;
  googleId?: string;
  email: string;
  password?: string;
  isActive: boolean;
}
