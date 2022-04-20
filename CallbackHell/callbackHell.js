// Callback hell is the situation when we are creating multiple callbacks 
// one inside another i.e. nested callbacks. This problem of callback hell is more
//  visible when depth of nesting is higher.

// Question. print the students roll number after 2 seconds. after 2 more seconds print the students
// name and age and after 2 more seconds print the students collage name
const printSduentDetails = () => {
    setTimeout(() =>{
        let rollNumber = [1,2,3,4,5];
        console.log(rollNumber);

        setTimeout(() =>{
            let students = {
                name: "Jaswant",
                age : "23"
            }
            console.log(`Student name is : ${students.name} \n student age is : ${students.age} \n students roll number is : ${rollNumber}`);

            setTimeout(() =>{
                students.collegeName = "REC Sonbhadra";
                console.log(`College name is : ${students.collegeName}`);
            },2000,students);
        },2000);
    },2000)
}
printSduentDetails();