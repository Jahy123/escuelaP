const multimedia = [
  {
    id: 1,
    type: "imagen",
    name: "Imagen 1",
    descripcion:
      "atytyhfgergierhgiergerghurehguierhgiuerhatytyhfgergierhgiergerghurehguierhgiuerhtuhuatytyhfgergierhgiergerghurehguierhgiuerhatytyhfgergierhgiergerghurehguierhgiuerhtuhuatytyhfgergierhgiergerghurehguierhgiuerhatytyhfgergierhgiergerghurehguierhgiuerhtuhuatytyhfgergierhgiergerghurehguierhgiuerhatytyhfgergierhgiergerghurehguierhgiuerhtuhuatytyhfgergierhgiergerghurehguierhgiuerhatytyhfgergierhgiergerghurehguierhgiuerhtuhuatytyhfgergierhgiergerghurehguierhgiuerhatytyhfgergierhgiergerghurehguierhgiuerhtuhuatytyhfgergierhgiergerghurehguierhgiuerhatytyhfgergierhgiergerghurehguierhgiuerhtuhu",
    media: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    type: "video",
    name: "Video 1",
    media: "https://www.example.com/video1.mp4",
  },
  {
    id: 3,
    type: "imagen",
    name: "Imagen 2",
    media: "https://via.placeholder.com/150",
    descripcion: "guheiughisueh",
  },
  {
    id: 4,
    type: "imagen",
    name: "Imagen 3",
    media: "https://via.placeholder.com/150",
    descripcion: "asefeg",
  },
  {
    id: 5,
    type: "video",
    name: "Video 2",
    media: "https://www.example.com/video2.mp4",
  },
  {
    id: 6,
    type: "imagen",
    name: "Imagen 4",
    descripcion:
      "Recuerda, cada paso hacia adelante es un testimonio de tu dedicación, y cada obstáculo superado es una oportunidad para crecer aún más. ¡Sigue persiguiendo tus metas con la misma determinación y entusiasmo!",
    media: "https://via.placeholder.com/150",
  },
];

const contenedorMultimedia = document.getElementById("contenedorMultimedia");

multimedia.forEach((item) => {
  const div = document.createElement("div");

  if (item.type === "imagen") {
    const img = document.createElement("img");
    div.className = "imagen";
    img.src = item.media;
    img.alt = item.name;
    div.appendChild(img);
  } else if (item.type === "video") {
    const video = document.createElement("video");
    div.className = "video";
    video.src = item.media;
    video.alt = item.name;
    video.controls = true;
    div.appendChild(video);
  }

  contenedorMultimedia.appendChild(div);

  const divSeparador = document.createElement("div");
  const parrafo = document.createElement("p");
  divSeparador.className = "parrafo";
  parrafo.textContent = item.descripcion;
  divSeparador.appendChild(parrafo);
  contenedorMultimedia.appendChild(divSeparador);
});
