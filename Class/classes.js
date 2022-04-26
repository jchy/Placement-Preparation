class Student{
    constructor(name,gender,rollNumber, branch){
        this.name = name;
        this.gender = gender;
        this.rollNumber = rollNumber;
        this.branch = branch;
    }
    wishlist = [];
    get mywishlist(){
        return this.wishlist;
    }
    set mywishlist(wish){
        this.mywishlist.push(wish);
    }
}
const student1 = new Student("Jaswant Chaudhary", "Male", 29,"CSE");
console.log(student1);
student1.mywishlist = "Goa";
student1.mywishlist = "Bombay";
student1.mywishlist = "Kashmir";
student1.mywishlist = "Kerala";
student1.mywishlist = "Bengaluru";
console.log(student1.mywishlist);
console.log(student1);

