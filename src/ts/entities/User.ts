class User{
    name: string;
    years: number;
    gender: string;
    constructor(_name: string, _years: number, _gender: string) {
        this.name = _name;
        this.years = _years;
        this.gender = _gender;
    }
}

const nameUser1 = new User("Nan", 17, "Man");
const nameUser2 = new User("Ola", 19, "Wumen");

