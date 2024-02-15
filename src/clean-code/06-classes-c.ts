(() => {
  // Aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';

  interface PersonProperties {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  interface UserProperties {
    email: string;
    role: string;
  }

  interface SettingsProperties {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  interface UserSettingsProperties {
    name: string;
    gender: Gender;
    birthdate: Date;
    email: string;
    role: string;
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProperties) {
      this.birthdate = birthdate
      this.gender = gender;
      this.name = name;
    }
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, }: UserProperties) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
    }: SettingsProperties
    ) {

      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder
    }
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({ name, gender, birthdate, email, role, lastOpenFolder, workingDirectory }: UserSettingsProperties) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder })
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
