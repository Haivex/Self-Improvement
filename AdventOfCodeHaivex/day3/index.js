async function getTrees() {
    let res = await fetch('input.txt');
    let dataText = await res.text();

    let dataArray = dataText.split('\n');
    dataArray.pop();

    dataArray = dataArray.map((el) => {
        let tempEl = el;
        for(let i=0; i<100; i++) {
            el += tempEl;
        }

        el = el.split('');

        return el;
    })

    /*for last stage*/
    dataArray = dataArray.filter((el, index) => {
        return index % 2 == 0;
    })
    /*^ for last stage*/

    dataArray.forEach((el, index, array) => {
            /*change index x Y where Y is direction right*/
            if(el[index * 1].includes('.')) {
                el[index * 1] = '0'
            }
            else {
                el[index * 1] = 'X';
            }


        let p = document.createElement('p');
        p.innerText = el.join('');
        document.body.appendChild(p);

    })

    let counter = 0;

    dataArray.forEach((el, index, array) => {
        if(el.includes('X')) {
            counter++;
        }
    })

    console.log(counter);


}

getTrees();
