var instruction=()=>{
    console.log("Enter 1 to create a new text file.");
    console.log("Enter 2 to read the contents of a file.");
    console.log("Enter 3 to append to an existing file.");
    console.log("Enter 4 to rename of a file.");
    console.log("Enter 5 to Delete a file.");
    console.log("Enter 6 to Create a Directry.");
    console.log("Enter 7 to Delete a Directory.");
    console.log("Enter 8 to Update a file.");
    console.log("Enter 0 Exit.");
};

var start = () => {
    rl.question("Enter Your Choice:", (answer) => {
        if (answer === "1") {
            createFileWizard();
        }
        else if(answer==="2"){
            readFileWizard();
        }
        else if(answer==="3"){
            appendToFileWizard();
        }
        else if(answer==="4"){
            renameFileWizard();
        }
        else if(answer==="5"){
            deleteFileWizard();
        }
        else if(answer==="6"){
            createDirWizard();
        }
        else if(answer==="7"){
            removeDirWizard();
        }
        else if(answer==="8"){
            updateFileWizard();
        }
        else if(answer==="0"){
            rl.close();
        }
        else{
            console.log("Wrong Choice! Please try again.");
            start();
        }
    });
};

var repeat=()=>{
    instruction();
    start();
};
console.log("Welcome to Dinky's File System\n");
repeat();