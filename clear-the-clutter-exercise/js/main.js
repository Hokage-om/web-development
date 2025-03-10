// const fs = require('fs');
// const { basename } = require('path');
// const path = require('path');

// function createfolder(name) {
    
//     fs.mkdir(`${name}`, { recursive: true }, (err) => {
//         if (err) {
//             console.error('Error creating folder:', err);
//         } else {
//             console.log('Folder created successfully!');
//         }
//     });
    
// }

// function movefile(source,destination){
//     fs.rename(source, destination, (err) => {
//         if (err) {
//             console.error('Error moving file:', err);
//         } else {
//             console.log('File moved successfully!');
//         }
//     });
// }

// if(path.extname = ".txt"){
//     createfolder(".txt")
// }
// if(path.extname = ".jpg"){
//     createfolder(".jpg")
// }
// if(path.extname = ".zip"){
//     createfolder(".zip")
// }
// if(path.extname = ".pdf"){
//     createfolder(".pdf")
// }

const fs = require('fs');
const path = require('path');

function createFolder(name) {
    if (!fs.existsSync(name)) {
        fs.mkdirSync(name, { recursive: true });
        console.log(`Folder '${name}' created successfully!`);
    }
}

function moveFile(source, destination) {
    fs.rename(source, destination, (err) => {
        if (err) {
            console.error(`Error moving file ${source} -> ${destination}:`, err);
        } else {
            console.log(`File moved: ${source} -> ${destination}`);
        }
    });
}

function organizeFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }

                if (stats.isFile()) {
                    const ext = path.extname(file).toLowerCase(); // Get file extension
                    if (ext) {
                        const folderName = ext.substring(1); // Remove the dot (.)
                        const folderPath = path.join(directory, folderName);

                        createFolder(folderPath); // Create folder if it doesn't exist
                        moveFile(filePath, path.join(folderPath, file)); // Move the file
                    }
                }
            });
        });
    });
}

// Call the function with the directory containing the files
const targetDirectory = './'; // Change this to your desired folder
organizeFiles(targetDirectory);
