// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// // const csvWriter = createCsvWriter({
// //     path: 'logs.csv',
// //     header: [
// //         {id: 'name'},
// //         {id: 'lang'}
// //     ]
// // });


// // const records = [
// //     {name: 'Bob',  lang: 'French, English'},
// //     {name: 'Mary', lang: 'English'}
// // ];
 
// // csvWriter.writeRecords(records)
// //     .then(() => {
// //         console.log('...Done');
// //     });

// exports.CsvWriter = class Writer{

//     fileName = 'log.csv'
//     csvWriter = null

//     /*
//         [
//                 {id: 'name'},
//                 {id: 'lang'}
//             ]
//     */
//     constructor(filename, headerIds, append = false){

//         this.fileName = filename
//         this.csvWriter = createCsvWriter({
//             path: filename,
//             header: headerIds,
//             append: append
//         });

//     }

//     write(records){

//         this.csvWriter.writeRecords(records)
//         .then(() => {
//             console.log("...Logged!")
//         })

//     }

//     logError(e){

//         let logs = [
//             {"log" : e}
//         ]
//         this.write(logs)
//     }


// }