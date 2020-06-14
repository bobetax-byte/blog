
class MyPromise {
    constructor(res,rej){
        this.resjectStatus = 'PENDING';
        
    }
    reslved(){
        this.resjectStatus = "RESOLVED";
        
    }

}