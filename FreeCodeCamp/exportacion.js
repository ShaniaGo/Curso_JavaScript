export function verificarServidor() {
  // 1. Clase declarada dentro de la función
  class Servidor {
    constructor(ip, estado) {
      this.ip = ip;
      this.estado = estado;
    }
  }

  // 2. Constante con la instancia de la clase
  const servidorPrincipal = new Servidor("192.168.1.10", "Activo");

  console.log(`Servidor en ${servidorPrincipal.ip} está: ${servidorPrincipal.estado}`);
}

// Para probarla:
//verificarServidor();