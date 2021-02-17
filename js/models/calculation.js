class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    GetResults(){
        return this.op(this.a,this.b);
    }
}