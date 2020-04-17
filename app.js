const CSVToJSON=require('csvtojson');
const JSONToCSV=require('json2csv').parse;
const FileSystem=require('fs');


CSVToJSON().fromFile('./source.csv').then(source => {
    console.log(source);
    source.push({
        'first_name':'Rudy',
        'last_name':'Chakhtoura',
        'mother_name':'Maguy',
        'father_name':'Georges',
        'schoolida_email':'rudy.chakhtoura@schoolida.com'
    });
    const csv = JSONToCSV(source,{fields: ['first_name','last_name','mother_name','father_name','schoolida_email']});
    FileSystem.writeFileSync('./destination.csv', csv);
});
