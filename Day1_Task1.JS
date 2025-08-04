var username = "Yousef Eldeeb";
var password = "secure123";

if (!username) {
  console.log("Username is required");
} else if (password.length < 8) {
  console.log("Password must be at least 8 characters");
} else {
  console.log("Username:", username);
  console.log("Password:", password);
}