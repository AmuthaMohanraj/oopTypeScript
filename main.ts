export{}
let message="hi welcome mohanr.ai";
console.log(message);


let a:any=1234;
a=1;
a='hai';

let b:number=23;
b=1.2;
b=87777777777777777777;


let c:string='mohanraj';

let d:boolean=true;
d=false;

let e:null;
let f:undefined;
let g:never;

let arr=[1,2,3,4,5,6];

let arrsrt:string[]=['j','d'];

let multitype:number|string;

multitype=1;
multitype='hai';


let object={
    name:'mohanraj',
    age:21
    }

    console.log(object.name);


    function fun(a:number,b:number):number{
      return a+b;
    }



    function strinFun(a){
        return a.toLowerCase();
      }


      function changeStringFun(a:string){
        return a.toLowerCase()
      }

      console.log(changeStringFun('kjll'));



      function optionalFunction(a:string,b?:string){
        return a.toLowerCase()+b
      }

      console.log(optionalFunction('kjll','hkjkljkl'));




      function optionalFunction2(a:string,b?:string):string{

        if(b)
        return a.toLowerCase()+b;
        return a.toLowerCase();
      }

      console.log(optionalFunction('kjll'));



      function defaultFunction(name:string='seshika'):string{
        return name
      }

     defaultFunction('seshika Arumugam');




     function fun1(point:{x:number,y:number}){
        return point.x+point.y;
     }


     let p={
        x:2,
        y:4
    }

    console.log(fun1(p));



    interface Point{
        x:number,
        y:number,
        z:number
    }


    let p1={
        x:21,
        y:18,
        z:4
    }


    function fun2(point:Point){
        return point.x+point.y;
     }

    console.log(fun2(p1));


    class Greater{
      greeting:string;
       constructor (message:string){
        this.greeting=message;
       }

       greet(){
        return "hello"+this.greeting;
       }
    }


    class car{
      engine:string;
      constructor(engine:string){
          console.log(this.engine=engine);
      }
  }


  class car1{
    constructor(public engine:string){
      console.log(engine)
    }
  }


const myCar = new car("V8"); // Creating an object of the car class
const myCar1 = new car1("c1"); // Creating an object of the car class





class Car2{
  engine:string;

   constructor(engine:string){
    this.engine=engine;
   }

   start(){
    return "started"+this.engine;
   }

   stop(){
    return "stopped"+this.engine;
   }

}


const mycar2=new Car2('honda');


//properties

class Car4{

  private _engine:string;

  constructor(engine:string){ 
    this.enginer=engine;
    console.log(this.enginer);
  }


  get enginer():string{
    console.log('inside a get'); 
    return this._engine;
  }

  set enginer(value:string){
    if(value==undefined)throw 'supply an engine!';
    this._engine=value;
    console.log('inside a set')
  }

}

const u=new Car4('KN');
const v=new Car4('honda');
v.enginer='BMW';



//inhertence


class Engine{
   constructor(public type:string,public hp:number){
   }
}


class Auto{

  engine:Engine;

  constructor(engine:Engine){
     this.engine=engine;    
  }

}

class Truck extends Auto{

  fourByFour:boolean;
  constructor(engine:Engine,fourByFour:boolean){
    super(engine);

    this.fourByFour=fourByFour;
  }
}

let engobj=new Engine('vfx',234);
// let truckobj=new Truck(2,true)






interface Action{
  start(message:string);
  stop(message:string);
}

class flights implements Action{

   constructor(public engine:string){
      this.engine=engine;
   }

   start(message: string) {
     console.log(this.engine+message)
   }

   intermediater(message:string){
    console.log(this.engine+message)
   }

   stop(message: string) {
    console.log(this.engine+message)
   }


}
var h=new flights('jkjklj\t');
h.start('engine is started');
// h.intermediater('intermediater level');
h.stop('engine is stopped');