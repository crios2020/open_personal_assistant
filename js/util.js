//Libreria pensada como decorado para curso de programación Inicial

/**
 * Función para generar voz
 * La voz es generada por el browser, se recomienda usar Edge de Microsoft
 * Ej: hablar("Hola Mundo!!")
 * @param {*} mensaje Mensaje a generar
 */
function hablar(mensaje){
    const message = new SpeechSynthesisUtterance(mensaje);
    speechSynthesis.speak(message);
}

/**
 * Función que devuelve la zona horaria
 * @returns Zona Horaria
 */
function getZonaHoraria() {
    return Intl
        .DateTimeFormat()
        .resolvedOptions()
        .timeZone
        .replace("/", " ")
        .replace("_", " ");
}

/**
 * Función que devuelve la hora en un string
 * @returns Hora
 */
function getHora(){  
    fecha=new Date()
    anio=fecha.getFullYear()
    hora=fecha.getHours()
    minuto=fecha.getMinutes()
    return hora+" horas y "+minuto+" minutos"
   
}

/**
 * Función el momento del día
 * @returns Momento
 */
function getMomento(){
    momento=""
    if(hora>=0 && hora<4)   momento="trasnoche"
    if(hora>=4 && hora<6)   momento="madrugada"
    if(hora>=6 && hora<8)   momento="amanecer"
    if(hora>=8 && hora<11)  momento="mañana"
    if(hora>=11 && hora<14) momento="mediodía"
    if(hora>=14 && hora<18) momento="tarde"
    if(hora>=18 && hora<20) momento="anochecer"
    if(hora>=20 && hora<24) momento="noche"
    return momento
}

/**
 * Función la acción del momento del día
 * @returns Momento
 */
function getMomentoAccion(){
    momento=""
    if(hora>=0 && hora<4)   momento="dormir"
    if(hora>=4 && hora<6)   momento="dormir"
    if(hora>=6 && hora<8)   momento="despertar"
    if(hora>=8 && hora<11)  momento="desayunar"
    if(hora>=11 && hora<14) momento="morfar"
    if(hora>=14 && hora<16) momento="dormir siesta"
    if(hora>=16 && hora<18) momento="merendar"
    if(hora>=18 && hora<20) momento="ver series"
    if(hora>=20 && hora<22) momento="cenar"
    if(hora>=22 && hora<24) momento="dormir"
    return momento
}

/**
 * Función que devuelve la fecha actual en un string
 * @returns Fecha
 */
function getFecha(){
    fecha=new Date()
    diaMes=fecha.getDate()
    diaSem=fecha.getDay()
    nroMes=fecha.getMonth()
    anio=fecha.getFullYear()
    
    var nombreDia = ''
    if(diaSem == 0)     nombreDia = 'domingo'
    if(diaSem == 1)     nombreDia = 'lunes'
    if(diaSem == 2)     nombreDia = 'martes'
    if(diaSem == 3)     nombreDia = 'miércoles'
    if(diaSem == 4)     nombreDia = 'jueves'
    if(diaSem == 5)     nombreDia = 'viernes'
    if(diaSem == 6)     nombreDia = 'sábado'
    
    var nombreMes = ''
    if(nroMes == 0)     nombreMes = 'enero'
    if(nroMes == 1)     nombreMes = 'febrero'
    if(nroMes == 2)     nombreMes = 'marzo'
    if(nroMes == 3)     nombreMes = 'abril'
    if(nroMes == 4)     nombreMes = 'mayo'
    if(nroMes == 5)     nombreMes = 'junio'
    if(nroMes == 6)     nombreMes = 'julio'
    if(nroMes == 7)     nombreMes = 'agosto'
    if(nroMes == 8)     nombreMes = 'septiembre'
    if(nroMes == 9)     nombreMes = 'octubre'
    if(nroMes == 10)    nombreMes = 'noviembre'
    if(nroMes == 11)    nombreMes = 'diciembre'

    return nombreDia+", "+diaMes+" de "+nombreMes+" del año "+anio

}

/**
 * Función hoyEs devuelve una esfemérides del día
 * @returns esfemérides
 */
function hoyEs(){
    fecha=new Date()
    diaMes=fecha.getDate()
    diaSem=fecha.getDay()
    nroMes=fecha.getMonth()
    anio=fecha.getFullYear()
    hoy=""
    if(diaSem==1) hoy="Odio lo días lunes, por que hay que ir a trabajar!"
    if(diaSem==2) hoy="Hoy es Martes hay que ir a trabajar!"
    if(diaSem==3) hoy="Hoy es Miércoles hay que ir a trabajar!"
    if(diaSem==4) hoy="Hoy es Jueves hay que ir a trabajar!"
    if(diaSem==5) hoy="Hoy es viernes y tu cuerpo lo sabe!"
    if(diaSem==6) hoy="Es fin de semana a descansar!"
    if(diaSem==7) hoy="Es fin de semana a descansar!"
    return hoy

}

/**
 * Función que devuelve la estación
 * @returns esfemérides
 */
function getEstacion(){
    estacion=""
    fecha=new Date()
    diaMes=fecha.getDate()
    diaSem=fecha.getDay()
    nroMes=fecha.getMonth()
    switch(nroMes){
        case 0: case 1:         estacion="verano"           
        break;
        case 3: case 4:         estacion="otoño"           
        break;
        case 6: case 7:         estacion="invierno"           
        break;
        case 9: case 10:        estacion="primavera"           
        break;
        case 2: estacion=(diaMes<21)?"verano":"otoño"
        break
        case 5: estacion=(diaMes<21)?"otoño":"invierno"
        break
        case 8: estacion=(diaMes<21)?"invierno":"primavera"
        break
        case 11:estacion=(diaMes<21)?"primavera":"verano"
        break
    }
    return estacion
}