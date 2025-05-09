let esEstudiante = confirm("¿Eres estudiante de CUValles?");

if (esEstudiante) {
  let carrera = prompt("¿Estudias Tecnologías de la Información? (Contesta con un SI o con un NO)");

  if (carrera === "SI") {
    alert("Felicidades, estás en la mejor carrera");
  } else if (carrera === "NO") {
    alert("Uy, te recomiendo que estudies Tecnologías");
  } else {
    alert("No hiciste caso de contestar con un SI o NO, LEA bien");
  }

  alert("Este juego lo programó: Josue Emmanuel Mora Prado");
} else {
  alert("Usted entonces no es alumno de CUValles, buuuuu!!!!");
  alert("Este juego lo programó: Josue Emmanuel Mora Prado");
}
