function add() {
  // Impede adicionar mais de uma vez
  if (document.getElementById("card-lucas")) return;

  const card = document.createElement("div");
  card.className = "card";
  card.style.width = "22rem";
  card.setAttribute("aria-hidden", "true");
  card.id = "card-lucas"; // ID único para identificar o card

  const img = document.createElement("img");
  img.src = "img/Lucas_Paqueta.webp";
  img.className = "card-img-top";
  img.alt = "Lucas Paquetá";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  cardBody.innerHTML = `
    <h5 class="card-title">
      <span class="card-title">Lucas Tolentino Coelho de Lima</span>
      <span class="badge text-bg-secondary">8,8</span>
    </h5>
    <p class="card-text">
      <span><strong>Nascimento:</strong> 27/08/1997</span><br>
      <span><strong>Altura:</strong> 1,80</span><br>
      <span><strong>Posição:</strong> Meio-campista</span><br>
    </p>
  `;

  card.appendChild(img);
  card.appendChild(cardBody);

  const container = document.getElementById("Cards");
  container.appendChild(card);
}