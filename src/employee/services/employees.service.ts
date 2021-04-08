import { Injectable, NotFoundException } from '@nestjs/common';

import { Employee } from '../employee.model';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [];

  insertEmployee(title: string, desc: string, price: string) {
    const empId = Math.random().toString();
    const newEmployee = new Employee(empId, title, desc, price);
    this.employees.push(newEmployee);
    return empId;
  }

  getEmployees() {
    return [...this.employees];
  }
  /* '...this.employees' es un spread operator, que va a retornar todos los empleados.
    no podemos usar 'this.employees' porque estariamos haciendo una referencia directa en memoria,
    no un objeto nuevo,  y podria dañar los datos y generar bugs  */

  getSingleEmployee(employeeId: string) {
    const employee = this.findEmployee(employeeId)[0]; // retorma el primer elemento
    return { ...employee }; //creamos un nuevo objeto y le cargamos el key value pair
  }

  updateEmployee(
    employeeId: string,
    name: string,
    lname: string,
    role: string,
  ) {
    const [employee, index] = this.findEmployee(employeeId); //si tenemos un array del lado derecho, los metemos en el lado izquierdo
    const updateEmployee = { ...employee };

    if (name) {
      //si existe el nombre, que lo traiga, sino no.
      updateEmployee.name = name;
    }
    if (name) {
      updateEmployee.lastname = name;
    }
    if (role) {
      updateEmployee.role = role;
    }

    this.employees[index] = updateEmployee; //con esto modificamos el empleado.
  }
  //como usamos varias veces las busquedas, directamente creo un metodo especifico para ello.
  //creamos un metodo privado porque se va a usar solo en este service
  private findEmployee(id: string): [Employee, number] {
    //aca definimos una tupla para el type del return. El primero es un employee, y el segundo siempre sera un number

    const employeeIndex = this.employees.findIndex((emp) => emp.id == id); // lo buscamos por el indice del objeto
    const employee = this.employees[employeeIndex]; // trae el empleado que matchea con el indice
    if (!employee) {
      //chequeamos a ver si lo encontró
      throw new NotFoundException('could not find the employee.');
    }
    return [employee, employeeIndex]; //creamos un nuevo objeto y le cargamos el k
  }

  deleteEmployee(empId: string) {
    const index = this.findEmployee(empId)[1]; //como tenemos [Employee, number], (empId)[1] nos trae el dato 'number' (siendo [0] el employee).
    this.employees.splice(index, 1); //splice toma el starting point y despues borra el elemento inmediato que sigue.
  }
}
