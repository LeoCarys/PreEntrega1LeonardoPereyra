function calcularPromedioAsesinatos(jugadores) {
    let totalAsesinatos = 0;
  
    for (let i = 0; i < jugadores.length; i++) {
      totalAsesinatos += jugadores[i].asesinatos;
    }
  
    const promedio = totalAsesinatos / jugadores.length;
    return promedio;
  }
  
  function ingresarJugadores() {
    const jugadores = [];
  
    let cantidadJugadores = parseInt(prompt("Ingrese la cantidad de jugadores:"));
  
    while (cantidadJugadores <= 0) {
      cantidadJugadores = parseInt(prompt("La cantidad de jugadores debe ser mayor que cero. Ingrese la cantidad de jugadores nuevamente:"));
    }
  
    for (let i = 1; i <= cantidadJugadores; i++) {
      const nombre = prompt("Ingrese el nombre del Jugador " + i + ":");
      const asesinatos = parseInt(prompt("Ingrese la cantidad de asesinatos para " + nombre + ":"));
  
      jugadores.push({ nombre: nombre, asesinatos: asesinatos });
    }
  
    return jugadores;
  }
  
  const jugadores = ingresarJugadores();
  const promedioAsesinatos = calcularPromedioAsesinatos(jugadores);
  
  if (promedioAsesinatos > 10) {
    console.log("El promedio de asesinatos por partida es muy alto.");
  } else if (promedioAsesinatos > 5) {
    console.log("El promedio de asesinatos por partida es moderado.");
  } else {
    console.log("El promedio de asesinatos por partida es bajo.");
  }
  