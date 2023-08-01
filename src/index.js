module.exports = function toReadable (number) {
    
    let num = String(number).split('') ;
    
    const numA = num[0];
    const numB = num[1];
    const numC = num[2];

    if (num.length === 3 ){

        return (
            `${changeNumbToWord(numA)} hundred ${changeNumbToWordTy(numB)} ${numC !== '0' ?
        changeNumbToWord(numC) : ''}`
        )
    
    } else if ( num.length === 2){
        const joinNum = num.join('');
        if (number >= 20){
            return (
                `${changeNumbToWordTy(numA)} ${numB !== '0' ?
            changeNumbToWord(numB) : ''}`
            )
        } else {
            return changeNumbToWordTeen(joinNum);
        }
        
        
    } else if (num.length === 1){
        return changeNumbToWord(numA);
    }

    function changeNumbToWord (number){
        if (number === '1'){
            return 'one' ;
        }else if (number === '2'){
            return 'two' ;
        }else if (number === '3'){
            return'three' 
        }else if (number === '4'){
            return'four'
        }else if (number === '5'){
            return'five'
        }else if (number === '6'){
            return'six'
        }else if (number === '7'){
            return'seven' 
        }else if (number === '8'){
            return'eight' 
        }else if (number === '9'){
            return'nine'
        }else if (number === '0'){
            return'zero'
        }
    }

    function changeNumbToWordTy (number){
        if (number === '2'){
            return 'twenty' ;
        }else if (number === '3'){
            return'thirty' 
        }else if (number === '4'){
            return'forty'
        }else if (number === '5'){
            return'fifty'
        }else if (number === '6'){
            return'sixty'
        }else if (number === '7'){
            return'seventy' 
        }else if (number === '8'){
            return'eighty' 
        }else if (number === '9'){
            return'ninty'
        }
    }
    
    function changeNumbToWordTeen (number){
        if (number === '10'){
            return 'ten' ;
        }else if (number === '11'){
            return 'eleven' ;
        }else if (number === '12'){
            return 'twelve' ;
        }else if (number === '13'){
            return'thirteen' 
        }else if (number === '14'){
            return'fourteen'
        }else if (number === '15'){
            return'fifteen'
        }else if (number === '16'){
            return'sixteen'
        }else if (number === '17'){
            return'seventeen' 
        }else if (number === '18'){
            return'eighteen' 
        }else if (number === '19'){
            return'nineteen'
        }
    }
}


