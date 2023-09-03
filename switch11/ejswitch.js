let menu = prompt("Ingrese su menú")

switch(menu){
    case menu = "carne":
    case menu = "CARNE":
    case menu = "Carne":
         console.log("Su bebida será vino tinto")
    break;
    case menu = "pescado":
    case menu = "PESCADO":
    case menu = "Pescado": console.log("Su bebida será vino blanco.")
    break;
    case menu = "verdura":
    case menu = "VERDURA":
    case menu = "Verdura": console.log("Su bebida será agua.")
    break;
    default: menu = prompt("Elija carne, pescado o verdura.")
    //Segundo intento
    switch(menu){
        case menu = "carne":
        case menu = "CARNE":
        case menu = "Carne":
             console.log("Su bebida será vino tinto.")
        break;
        case menu = "pescado":
        case menu = "PESCADO":
        case menu = "Pescado": console.log("Su bebida será vino blanco.")
        break;
        case menu = "verdura":
        case menu = "VERDURA":
        case menu = "Verdura": console.log("Su bebida será agua.")
        break;
        default: console.log("Ese menú no se encuentra disponible.")
        break;
    break;
}}