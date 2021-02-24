var boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;

    if(genero == "" && edad == "") {
        swal({
            title: "No! no! no! no! no!",
            text: "No te pases de avispado. Complétame la info",
            button: "Esta bien. Cogela suave mi brother",
            icon: "error",
          });
    }
    else if(genero == "" && edad < 18) {
        swal({
            title: "Para donde crees que vas ?",
            text: "No me hagas llamar a tus papás !",
            button: "Ni se te ocurra ! Mi papá me mata si me ve acá !",
            icon: "error",
        });
    }
    else if(genero == "" && edad >= 18) {
        swal({
            title: "Ummmm nop !",
            text: "Lo siento, con confio en ti",
            button: "Mk no ve que ya tengo hasta canas   :|",
            icon: "error",
        });
    }
    else if(genero == "niña" && edad == "") {
        swal({
            title: "Muy linda y todo pero no",
            text: "Bebe, sin cedula no te puedo dejar pasar …",
            button: "Que man tan fastidioso :(",
            icon: "error",
        });
    }
    else if(genero == "niño" && edad == "") {
        swal({
            title: "Que pena viejo ...",
            text: "Brother sin cedula no hay entrada",
            button: "Parce camine pa'l amanecedero. Allá no molestan",
            icon: "error",
        });
    }
    else if(genero == "niña" && edad < 18) {
        swal({
            title: "Lo siento bebe, pero…",
            text: "Muy linda y todo pero vuelve en " + (18 - edad) + " años",
            button: "Ayyy, dejame entrar porfis. Mi amiga esta adentro !",
            icon: "error",
        });
    }
    else if(genero == "niño" && edad < 18) {
        swal({
            title: "Jajajajaj como no !",
            text: "Con esa cédula falsa no engaña ni a un ciego. Vuelva en " + (18 - edad) + " años viejo",
            button: "Acaso usted no sabe quien soy yo !",
            icon: "error",
        });
    }
    else if(genero == "niña" && edad >= 18) {
        swal({
            title: "Por supuesto preciosa, sigue",
            text: "Rico verte de nuevo por acá  :)  Hace cuanto no vienes ?",
            button: "Gracias bebe !! (En acento paisa)",
            icon: "success",
            timer: 5000,
            showConfirmButton: false,
        });
        swal({
            title: "Bebe, el cover son $10.000.oo",
            text: "Pero no te preocupes. La casa invita :)",
            button: "Ayyyy tan lindo (En acento paisa)",
            icon: "success",
        });
    }
    else if(genero == "niño" && edad >= 18) {
        swal({
            title: "Otra vez este man?",
            text: "Hagale pero no vaya a arma pelea otra vez",
            button: "Yo que culpa. Un man me toco la cola. Vine a ver si me lo encuentro de nuevo :)",
            icon: "success",
            timer: 5000,
            showConfirmButton: false,
        });
        swal({
            title: "Viejo el cover son $15.000.oo",
            text: "El morral lo puede guardar alla con la señora",
            button: "$15.000.oo ????!!! Pero son consumibles ?",
            icon: "success",
        });
    }  
});

