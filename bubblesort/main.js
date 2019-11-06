var lista = [1, 7, 14, 28, 56, 61, 3, 5555, 768, 11];

document.getElementById("test-0").innerHTML = lista.toString();

function bubbleSort(listArray) {
    let len = listArray.length;
    let swapped;
    do {
        swapped = false;
        for (i = 0; i < len-1; i++) {
            if (listArray[i] > listArray[i + 1]) {
                let temp = listArray[i];
                listArray[i] = listArray[i + 1];
                listArray[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return listArray;
}

document.getElementById("test-1").innerHTML = bubbleSort(lista);