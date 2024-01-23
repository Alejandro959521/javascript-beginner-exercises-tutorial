const sing = ()=>{

    let song=""

        for(let x=0; x<12; x++){

            if(x==4) song+="there will be an answer, "
            else if(x==10) song+="whisper words of wisdom, "
            else if (x==11) song+="let it be"
            else song+="let it be, "
        }
return song
}

//Your code above ^^^

console.log(sing());