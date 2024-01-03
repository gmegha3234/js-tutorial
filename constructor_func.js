// function createStudent(name, id) {
//     let stu = {
//         name,
//         id,
//         getInfo() {
//             console.log(this.name, this.id);
//         }
//     };

//     return stu;
// }

function Student(name, id) {
    this.name = name;
    this.id = id;
    this.getInfo = function () {
        console.log(this.name, this.id);
    }
}

const st1 = new Student("Megha", 1);
const st2 = new Student("Shakeeb", 2);

st1.getInfo();
st2.getInfo();