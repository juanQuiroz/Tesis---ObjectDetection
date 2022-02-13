export const drawRect = (detections, ctx) => {
  // Obtener los resultados de las predicciones

  detections.forEach(prediction => {
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    // definiendo estilios
    const color = "blue";
    ctx.strokeStyle = color;
    ctx.font = "16px Arial";
    ctx.fillStyle = color;

    // Dibujan los rectangulos y texto
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
