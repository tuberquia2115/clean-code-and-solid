(() => {
  // No aplica el principio de responsabilidad única
  type Gender = 'M' | 'F';

  interface PersonProperties {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  interface UserProperties extends PersonProperties {
    email: string;
    role: string;
  }

  interface UserSettingsProperties extends UserProperties {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProperties) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate
    }
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProperties) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate }: UserSettingsProperties
    ) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'tuberquia@gmail.com',
    role: 'admin',
    name: 'Fernando',
    gender: 'M',
    birthdate: new Date('1998-04-21')
  });
  console.log({ userSettings })
})();
