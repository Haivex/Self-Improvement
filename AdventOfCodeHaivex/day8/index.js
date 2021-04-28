async function getSteps() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let regex = /\n/;

    let dataArray = dataText.split(regex);
    //console.log(dataArray);

    dataArray = dataArray.map((el) => {
        return el.split(' ');
    })

    let dataObjects = dataArray.map((el, index) => {
        return {
            action: el[0],
            steps: Number(el[1]),
            isDone: false,
            elementIndex: index
        }
    })
    console.log(dataObjects);
    let dataObjectsCopy = JSON.parse(JSON.stringify(dataObjects))
    //console.log(dataObjectsCopy);


    function make() {
        let currentIndex = 0;
        let isFounded = false;
        let accumulator = 0;
    
        while(!isFounded) {
            let isDone = dataObjects[currentIndex].isDone;
            let steps = dataObjects[currentIndex].steps;
            let action = dataObjects[currentIndex].action;
            if(isDone) {
                isFounded = true;
                break;
            }
            dataObjects[currentIndex].isDone = true;
            if(currentIndex == dataObjects.length - 1) {
                isFounded = true;
                console.log('lastItem');
                console.log(accumulator);
            }
            switch (action) {
                case 'jmp':
                        currentIndex += steps;
                        break;
                case 'acc':
                        accumulator += steps;
                        currentIndex += 1;
                        break;
                case 'nop':
                        currentIndex += 1;
                        break;
                default:
                        break;                            
            }
        }
        //console.log(accumulator);
    }

    //stage 2
    let jmpsAndNops = dataObjects.filter((el, index) => {
        if(el.action == 'jmp' || el.action == 'nop') {
            return true;
        }
        return false;
    })

    //console.log(jmpsAndNops);
    jmpsAndNops.forEach((el) => {
        if(el.action == 'jmp') {
            dataObjects[el.elementIndex].action = 'nop';
        }
        if(el.action == 'nop') {
            dataObjects[el.elementIndex].action = 'jmp'
        }

        make();

        dataObjects = JSON.parse(JSON.stringify(dataObjectsCopy))
    })

   
}

getSteps();
