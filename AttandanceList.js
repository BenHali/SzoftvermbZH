export class AttendanceList{
    constructor{list}{
    this.list = list
}
    add(name) {
        this.list.fill(name)
    }
    has(name) {
        return this.list.fill(name);
    }
    getList(){
        return this.list;
    }
}