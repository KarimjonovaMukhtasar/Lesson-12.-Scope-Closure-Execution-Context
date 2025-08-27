/*
name va departments (array) xususiyatlariga ega bo'lgan Universitet nomli class yarating.
 Ushbu classga yangi bo'lim(department) qo'shish, bo'limni olib tashlash va barcha bo'limlarni ko'rsatish metodlarini yozing.
 Universitet classidan object yarating, 5ta yangi bo'lim qo'shing va 2 ta bo'limni olib tashlang. 
 Qolgan bo'limlar ro'yxatini chiqaring.
*/
//
class University {
    constructor(name,...departments){
        this.name = name
        this.departments = departments
    }

    addDepartment(department){
        if(!this.departments.includes(department)){
            this.departments.push(department)
            console.log(`A new department has been added`)
        }
        else{
            console.log(`This department is already in departments list`)
        }
    }
    removeDepartment(department){
        if(!this.departments.includes(department)){
            console.log("This department is not in the Departments list")
        }
        else{
            let index = this.departments.indexOf(department)
            this.departments.splice(index,1)
            console.log(`${department} department removed from the Departments list`)
        }
    }
    showAll(){
        console.log(`All the available departments: ${this.departments}`)
    }
}
let university = new University("UzSWLU", "Linguistics English", "Japanese", "Korean", "Chinese")
university.addDepartment("Arabic")
university.addDepartment("Russian Philology")
university.addDepartment("Master's Department")
university.addDepartment("Bachelor's Department")
university.addDepartment("Journalism Department")
university.removeDepartment("Chinese")
university.removeDepartment("Russian Philology")
university.removeDepartment("Uyghur languages")
university.showAll()