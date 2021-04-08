import { Module } from '@nestjs/common';

import {EmployeesController} from './employees.controller';
import { EmployeeService } from './services/employees.service';


@Module({
    controllers: [EmployeesController],
    providers: [EmployeeService],
})

export class EmployeesModule {}