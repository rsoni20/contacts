import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Contact } from './contact';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let contacts: Contact[] = [
            { id: 1, name: "Ravij", phoneNo: "9924166945" }
        ];

        return { contacts };
    }
}