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
AcmeDb.prototype.groupedEmployees = function(){
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''), groupedEmployeeList = {};
	for (var i = 0; i < alphabet.length; i++) {
		this.employees.find(function(employee){
			if(!groupedEmployeeList[alphabet[i]]){
				groupedEmployeeList[alphabet[i]] = [];
			}
			if(employee.name[0] === alphabet[i]){
				groupedEmployeeList[alphabet[i]].push(employee.name);
			}
		})
	}
	// return object with {a: [name, name]}
	return groupedEmployeeList;
}