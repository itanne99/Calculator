class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    getResults(){
        return this.op(this.a,this.b);
    }
}