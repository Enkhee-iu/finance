let uiController = (function (){

   let Domstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
   };

  return{
    getInput: function () {
      return {
        type: document.querySelector(Domstrings.inputType).value,
        description: document.querySelector(Domstrings.inputDescription).value,
        value: document.querySelector(Domstrings.inputValue).value
      };
    },

    getDomstrings: function () {
      return Domstrings;
    }
    };
})();

let financeController = (function (){

})();


let appController = (function (uicontroller, financecontroller){

  let DOM = uicontroller.getDomstrings();s

   let ctrlAddItem = function () {
    console.log("Delegtsend ugugdul awah heseg");
   };

 document.querySelector(Domstrings.inputBtn).addEventListener("click", function(){

 });



  let setupEventListeners = function () {
    let DOM = uicontroller.getDomstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

      document.addEventListener("keypress", function(event){
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
  }

  return{
    init: function () {
      console.log("Application started");
      setupEventListeners();
    }
  };

})(uiController, financeController);

appController.init();



