import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';

import {EmployeeService} from './services/employees.service';


@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeeService ){}

    @Post()
    addProduct(
     @Body('name') empName: string,
     @Body('lastname') lastName: string,
     @Body('role') empRole: string,
     ) { // nest va a buscar en el body un 'title' y nos lo va a pasar como string a prodTitle, y lo mismo con los otros campos
        const empId = this.employeesService.insertProduct(
            empName,
             lastName,
              empRole,
              );
        return {id: empId };
       }

    @Get()
    getAllEmployees(){
        return this.employeesService.getEmployees(); //todo sera automaticamente convertido en json
    }

    @Get(':id') //con esto digo, despues de /employees, no se que viene, pero lo que venga, que se guarde en este parametro 'id'
    getOneEmployee(
        @Param('id') empId: string){//@param se usa para guardar como parametro lo que venga despues de /employees
          return this.employeesService.getSingleEmployee(empId);  
        }

    @Patch(':id')
        updateEmployee(
                       @Param('id') empId: string, 
                       @Body('name') name: string,
                       @Body('lastname') lastname: string,
                       @Body('role') role: string){
            this.employeesService.updateEmployee(empId, name, lastname, role);
            return null;
            
        }

    @Delete(':id')
    removeEmployee(@Param('id') empId: string, ){
        this.employeesService.deleteEmployee(empId);
        return null

    }

    }

