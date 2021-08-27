const CsvReadableStream = require('csv-reader');
const fs = require('fs')

let inputStream = fs.createReadStream("members.csv", 'utf-8')

/* Creating sets instead of arrays will deal with repeating data */
females = new Set()
males = new Set()

function sortNames(row){
    playerName = row[0].toString().toLowerCase()
    row[1] == 'm' ? males.add(playerName) : females.add(playerName)
}

const streamer = (callback) => {

    inputStream
	.pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
	.on('data', row => {
        sortNames(row)
	})
	.on('end', () => {
        callback({
            /* transforming the sets into an array */
            males : [...males],
            females : [...females]
        })
	});

}

exports.Streamer = streamer