var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//var user = { firstName: "Jane", lastName: "User" };
//document.body.innerHTML = greeter(user);
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
console.log(user.fullName);
