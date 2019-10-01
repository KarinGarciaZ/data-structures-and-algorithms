let list1 = [[10,25], [40,65], [70,90]]
let list2 = [[12,21], [38, 49], [72,97]]

let dur = 18

let getNumbers = (list1, list2, dur) => {    
    for (let i = 0; i < list1.length; i++) {
        const element = list1[i];
        if (element[1] - element[0] >= dur) {
            for (let j = 0; j < list2.length; j++) {
                const element2 = list2[j];
                if(element2[1] - element2[0] >= dur) {
                    let maxStart = Math.max(element[0], element2[0])
                    let minEnd = Math.min(element2[1], element[1])
                    if( minEnd - maxStart >= dur )
                        return [ maxStart, minEnd ]
                }
            }
        }
    }

    return [0, 0]
}

console.log(getNumbers(list1, list2, dur))