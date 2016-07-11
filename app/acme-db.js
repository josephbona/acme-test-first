var AcmeDb = function(){
	this.employees = [];
}
AcmeDb.prototype.getEmployees = function(){
	// sort function via http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
	return this.employees.sort(function(a,b){
		if (a.name < b.name)
			return -1;
		if (a.name > b.name)
			return 1;
		return 0;;
	});
}
AcmeDb.prototype.addEmployee = function(name, id){
	this.employees.push(new Employee(name, id));
}
AcmeDb.prototype.getEmployee = function(id){
	return this.employees.find(function(employee){
		return employee.id === id;
	});
}
AcmeDb.prototype.deleteEmployee = function(employee){
	var selectedName = employee.name, index = -1;
	for(var i = 0; i < this.employees.length; i++) {
	    if (this.employees[i].name === selectedName) {
	        index = i;
	        break;
	    }
	}
	this.employees.splice(index, index);
}