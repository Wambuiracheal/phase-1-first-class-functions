// // function Monday(){
// //     console.log("Go for a five mile run");
// //     console.log("pump iron");
// // }

// // function Tuesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// //   }
  
// //   function Wednesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Go for a five-mile run");
// //   }
  
// //   function Thursday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// //   }
  
// //   function Friday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// //   }

// // less tedious way of writing this code
// function runFiveMIles(){
//     console.log("Go for a five-mile run");
// }

// function liftWeights() {
//     console.log("Pump iron");
//   }
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }


// //Monday could now look like
//   function Monday() {
//     runFiveMiles();
//     liftWeights();
//   }

// //function that takes the second activity as a parameter
// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

//   function Monday() {
//     exerciseRoutine(liftWeights);
//   }
  
//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

//test1
function receivesAFunction(callback){
    callback();
}

//test2
function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I'm a named function");
    };
  }
  
  //test3
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I'm an anonymous function");
    };
  }

