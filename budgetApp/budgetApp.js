// test the private function
// let budgetController = (function() {
//   let x = 23;
//   var add = function(a) {
//     return x + a;
//   };
//   return {
//     publicTest: function(b) {
//       return add(b);
//     }
//   };
// })();
// var UIController = (function() {})();

// let controller = (function(budgetCtrl, UlCtrl) {
//   let z = budgetCtrl.publicTest(5);
//   return {
//     anotherPublic: function() {
//       console.log(z);
//     }
//   };
// })(budgetController, UIController);

let budgetController = (function() {})();
let UIController = (function() {})();

let controller = (function(budgetCtrl, UICtrl) {
  document.querySelector(".add__btn").addEventListener("click", function() {
    //get the field input data
  });
})(budgetController, UIController);
