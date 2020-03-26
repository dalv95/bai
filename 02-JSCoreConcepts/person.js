class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    getFullName(){
        return this.name + ' ' + this.surname.toUpperCase();
    }

    getInitials(){
        return this.name.charAt(0).toUpperCase() + '.' + this.Surname.charAt(0).toUpperCase() + '.';
    }
}
person1 = new Person('Pawel', 'Kowalski');
person2 = new Person('Michal', 'Zieba');
console.log(person1.getFullName());
console.log(person1.getInitials());
console.log(person2.getFullName());
console.log(person2.getInitials());
