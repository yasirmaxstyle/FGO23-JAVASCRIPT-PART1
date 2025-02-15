function tempConvertor(temp, from, to) {
    // invalid type
    if (typeof temp !== 'number') return;
    if (typeof from !== 'string') return;
    if (typeof to !== 'string') return;

    const tempArr = ['C', 'R', 'F', 'K'];
    // invalid case    
    if (from === to) {
        console.log('You cannot convert to the same temperature')
        return;
    } else if (!tempArr.includes(from)) {
        console.log('Please input: C, F, R, or K');
        return;
    } else if (!tempArr.includes(to)) {
        console.log('Please input: C, F, R, or K');
        return;
    }

    // define value temp
    let vFrom;
    let vTo;

    switch (from) {
        case 'C': vFrom = 5; break;
        case 'F': vFrom = 9; break;
        case 'R': vFrom = 4; break;
        case 'K': vFrom = 5; break;
    }

    switch (to) {
        case 'C': vTo = 5; break;
        case 'F': vTo = 9; break;
        case 'R': vTo = 4; break;
        case 'K': vTo = 5; break;
    }

    switch (from) {
        case 'F': temp -= 32; break;
        case 'K': temp -= 273; break;
    }

    let result = vTo / vFrom * temp; // counting result

    switch (to) {
        case 'F': result += 32; break;
        case 'K': result += 273; break;
    }

    console.log(result);
}

tempConvertor(100, 'K', 'C');
