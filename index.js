// code your solution here

function saturdayFun(activity) {
    activity = activity || 'roller-skate'
    return `This Saturday, I want to ${activity}!`;
}

function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
    
const mondayWork = function (mondayActivity){
    mondayActivity = mondayActivity || 'go to the office'
    return `This Monday, I will ${mondayActivity}.`;
}



function wrapAdjective (party = '*') {
    return function (adjective = "special") {
    return `You are ${party}${adjective}${party}!`
    }
}