let uiController = (function (){

   let Domstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeList: ".income__list",
    expensesList: ".expenses__list",
    tusuvLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage"  
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
    },

    clearFields: function () {
      let fields = document.querySelectorAll
      (Domstrings.inputDescription + ", " + Domstrings.inputValue);

      let fieldsArr = Array.prototype.slice.call(fields);

      for (let i = 0; i < fieldsArr.length; i++) {
        fieldsArr[i].value = "";
      }

      fieldsArr[0].focus();
    },

     tusviigUzuuleh: function (tusuv) {
      document.querySelector(Domstrings.tusuvLabel).textContent = tusuv.tusuv;
      document.querySelector(Domstrings.incomeLabel).textContent = tusuv.totalInc;
      document.querySelector(Domstrings.expensesLabel).textContent = tusuv.totalExp;
      document.querySelector(Domstrings.percentageLabel).textContent = tusuv.huvi;

      if (tusuv.huvi !== 0) {
        document.querySelector(Domstrings.percentageLabel).textContent = tusuv.huvi + "%";
      } else {
        document.querySelector(Domstrings.percentageLabel).textContent = tusuv.huvi;
      }

    },

    addListItem: function(item, type) {
      let html, newHtml, element;
      if (type === "inc") {
        element = ".income__list";
        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = ".expenses__list";
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
    }
  }; 
})();

let financeController = (function (){
   
  let Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let Expense =function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let calculateTotal = function (type) {
    let sum = 0;
    data.items[type].forEach(function(el){
      sum = sum + el.value;
    });
  };
   
  let data = {
    allItems: {
      inc: [],
      exp: []
    },

    totals: {
      inc: 0,
      exp: 0
    },
    tusuv: 0,
  };

  return {

    tusuvTootsooloh: function () {
      calculateTotal("inc");
      calculateTotal("exp");

      data.tusuv.tusuv = data.totals.inc - data.totals.exp;
      data.huvi = Math.round((data.totals.exp / data.totals.inc) * 100);
    },

    tusviigAvah: function () { 
      return {
        tusuv: data.tusuv,
        huvi: data.huvi,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp
      }

    },
    

    addItem: function (type, des, val){

      let item, id;

      if (data.allItems.items[type].length === 0) id = 1;
      else {
        id = data.allItems.items[type][ data.allItems.items[type].length - 1].id + 1;
      }

      if(type === "inc") {
        item = new Income (id, desc, val);
      } else {
            item = new Expense (id, desc, val);
      }

      data.items[type].push(item);

      return item;
    }
  };

})();


let appController = (function (uicontroller, financecontroller){

  let DOM = uicontroller.getDomstrings();s

   let ctrlAddItem = function () {
    let input = uicontroller.getInput();


    if(input.description !== "" && input.value !== ""){
    
    
      let item = financecontroller.addItem(
    input.type, 
    input.description, 
    input.value
  );

   uiController.addListItem(item, input.type);
   uiController.clearFields();

   financeController.tusuvTootsooloh();

   let tusuv = financeController.tusviigAvah();

    uicontroller.tusviigUzuuleh(tusuv);

    }

  

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
      uicontroller.tusviigUzuuleh({
        tusuv: 0,
        huvi: 0,
        totalInc: 0,
        totalExp: 0
      });
      setupEventListeners();
    }
  };

})(uiController, financeController);

appController.init();



