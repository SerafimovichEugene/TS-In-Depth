import { Librarian } from "../interfaces";
import { sealed, logger, writable, logMethod, logParameter, format } from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Librarian {

    public department: string

    @format()
    public name: string
    
    public email: string

    constructor(
        department: string,
        name: string,
        email: string,
    ) {
        this.department = department;
        this.name = name;
        this.email = email;
    }
    
    @logMethod
    assistCustomer(@logParameter customerName: string): void {
        console.log(this.department, customerName);
    }

    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}