const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
var filename="";
var content="";

var createDirWizard = () => {
    rl.question("Enter the name of  Directory: ", (ans) => {
        if (!fs.existsSync(ans)) {
            fs.mkdirSync(ans);
        } else {
            console.log("Directory is already exist.");
        }
        repeat();
    });
};

var removeDirWizard = () => {
    rl.question("Enter the name for remove Directory: ", (ans) => {
        if (fs.existsSync(ans)) {
            fs.rmdirSync(ans);
            console.log("Diretory is removed.");
        } else {
            console.log("Directory is not exist.");
        }
        repeat();
    });
};

var createFile=()=>{
    fs.writeFile(filename,content,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Your File save successfully..");
        }
        repeat();
    });
};

var createFileWizard=()=>{
    console.log("Welcome to file creation wizard.");
    rl.question("Name of the file: ",(ans)=>{
        filename=ans + ".txt";
        rl.question("Content of the file: ",(ans)=>{
            content=ans;
            createFile();
        });
    });
};

var readFileWizard=()=>{
    rl.question("Enter name of File:",(ans)=>{
        filename=ans+".txt";
        fs.readFile(filename,'utf8',function(err,data){
            if(err){
                console.log("File is Not exist.");
            }
            else{
                console.log("Done :" + filename);
                console.log(data);
            }
            repeat();
        });
    });
};

var deleteFileWizard=()=>{
    rl.question("Enter name of the File: ", (ans) => {
        fileName = ans + ".txt";
        fs.unlink(fileName, function(err) {
            if (err) {
                console.log("File is not exist.");
            } else {
                console.log('File is deleted.');
            }
        });
        repeat();
    });
};

var appendToFileWizard=()=>{
    rl.question("Enter name of the file: ", (ans) => {
        fileName = ans + ".txt";
        rl.question("Enter Content of the file: ", (ans) => {
            content = ans;
            fs.appendFile(fileName, content, function(err) {
                if (err) {
                    console.log("File is not exist.");
                } else {
                    console.log('File is appended successfully.');
                }
                repeat();
            });
        });
    });
};

var updateFileWizard = () => {
    rl.question("Enter name of the file: ", (ans) => {
        fileName = ans + ".txt";
        rl.question("Enter Content for the file: ", (ans) => {
            content = ans;
            fs.writeFile(fileName, content, function(err) {
                if (err) {
                    console.log("File is not exist.");
                } else {
                    console.log('File is updated.');
                }
                repeat();
            });
        });
    });
};

var renameFileWizard=()=>{
    rl.question("Enter original file name: ", (ans) => {
        var replacedFileName = "";
        fileName = ans + ".txt";
        rl.question("Enter the name for replaced file name: ", (ans) => {
            replacedFileName = ans + ".txt";
            fs.rename(fileName, replacedFileName, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Your File" + fileName + ".txt replaced with " + replacedFileName + ".txt");
                }
                repeat();
            });
        });
    });
};

var instruction=()=>{
    console.log("Enter 1 : Create a Directry.");
    console.log("Enter 2 : Remove a Directory.");
    console.log("Enter 3 : Create a new text file.");
    console.log("Enter 4 : Read the file.");
    console.log("Enter 5 : Delete the file.");
    console.log("Enter 6 : Append to an existing file.");
    console.log("Enter 7 : Update the file.");
    console.log("Enter 8 : Rename of a file.");
    console.log("Enter 0 : Exit.");
};

var start = () => {
    rl.question("Enter Your Choice:", (answer) => {
        if (answer === "1") {
            createDirWizard();
        }
        else if(answer==="2"){
            removeDirWizard();
        }
        else if(answer==="3"){
            createFileWizard();
        }
        else if(answer==="4"){
            readFileWizard();
        }
        else if(answer==="5"){
            deleteFileWizard();
        }
        else if(answer==="6"){
            appendToFileWizard();
        }
        else if(answer==="7"){
            updateFileWizard();
        }
        else if(answer==="8"){
            renameFileWizard();
        }
        else if(answer==="0"){
            rl.close();
        }
        else{
            console.log("Please enter the correct choice..!");
            start();
        }
    });
};

var repeat=()=>{
    instruction();
    start();
};
console.log("Hello, Welcome to Dinky File System.\n");
repeat();