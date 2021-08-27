/* 
Coder       : Themba Makamu (Kamzen)
Date        : 25 Aug 2021
Description : Club Matching Members

*/

const reader = require('./reader.js');
// const writer = require('./writer.js');

((r) => {

    let result = [];
    let matches = [];

    let calc = (string_result) => {

        // console.log(string_result);
    
        if(string_result.length === 1 || string_result.length === 2){
    
            return string_result;
    
        }else{
    
            // Calculate The Match Percentage
            let j = string_result.length - 1;
            let sum = "";
   
            for(let i = 0; i < parseInt(string_result.length/2); i++){

                if(i != parseInt(string_result.length/2)){

                    sum += parseInt(string_result[i]) + parseInt(string_result[j]);

                    j--;

                }

                if(string_result.length % 2 === 1 && i === parseInt(string_result.length/2) - 1){
    
                    sum = sum.toString();
                    sum += string_result[i + 1]; 
    
                }
                
                    
                
    
            }
            string_result = sum.toString();
            return calc(string_result);

        }
    
    }

    let matcher = (male, female) => {

        //Try Catch Block To Validate If Input Names Are In Correct Format
        try{

            //Check If The Input Names Are Only Alphabetical Characters
            if(/^[a-zA-Z]+$/.test(male) && /^[a-zA-Z]+$/.test(female)){

                let sentence = `${male} matches ${female}`
                let string_result = "";
                const counted = [];

                for( let i = 0; i < sentence.length; i++){

                    // if(!counted.includes(sentence[i]) || sentence[i] !== ""){

                    //     string_result += sentence.split(sentence[i]).length - 1;
                    //     counted[i] = sentence[i];

                    // }
                    

                    if(counted.includes(sentence[i]) || sentence[i] === " "){

                        continue;

                    }else{

                        string_result += sentence.split(sentence[i]).length - 1;
                        counted[i] = sentence[i];
                        
                    }

                }

                output(sentence,parseInt(calc(string_result)));

                result.push(calc(string_result));
                matches.push(sentence);

                // scores = (score) => {

                //     result.add(calc(string_result));

                //     return [... result];

                // }

                // for(let i = 0; i < scores; i++){

                //     for(let j = 0; j < scores; j++){

                //         if(scores[j] < scores[j + 1]){

                //             scores[j + 1] = scores[j];

                //         }else{

                //             scores[j] = scores[j + 1];

                //         }

                //     }

                // }


            }else{

                //Throws A Error Message 
                throw "Only Alphabetical Characters Are Allowed On Names.";

            }

        }catch(err){

            console.log(err);

        }

    }


    let output = (sentence,percent) => {

        console.log(sentence);
        console.log(percent);       
        console.log(percent < 80 ? "Not A Good Match\n" : "Good Match\n");

    }

    r.Streamer(players => {

        console.log(players.males)
        console.log(players.females)

        players.males.forEach(male => {

            players.females.forEach(female => {

                matcher(male, female)

            })

        })

        //writing to text file in descending order
        let scores = Array.from(result);
        scores = scores.sort();
        let matched = Array.from(matches);
        
        let outputs = [];
        let i = 0;

        scores.forEach(score => {

            outputs.push(score + " , " + matched[i] + "\n");
            i++;

        })

        outputs = outputs.sort();

        const fs = require('fs');

        fs.writeFile('./output.txt',"", (err) => {

            if(err)
            console.log(err);

        })

        for(let i = outputs.length - 1; i >= 0; i--){

            fs.appendFile('./output.txt', outputs[i],(err) =>{

                if(err){
    
                    console.log(err);
    
                }
    
            })

        }
    
    })

})(reader);

// let partnerOne = "Themba",partnerTwo = "Thabiso";
// ((partnerOne,partnerTwo)=>{
// })(partnerOne,partnerTwo);
// console.log(calc("1234567"));
