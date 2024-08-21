function Bank(bankName, location, ifscCode, branchCode) {
  (this.bankName = bankName),
    (this.location = location),
    (this.ifscCode = ifscCode),
    (this.branchCode = branchCode);
}
console.log("=================Banking Details============================================");

const yesBank = new Bank("Yes_Bank", "pune", "IAF564", 111222);
console.log(
  `Yes Bank Details is:Bank name:${yesBank.bankName},Location:${yesBank.location},IFSC Code:${yesBank.ifscCode},Branch Code:${yesBank.branchCode}`
);

const sbiBank = new Bank("SBI", "MUMBAI", "IAF5655", 11144);
console.log(
  `SBI Bank Details is:Bank Name:${sbiBank.bankName},Location:${sbiBank.location},IFSC Code:${sbiBank.ifscCode},Branch code:${sbiBank.branchCode}`
);

const mahBank = new Bank("MAH_BAnk", "pune", "IAF564", 111222);
console.log(
  ` MahBank Details is:Bank Name:${mahBank.bankName},location:${mahBank.location},IFSC Code:${mahBank.ifscCode},BranchCode:${mahBank.branchCode}`
);

const axisBank = new Bank("Axis_BAnk", "pune", "IAF564", 111222);
console.log(
  `AXIS Bank Details is:Bank Name:${axisBank.bankName},Location:${axisBank.location},IFSC code${axisBank.ifscCode},Branch Code${axisBank.branchCode}`
);
console.log("=================Function prototype=============================================");

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(`Open time is:${Bank.prototype.openTime}`);
console.log(`close time is:${Bank.prototype.closeTime}`);


console.log(
  `SBI Bank details is==>open Time:${sbiBank.openTime},close Time:${sbiBank.closeTime}`
);
console.log(
  `Axis Bank details is==>Bank Name:${axisBank.bankName},close Time:${axisBank.closeTime}`
);
console.log(
  `Yes Bank details is==>Bank Name:${yesBank.bankName},branch Code:${yesBank.branchCode},open Time :${yesBank.openTime}`
);
