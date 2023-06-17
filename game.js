// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"


var obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}

class Users {
    constructor(name, xp, log){
        this.name = name;
        this.xp = xp;
        this.log = log
    }
    newSolvedChallenge(o){
        this.xp += obj[o.level];
        this.log.push(o.id);

    }
}
 let user1 = new Users("Russul", 0, []);
 console.log(user1);

user1.newSolvedChallenge({
    id:1,
    level: "VE"
})

let o = {
    id : 2,
    level: "ME"
}

user1.newSolvedChallenge(o);
console.log(user1.xp);
console.log(user1.log);