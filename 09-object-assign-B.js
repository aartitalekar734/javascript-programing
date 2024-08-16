let sbiBank = {
  bankName: "SBI bank",
  location: "pune",
  accountNo: 45655445,
  ifSc: "SC999999",
  interestRate: "8%",
  showDetails: function () {
    console.log(
      `Bank name is:${this.bankName}||Location is:${this.location}||Account no is:${this.accountNo}||IFSC code is:${this.ifSc}||InterestRate is:${this.interestRate}`
    );
  },
};
sbiBank.showDetails();

let axisBank = {
  bankName: "AXIS bank",
  location: "moshi",
  accountNo: 45566544,
  ifSc: "MC999999",
  interestRate: "9.5%",
  showDetails: function () {
    console.log(
      `Bank name is:${this.bankName}||Location is:${this.location}||Account no is:${this.accountNo}||IFSC code is:${this.ifSc}||InterestRate is:${this.interestRate}`
    );
  },
};
axisBank.showDetails();

let hdfcBank = {
  bankName: "hdfc bank",
  location: "Bund Garden",
  accountNo: 456666544,
  ifSc: "AC999999",
  interestRate: "10%",
  showDetails: function () {
    console.log(
      `Bank name is:${this.bankName}||Location is:${this.location}||Account no is:${this.accountNo}||IFSC code is:${this.ifSc}||InterestRate is:${this.interestRate}`
    );
  },
};
hdfcBank.showDetails();

let yesBank = {
  bankName: "Yes bank",
  location: "Bhosari",
  accountNo: 555556544,
  ifSc: "SC999999",
  interestRate: "11%",
  showDetails: function () {
    console.log(
      `Bank name is:${this.bankName}||Location is:${this.location}||Account no is:${this.accountNo}||IFSC code is:${this.ifSc}||InterestRate is:${this.interestRate}`
    );
  },
};
yesBank.showDetails();
