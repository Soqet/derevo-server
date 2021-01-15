interface IUser {
  _id: string,
  email: string,
  passwordHash: string,
  name: string,
  registrationDate: string
}

export default class User implements IUser {
  _id: string;
  email: string;
  passwordHash: string;
  name: string;
  registrationDate: string;

  constructor(
    _id: string,
    email: string,
    passwordHash: string,
    name: string,
    registrationDate: string
  ) {
    this._id = _id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.name = name;
    this.registrationDate = registrationDate;
  }

}