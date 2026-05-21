import {faker} from '@faker-js/faker';
import { getDefaultHighWaterMark } from 'node:stream';

export class RandomDataGenerator
{

  static  getfirstname()
    {
        return faker.person.firstName();
    }   

    static getlastname()
    {
        return faker.person.lastName();
    }

    static getfullname()
    {
        return faker.person.fullName();

    }

    static getemail()
    {
        return faker.internet.email();
    }   

    static gettelephone()
    {
        return faker.phone.number();
    }   

    static getpassword()
    {
        return faker.internet.password();
    }


}