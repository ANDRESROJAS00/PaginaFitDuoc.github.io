// URL de la APK
const apkUrl = "https://download.mediafire.com/5ktq6dv88hu5dat/app-debug.apk";

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
      <h1>Descarga la APK</h1>
      <p><a href="${apkUrl}" download>Descargar APK</a></p>
    `;
  } else {
    // Mostrar QR para computadora
    contentDiv.innerHTML = `
      <h1>Escanea el código QR</h1>
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

