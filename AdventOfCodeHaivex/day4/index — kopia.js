async function getPassports() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let regex = /\n{2,}/gmi; //two lines as regex

    let dataArray = dataText.split(regex);

    console.log(dataArray);

    let requiredData = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:'];
    let validData = [];

    let counter = 0;

    dataArray.forEach((el, index) => {
        let isValid = requiredData.every((value) => {
            if(el.includes(value)) {
                return true;
            }
            else {
                return false;
            }
        });
        if (isValid) {
            validData.push(el);
            counter++;
        }
    })

    //console.log(counter);
    console.log(validData);

    // let regexForSpaceOrEnter = /\s+/;

    // validData = validData.map((el) => {
    //     return el.split(regexForSpaceOrEnter);
    // })

    // console.log(validData);

    let arrayOfObjects = [];

    validData.forEach((el) => {

        let byrReg = /byr:(\w{1,})/m;
        let iyrReg = /iyr:(\w{1,})/m;
        let eyrReg = /eyr:(\w{1,})/m;

        let hgtReg = /hgt:(\w{1,})/m;
        let hclReg = /hcl:(#?\w{1,})/m;
        let eclReg = /ecl:(#?\w{1,})/m;

        let pidReg = /pid:(#?\w{1,})/m;

        console.log(el);

        let byr = Number(el.match(byrReg)[1]);
        let iyr =  Number(el.match(iyrReg)[1]);
        let eyr =  Number(el.match(eyrReg)[1]);
        let hgt = el.match(hgtReg)[1];
        let hcl = el.match(hclReg)[1];
        let ecl = el.match(eclReg)[1]
        let pid = el.match(pidReg)[1];

       arrayOfObjects.push({
        byr: byr,
        iyr: iyr,
        eyr: eyr,
        hgt: hgt,
        hcl: hcl,
        ecl: ecl,
        pid: pid
       })
    })

    console.log(arrayOfObjects);

    let finalList = arrayOfObjects.filter((el, index, array) => {
        if(el.byr < 1920 || el.byr > 2010) {
            return false;
        }
        if(el.iyr < 2010 || el.iyr > 2020) {
            return false;
        }
        if(el.eyr < 2020 || el.eyr > 2030) {
            return false;
        }
        if(el.eyr < 2020 || el.eyr > 2030) {
            return false;
        }

        let cm = el.hgt.includes("cm");
        let inz = el.hgt.includes("in");

        if(!inz && !cm) {
            return false;
        }
        
        if(el.hgt.includes("cm")) {
            if(parseInt(el.hgt) < 150 || parseInt(el.hgt) > 193) {
                return false;
            }
        }

        let hclMatch = el.hcl.match(/#[0-9A-F]{6}/gmi);

        if(el.hgt.includes("in")) {
            if(parseInt(el.hgt) < 59 || parseInt(el.hgt) > 76) {
                return false;
            }
        }
        if(el.hcl[0] != '#' || el.hcl.length != 7 || !hclMatch) {
            return false;
        }

        if(el.pid.length != 9 || Number(el.pid) == NaN) {
            return false;
        }
        return true;
    })

    
    let blu =  "blu";
    let amb =  "amb";
    let brn = "brn";
    let gry =  "gry";
    let grn = "grn";
    let hzl = "hzl";
    let oth = "oth";

    finalList = finalList.filter((el) => {
        if(el.ecl.includes(blu)) {
            return true;
        }
        if(el.ecl.includes(amb)) {
            return true;
        }
        if(el.ecl.includes(brn)) {
            return true;
        }
        if(el.ecl.includes(gry)) {
            return true;
        }
        if(el.ecl.includes(blu)) {
            return true;
        }
        if(el.ecl.includes(grn)) {
            return true;
        }
        if(el.ecl.includes(hzl)) {
            return true;
        }
        if(el.ecl.includes(oth)) {
            return true;
        }
        return false;
    })

    console.log(finalList);

    //132 or 137

}


getPassports();