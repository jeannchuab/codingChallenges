//Remove object property

class StaffList{
    constructor() {
        this.collection = [];
        this.size = 0
    }
    
    add(name, age) {
        if (age > 20) {          
            if (!this.collection.includes(name)) {
                this.collection.push(name);    
                this.size++;
            }                        
        } else if (age <= 20) {
            throw Error('Staff member age must be greater than 20');
        } 
    }
    
    remove(name) {        
        let index = this.collection.indexOf(name);
        if (index >= 0){
            delete this.collection[index];
            this.size--;
            return true;
        }
        return false;
    }
    
    getSize() {
        console.log("Size: " + this.size);
        return this.size;
    }
}

let staffList = new StaffList();
staffList.add('John', 20);
staffList.add('Robin', 10);
staffList.getSize();
staffList.remove('Robin')
//staffList.add('Amanda', 25);
staffList.getSize();
console.log(staffList);