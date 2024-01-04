// Code your solution here
function findMatching(drivers,dName) {
    return drivers.filter(name=>name.toLowerCase()==dName.toLowerCase()?true:false);
}

function fuzzyMatch(drivers,letters) {
    const strLen = letters.length;
    return drivers.filter(name=>name.substr(0,strLen)==letters?true:false);
}

function matchName(drivers,dName) {
    return drivers.filter(driver=>driver.name==dName?true:false);
}
