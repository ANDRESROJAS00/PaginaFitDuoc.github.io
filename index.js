// URL directa de la APK desde GitHub Releases
const apkUrl = "https://github.com/ANDRESROJAS00/PaginaFitDuoc.github.io/releases/download/FitDuocUrl/FitDuoc.apk";

// Detectar si el usuario está en móvil
function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|iphone|ipad|ipod|windows phone/i.test(userAgent.toLowerCase());
}

// Generar el contenido dinámico
function renderContent() {
  const contentDiv = document.getElementById("content");

  if (isMobileDevice()) {
    // Mostrar enlace de descarga para móvil
    contentDiv.innerHTML = `
      <h1>FitDuoc</h1>
      <p>¡Descubre la forma más sencilla de organizar tus alimentos diarios!</p>
      <p>
        Descarga FitDuoc y lleva un registro eficiente y personalizado de tus comidas.
        Diseñada para ayudarte a mantener un estilo de vida saludable de manera práctica y accesible.
      </p>
      <p><a href="${apkUrl}" download>Descargar APK</a></p>
    `;
  } else {
    // Mostrar QR para computadora junto con la descripción
    contentDiv.innerHTML = `
      <h1>FitDuoc</h1>
      <p>¡La app creada para facilitar el consumo de alimentos día a día!</p>
      <p>
        FitDuoc está diseñada para ayudarte a organizar tus comidas,
        mantener un control saludable y hacer tu vida más práctica.
      </p>
      <p>Escanea el código QR a continuación para descargar la aplicación:</p>
      <div id="qrcode"></div>
    `;
    const qrCode = new QRCode(document.getElementById("qrcode"), {
      text: apkUrl,
      width: 200,
      height: 200,
    });
  }
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", renderContent);
