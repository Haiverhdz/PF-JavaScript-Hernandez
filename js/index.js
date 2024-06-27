const goBtn = document.getElementById("go-btn");
const initialForm = document.querySelector(".content");
const taxForm = document.querySelector(".tax-form");
const taxGoBtn = document.getElementById("tax-go-btn");
const taxCalcForm = document.querySelector(".tax-calc-form");
const optionSelect = document.getElementById("tax-option");

goBtn.addEventListener("click", () => {
  const ageInput = document.getElementById("age");
  const age = parseInt(ageInput.value);

  if (isNaN(age) || age < 18) {
    alert("You must be at least 18 years old to proceed.");
    return;
  }

  initialForm.style.display = "none";

  taxForm.style.display = "block";
});

taxGoBtn.addEventListener("click", () => {
  taxForm.style.display = "none";

  taxCalcForm.style.display = "block";
});

optionSelect.addEventListener("change", () => {
  const selectedOption = optionSelect.value;
  const taxForm = document.querySelector(".tax-form");
  const taxCalcForm = document.querySelector(".tax-calc-form");
  const salaryCalcForm = document.querySelector(".salary-calc-form");

  if (selectedOption === "calculate-taxes") {
    taxCalcForm.style.display = "block";
    taxForm.style.display = "none";
  } else if (selectedOption === "calculate-salary") {
    salaryCalcForm.style.display = "block";
    taxForm.style.display = "none";
  }
});

const calcTaxBtn = document.getElementById("calc-tax-btn");
const incomeInput = document.getElementById("income");
const taxRateInput = document.getElementById("tax-rate");
const deductionsInput = document.getElementById("deductions");
const taxAmountElement = document.getElementById("tax-amount");

calcTaxBtn.addEventListener("click", () => {
  const income = parseFloat(incomeInput.value);
  const taxRate = parseFloat(taxRateInput.value) / 100;
  const deductions = parseFloat(deductionsInput.value);

  if (isNaN(income) || isNaN(taxRate) || isNaN(deductions)) {
    alert("Please fill in all fields with valid numbers");
    return;
  }

  if (income <= 0 || taxRate <= 0 || deductions < 0) {
    alert("Please enter valid values for income, tax rate, and deductions");
    return;
  }

  const taxableIncome = income - deductions;
  const taxAmount = taxableIncome * taxRate;

  taxAmountElement.textContent = `Tax Amount: $${taxAmount.toFixed(2)}`;
});

const salaryCalcForm = document.querySelector(".salary-calc-form");
const calcSalaryBtn = document.getElementById("calc-salary-btn");
const basicSalaryInput = document.getElementById("basic-salary");
const allowancesInput = document.getElementById("allowances");
const debtsInput = document.getElementById("debts");
const otherDeductionsInput = document.getElementById("other-deductions");
const totalSalaryElement = document.getElementById("total-salary");

calcSalaryBtn.addEventListener("click", () => {
  const basicSalary = parseFloat(basicSalaryInput.value);
  const allowances = parseFloat(allowancesInput.value);
  const debts = parseFloat(debtsInput.value);
  const otherDeductions = parseFloat(otherDeductionsInput.value);

  if (
    isNaN(basicSalary) ||
    isNaN(allowances) ||
    isNaN(debts) ||
    isNaN(otherDeductions)
  ) {
    alert("Por favor ingresa un dato valido");
    return;
  }

  const totalSalary = basicSalary + allowances - debts - otherDeductions;
  totalSalaryElement.textContent = `Total Salary: $${totalSalary.toFixed(2)}`;
});

const backBtn = document.getElementById("back-btn");
const backBtnSalary = document.getElementById("back-btn-salary");
const backBtnTaxOption = document.getElementById("back-btn-tax-option");

backBtn.addEventListener("click", () => {
  taxCalcForm.style.display = "none";
  taxForm.style.display = "block";
});

backBtnSalary.addEventListener("click", () => {
  salaryCalcForm.style.display = "none";
  taxForm.style.display = "block";
});

backBtnTaxOption.addEventListener("click", () => {
  taxForm.style.display = "none";
  initialForm.style.display = "block";
});


