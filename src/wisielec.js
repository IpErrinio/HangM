function drawHangman(attempts) {
  const canvas = document.getElementById("hangmanCanvas");
  const ctx = canvas.getContext("2d");

  ctx.lineWidth = 2;
  ctx.strokeStyle = "#333";

  switch (attempts) {
    case 1:
      ctx.beginPath();
      ctx.moveTo(10, 190);
      ctx.lineTo(190, 190);
      ctx.stroke();
      break;
    case 2:
      ctx.beginPath();
      ctx.moveTo(50, 190);
      ctx.lineTo(50, 20);
      ctx.stroke();
      break;
    case 3:
      ctx.beginPath();
      ctx.moveTo(50, 20);
      ctx.lineTo(150, 20);
      ctx.stroke();
      break;
    case 4:
      ctx.beginPath();
      ctx.moveTo(150, 20);
      ctx.lineTo(150, 40);
      ctx.stroke();
      break;
    case 5:
      ctx.beginPath();
      ctx.arc(150, 50, 10, 0, Math.PI * 2, true);
      ctx.stroke();
      break;
    case 6:
      ctx.beginPath();
      ctx.moveTo(150, 60);
      ctx.lineTo(150, 100);
      ctx.stroke();
      ctx.moveTo(150, 70);
      break;
    case 7:
      ctx.lineTo(140, 85);
      ctx.moveTo(150, 70);
      ctx.lineTo(160, 85);
      ctx.stroke();
      break;
    case 8:
      ctx.moveTo(150, 100);
      ctx.lineTo(140, 115);
      ctx.moveTo(150, 100);
      ctx.lineTo(160, 115);
      ctx.stroke();
      break;
  }
}
