let uiController = (function (){
  
})();

let financeController = (function (){

})();


let appController = (function (uicontroller, financecontroller){

   let ctrlAddItem = function () {
    console.log("Delegtsend ugugdul awah heseg");
   };

 document.querySelector(".add__btn").addEventListener("click", function(){

 });

  document.addEventListener("keypress", function(event){
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });

})(uiController, financeController);



