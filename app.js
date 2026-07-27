let uiController = (function (){
  let x = 100;

  function add(y) {
    return x + y;
  }

  return {
    publicadd: function(a) {
        a = add(a);
        console.log("The result is: " + a);
    }
  }
})();

let financeController = (function (){

})();


let appController = (function (uicontroller, financecontroller){
 uiController.publicadd(100);
})(uiController, financeController);



