// Initialize employee Object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  
  // Function to update employee non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Function to update employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
  console.log(updatedEmployee);
  
  const destructiveUpdate = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak St');
  console.log(destructiveUpdate);
  
  const employeeWithoutProperty = deleteFromEmployeeByKey(employee, 'name');
  console.log(employeeWithoutProperty);
  
  const destructiveDelete = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log(destructiveDelete);
  