async function getSeats() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let regex = /\n/;

    let dataArray = dataText.split(regex);
    //console.log(dataArray)

    
    //let dataArray = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']

    dataArray = dataArray.map((el) => {
        return el.split('');
    })

    //console.log(dataArray)

    let binaryArray = dataArray.map((el) => {
        el = el.map((letter) => {
            if (letter == 'B' || letter == 'R') {
                return 1;
            }
            return 0;
        })
        return el;
    })

    console.log(binaryArray);



    let rowsArray = binaryArray.map((el, index) => {
        el = el.filter((el, index) => {
            return index < 7;
        })
        return parseInt(el.join(''), 2);
    })

    console.log(rowsArray)

    let columnsArray = binaryArray.map((el, index) => {
        el = el.filter((el, index) => {
            return index > 6;
        })
        return parseInt(el.join(''), 2);
    })

    console.log(columnsArray)

    let seatIDs = [];

    rowsArray.forEach((element, index) => {
        seatIDs.push(element * 8 + columnsArray[index]);
    });
    console.log(seatIDs)

    //stage 2
    for(let i = 0; i < seatIDs.length; i++) {
        if(!seatIDs.includes(i))
        {
            console.log(i);
        }
    }

    //console.log(Math.max(...seatIDs)); too many items

    function getMax(arr) {
        let len = arr.length;
        let max = -Infinity;
    
        while (len--) {
            max = arr[len] > max ? arr[len] : max;
        }
        return max;
    }

    console.log(getMax(seatIDs));

}


getSeats();