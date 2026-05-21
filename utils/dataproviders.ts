import fs from 'fs';
import {parse} from 'csv-parse/sync';

export class DataProviders{ 


    //method to read test data from json file and return as object
static getTestdatafromjson(filepath:string)
      {
        //fs.readFileSync(filepath,'utf-8');
        let data:any=JSON.parse(fs.readFileSync(filepath,'utf-8'));
        return data;


      }
      //method to read test data from csv file and return as array of objects
 static gettestdatafromcsv(filepath:string)
     {
        let data=fs.readFileSync(filepath,'utf-8');
        let records:any=parse(data,{
            columns:true,
            skip_empty_lines:true
        });
        return records;
     }

}