const lista = {
    4: "Exceeds proficiency",
    3: "Demostrates proficiency",
    2: "Approaches proficiency",
    1: "Falls well below proficiency",
    0: ["Lacks all proficiency", "No attempt made"],
};

function analisiDatos(){
    let tipoDato = prompt("Choose the note type (Traditional)(points range)(SBG rating)")
    tipoDato = tipoDato.toLocaleLowerCase()
    if(tipoDato === "traditional"){
        let nota = parseInt(prompt("Ingrese su nota: "))
        console.log(nota)
        if(nota === 0){
            console.log("Your note is Z")
        }
        else if(nota > 0 || nota < 60){
            console.log("Your note is E")
        }
        else if(nota >=60 || nota <=69 ){
            console.log("Your note is D")
        }
        else if(nota >=70 || nota <=79 ){
            console.log("Your note is C")
        }
        else if(nota >=80 || nota <=89 ){
            console.log("Your note is B")
        }

        else if(nota >= 90 || nota <= 100){
            console.log("Your note is B")
        }
    }
    else if(tipoDato === "points range"){
        let nota = prompt("Ingrese su nota: ")
    }
    else if(tipoDato === "sbg rating"){
        let nota = prompt("Ingrese su nota: ")
    }
};


analisiDatos()