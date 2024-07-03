// code your solution here
function superbowlWin (record){
    const result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;
};

const record = [
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
];

console.log(superbowlWin(record));