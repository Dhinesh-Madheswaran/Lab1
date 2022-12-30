class Database 
{
    constructor(  dbName, serverName, type )
    {
        this.dbName = dbName;
        this.serverName = serverName;
        this.type = type;
    }

    connection()
    {
        return "db connection string";
    }
}

class DataBaseOps extends Database
{
    constructor( dbName, serverName, type )
    {
        super(dbName, serverName, type);
    }
    createTable(tableName,...columnArgs)
     {
        console.log(tableName + "Table");
        console.log("");
        let columnNames = ""; let columnType = "";
        for (const arg of columnArgs) 
        {
           columnNames += arg.col + " | ";
           columnType += arg.type + " | ";
        } 
         
        console.log(columnNames );
        console.log("----------------------");
        console.log(columnType);
    }

    executeSP(spName, ...spParams)
    {
        let params = "";
        for (const arg of spParams) 
        {
          params += arg + ",";       
        } 
        console.log("Exec " + spName +" " + params);
    }
}

let dbOps = new DataBaseOps();
dbOps.createTable("Employee", { 
                                col : "ID",
                                type : "int" 
                               },
                                {
                                col : "Name",
                                type : "string"
                                },
                                {
                                 col : "Salary",
                                 type : "string"
                                    }
                                );
                                
 dbOps.executeSP("GetSalary",["spParam1", "spParam2", "spParam3"]) ;                              