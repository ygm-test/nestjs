import {
    IsDefined,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    IsUUID,
    Matches,
  } from  'node_modules/class-validator';
  
  export class CreateSchoolDto {
    @IsDefined()
    @IsNotEmpty()
    @IsUUID('4')
    districtId: string;
  
    @IsOptional()
    @IsNotEmpty({ message: 'External ID cannot be empty' })
    @MaxLength(100, {
      message: 'External ID must be shorter than or equal to 100 characters',
    })
    @IsString()
    @Matches(/^[a-zA-Z0-9_-]+$/, {
      message:
        'External id must contain only alphanumerics characters, hypen and underscore(a-zA-Z0-9_)',
    })
    externalId?: string;
  
    @IsOptional()
    @IsNotEmpty({ message: 'ZIP code cannot be empty' })
    @MaxLength(10, {
      message: 'Zip code must be shorter than or equal to 10 characters',
    })
    @IsString()
    zipCode?: string;
  
    @IsDefined({ message: 'Name is required' })
    @IsNotEmpty({ message: 'Name cannot be empty' })
    @MaxLength(200, {
      message: 'Name must be shorter than or equal to 200 characters',
    })
    @IsString()
    name: string;
  }
  