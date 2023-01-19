let suites = [
  {
    id: 1,
    name: "Suite Família",
    description: 'Televisão, Ar condicionado, Lençol 100% Algodão egípicio, Internet Gratuíta, Mini Bar, Café da Manhã na Cama, etc',
    price: 150,
    images: '../../images/acomodacao1.jpg',
  },
  {
    id: 2,
    name: "Suite Master",
    description: 'Banheira com chiveiro, Máquina de Café com capsulas, Sala de Estar, Flores Naturais,Internet gratuíta, Roupão de Banho, entre outros',
    price: 250,
    images: '../../images/acomodacao2.jpg',
  },
  {
    id: 3,
    name: "Suite Premium",
    description: 'Jacuzzi no Terraço, Cadeiras e mesas no pátio, Banheira, Ar Condicionado, Lençóis 100% algodão egípcio, entre outros',
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

let reservaItens = document.getElementById('resumoReservaId');

let checkInInfoLocal, checkOutInfoLocal, qtdAdultosInfoLocal, qtdCriancaInfoLocal, suitesSelecionadasLocal, totalLocal, diasDeDiaria, pessoasHospedadas;

function createSuite() {
  let resumo = ''
  suites.forEach((suite) => {
    resumo += `<div class="postArea" id="divSuite">
    <img src="${suite.images}" alt="${suite.name}" />
    <div class="postQuarto">
      <h2>${suite.name}</h2>
      <p>
      ${suite.description}
      </p>
      <h4>R$ ${suite.price.toFixed(2)}</h4>
      <label>
        <input
          id="checkbox${suite.id}"
          type="checkbox"
          name="checkbox${suite.id}"
          class="checkboxSuite"
        />
        Selecionar ${suite.name}
      </label>
    </div>
  </div>`
  });
  suite.innerHTML = resumo;
};

createSuite();

suites.forEach((suite) => {
  let teste = document.getElementById(`checkbox${suite.id}`)
  teste.setAttribute('value', false);
  if (teste) {
    teste.addEventListener('change', () => {
      createResumoReserva();
      if(teste.checked){
        teste.setAttribute('value', true);
        resumoReservaItens.suitesSelecionadas.push(suite.name);
        resumoReservaItens.total += suite.price * pessoasHospedadas * diasDeDiaria ;
      } else {
        teste.setAttribute('value', false);
           resumoReservaItens.suitesSelecionadas.splice(resumoReservaItens.suitesSelecionadas.indexOf(suite.name), 1);
        resumoReservaItens.total -= suite.price * pessoasHospedadas * diasDeDiaria ;
      }
        localStorage.setItem("suitesSelecionadas", resumoReservaItens.suitesSelecionadas);
        localStorage.setItem("total", resumoReservaItens.total)
        createResumoReserva();
      })
  }
  })


Object.keys(resumoReservaItens).forEach((item) => {
  if (document.getElementById(item)){
    document.getElementById(item).setAttribute('value',localStorage.getItem(item) ? localStorage.getItem(item) : '')
    document.getElementById(item).addEventListener('change', (e) => {
      localStorage.setItem(item, e.target.value);
      createResumoReserva();
    })
  }
} )

function createResumoReserva() {
  checkInInfoLocal = localStorage.getItem("checkIn");
  checkOutInfoLocal = localStorage.getItem("checkOut");
  qtdAdultosInfoLocal = localStorage.getItem("qtdAdultos");
  qtdCriancaInfoLocal = localStorage.getItem("qtdCrianca");
  suitesSelecionadasLocal = localStorage.getItem("suitesSelecionadas");
  totalLocal = parseInt(localStorage.getItem("total"));
  diasDeDiaria = Date.parse(checkOutInfoLocal) - Date.parse(checkInInfoLocal);
  diasDeDiaria = diasDeDiaria/(1000 * 3600 * 24) -1;
  diasDeDiaria === 0 ? diasDeDiaria = 1 : diasDeDiaria;
  pessoasHospedadas = parseInt(qtdAdultosInfoLocal) + parseInt(qtdCriancaInfoLocal)*0.5;


  let resumo = ''

  resumo += `
  <h4>Apartamentos: ${suitesSelecionadasLocal ? suitesSelecionadasLocal : ''}</h4>
  <h4>Check-in: ${checkInInfoLocal ? checkInInfoLocal : ''}</h4>
  <h4>Check-out: ${checkOutInfoLocal ? checkOutInfoLocal : ''}</h4>
  <h4>Diárias: ${diasDeDiaria ? diasDeDiaria : ''} dias</h4>
  <h4>Quantidade de adultos: ${qtdAdultosInfoLocal ? qtdAdultosInfoLocal : ''}</h4>
  <h4>Quantidade de crianças: ${qtdCriancaInfoLocal ? qtdCriancaInfoLocal : ''}</h4>
  <h4>Total: R$ ${totalLocal.toFixed(2) ? totalLocal.toFixed(2) : ''}</h4>`
  
  reservaItens.innerHTML = resumo;
}


createResumoReserva();


let modal = document.getElementById('modal')

function createModal() {
  checkInInfoLocal = localStorage.getItem("checkIn");
  checkOutInfoLocal = localStorage.getItem("checkOut");
  qtdAdultosInfoLocal = localStorage.getItem("qtdAdultos");
  qtdCriancaInfoLocal = localStorage.getItem("qtdCrianca");
  suitesSelecionadasLocal = localStorage.getItem("suitesSelecionadas");
  totalLocal = parseInt(localStorage.getItem("total"));
  diasDeDiaria = Date.parse(checkOutInfoLocal) - Date.parse(checkInInfoLocal);
  diasDeDiaria = diasDeDiaria/(1000 * 3600 * 24) -1;
  diasDeDiaria === 0 ? diasDeDiaria = 1 : diasDeDiaria;
  pessoasHospedadas = parseInt(qtdAdultosInfoLocal) + parseInt(qtdCriancaInfoLocal)*0.5;

  let resumo = ''

  resumo += `
  <button id="closeButton">
    <div id="closeButtonIcon">X</div>
  </button>
  <h4>Apartamentos: ${suitesSelecionadasLocal ? suitesSelecionadasLocal : ''}</h4>
  <h4>Check-in: ${checkInInfoLocal ? checkInInfoLocal : ''}</h4>
  <h4>Check-out: ${checkOutInfoLocal ? checkOutInfoLocal : ''}</h4>
  <h4>Diárias: ${diasDeDiaria ? diasDeDiaria : ''} dias</h4>
  <h4>Quantidade de adultos: ${qtdAdultosInfoLocal ? qtdAdultosInfoLocal : ''}</h4>
  <h4>Quantidade de crianças: ${qtdCriancaInfoLocal ? qtdCriancaInfoLocal : ''}</h4>
  <h4>Total: R$ ${totalLocal.toFixed(2) ? totalLocal.toFixed(2) : ''}</h4>
  <div id="confirmButton">
    <button id="confirmButtonIcon" class="buttonReserva">Confirmar</button>
  </div>`
  
  modal.innerHTML = resumo;

  let closeButton = document.getElementById('closeButtonIcon')
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    darkBox.style.display = 'none';
  })

  let confirmButton = document.getElementById('confirmButtonIcon')

  confirmButton.addEventListener('click', () => {
    modal.style.display = 'none';
    alert('Você concluiu sua reserva! Enviaremos um email de Confirmação')
    darkBox.style.display = "none";
  })
}

let buttonReserva = document.getElementById('buttonReservaId')
let darkBox = document.querySelector(".darkBox");

buttonReserva.addEventListener('click', () => {
  modal.style.display = 'block';
  darkBox.style.display = "block";
  createModal()
})