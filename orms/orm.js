var query = function(string) {
  // Assume this function takes a valid SQL query string
  // as an input, and executes that query on some database
};

var User = function(name, email) {
  this.name = name;
  this.email = email;
};

User.prototype.constructor = User;

User.prototype.save = function() {
  var check = query("SELECT name FROM users WHERE name =" + this.name);
  if(!check){
    query("NSERT INTO users (name, email) VALUES ("+this.name+","+this.email+")")
  } else {
  	query("UPDATE users SET name ="+this.name+", email="+this.email+" WHERE name = "this.name";");
  }
};
