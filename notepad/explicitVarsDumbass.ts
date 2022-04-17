function pow(x:number ,y:number): string {
    return Math.pow(x, y).toString();
}

pow(5, 2);

// if your function doesn't return anything, then use "void"
function pow2(x:number ,y:number): void {
    x+y;
}