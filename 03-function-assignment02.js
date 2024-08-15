console.log("================Bank Details Function===============");
function bankDetails(bankName, accountNum, location, pincode) {
  console.log(
    "My account in:",
    bankName,
    "//",
    "account number is:",
    accountNum,
    "//",
    "Location is:",
    location,
    "//",
    "pincode is:",
    pincode
  );
}
bankDetails("CITI Bank", 3456782354, "pune", 431202);
bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "pune", 631202, "Open");
