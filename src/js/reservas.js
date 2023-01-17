let suites = [
  {
    id: 1,
    name: "Suite Família",
    description: 'descrição 1',
    price: 150,
    images: '../../images/acomodacao1.jpg',
  },
  {
    id: 2,
    name: "Suite Master",
    description: 'descrição 2',
    price: 250,
    images: '../../images/acomodacao2.jpg',
  },
  {
    id: 3,
    name: "Suite Premium",
    description: 'descrição 3',
    price: 350,
    images: '../../images/acomodacao3.jpg',
  }
];

const resumoReservaItens = {
  checkIn: "",
  checkOut: "",
  qtdAdultos: 0,
  qtdCrianca: 0,
  suitesSelecionadas: [],
  total: 0,
};

let suite = document.getElementById('divSuites');

function createSuite() {
  let resumo = ''
  suites.forEach((element) => {
    resumo += `<div class="postArea" id="divSuite">
    <img src="${element.images}" alt="${element.name}" />
    <div class="postQuarto">
      <h2>${element.name}</h2>
      <p>
      ${element.description}
      </p>
      <h4>R$ ${element.price.toFixed(2)}</h4>
      <label>
        <input
          id="checkbox${element.id}"
          type="checkbox"
          name="checkbox${element.id}"
          class="checkboxSuite"
        />
        Selecionar ${element.name}
      </label>
    </div>
  </div>`
  });
  suite.innerHTML = resumo;
};

suites.forEach((item) => {
  let teste = document.querySelectorAll(`#checkbox${item.id}`)
  teste.forEach((input) => {
    input.addEventListener('change', (e) => {
      console.log(e.target.value)
      if(e.target.value) {
        resumoReservaItens.suitesSelecionadas.push(item.name.nextSibling.textContent);
        resumoReservaItens.total += item.price;
      } else {
        resumoReservaItens.suitesSelecionadas.splice(indexOf(item.name.nextSibling.textContent), 1);
        resumoReservaItens.total -= item.price;
      }
      localStorage.setItem("suitesSelecionada", resumoReservaItens.suitesSelecionadas.join(", "));
      localStorage.setItem("total", resumoReservaItens.total)
    })
  })
})

createSuite();

let checkInComp = document.getElementById('checkIn');
checkInComp.addEventListener('change', (e) => {
  localStorage.setItem('checkIn', e.target.value);
})

let checkOutComp = document.getElementById('checkOut');
checkOutComp.addEventListener('change', (e) => {
  localStorage.setItem('checkOut', e.target.value);
})

let qtdAdultosComp = document.getElementById('qtdAdultos');
qtdAdultosComp.addEventListener('change', (e) => {
  localStorage.setItem('qtdAdultos', e.target.value);
})

let qtdCriancaComp = document.getElementById('qtdCrianca');
qtdCriancaComp.addEventListener('change', (e) => {
  localStorage.setItem('qtdCrianca', e.target.value);
})

// if (item.checked) {
//       tipoDeQuarto.push(item.nextSibling.textContent.trim());
//       valor += parseInt(item.value);
//     } else {
//       tipoDeQuarto.splice(
//         tipoDeQuarto.indexOf(item.nextSibling.textContent.trim()),
//         1
//       );
//       valor -= parseInt(item.value);
//     }
//     localStorage.setItem("tipoDeQuarto", tipoDeQuarto.join(", "));
//     localStorage.setItem("valor", valor);
          




// for (let itens in resumoReservaItens) {
//   let itensSelecionados = document.querySelectorAll(`.${itens}`);
//   if (itensSelecionados.length > 0) {
//     itensSelecionados.forEach((item) => {
//       item.addEventListener("change", function () {
//         if (itens === "checkboxSuite") {
//           if (item.checked) {
//             tipoDeQuarto.push(item.nextSibling.textContent.trim());
//             valor += parseInt(item.value);
//           } else {
//             tipoDeQuarto.splice(
//               tipoDeQuarto.indexOf(item.nextSibling.textContent.trim()),
//               1
//             );
//             valor -= parseInt(item.value);
//           }
//           localStorage.setItem("tipoDeQuarto", tipoDeQuarto.join(", "));
//           localStorage.setItem("valor", valor);
//         } else {
//           localStorage.setItem(itens, item.value);
//         }
//         updateHTML();
//       });
//     });
//   }
// }