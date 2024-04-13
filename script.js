document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    let age = document.getElementById('age').value;
    let income = parseFloat(document.getElementById('income').value);
    let extraIncome = parseFloat(document.getElementById('extraIncome').value);
    let deductions = parseFloat(document.getElementById('deductions').value);
  
   
      calculateTax(age, income, extraIncome, deductions);
      clearText();
    }
  
  
    function clearText() {
      
      let input1 = document.getElementById('age');
      let input2 = document.getElementById('income');
      let input3 = document.getElementById('extraIncome');
      let input4 = document.getElementById('deductions');
      input1.value = "";
      input2.value = "";
      input3.value = "";
      input4.value = "";

     
   }
 
  
  function calculateTax(age, income, extraIncome, deductions) {
    let taxableIncome = income + extraIncome - deductions;
    let taxRate;
  
    if (taxableIncome <= 800000) {
      taxRate = 0;
    } else {
      switch (age) {
        case '<40':
          taxRate = 0.3;
          break;
        case '>=40&<60':
          taxRate = 0.4;
          break;
        case '>=60':
          taxRate = 0.1;
          break;
      }
    }
  
    let taxAmount = (taxableIncome - 800000) * taxRate;
    displayResult(taxAmount);
  }
  
  function displayResult(taxAmount) {
    let modal = document.getElementById('modal');
    let resultDiv = document.getElementById('result');
    if (taxAmount == 0){
      resultDiv.innerHTML = 'No tax to be paid!';
    }
    else 
    resultDiv.innerHTML = 'Tax to be paid: ' + taxAmount.toFixed(2) + '₹';
    modal.style.display = 'block';
  
    document.querySelector('.close').addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  }
  