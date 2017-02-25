var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", () => {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {

        pacientes.array.forEach((paciente) => {
          var tdNome = paciente.querySelector(".info-nome");
          var nome = tdNome.textContent;
          var expressao = new RegExp(this.value, "i"); // parâmetro "i" = não faz distinção entre letras maiúsculas e minúsculas

          if (!expressao.test(nome)) {
              paciente.classList.add("invisivel");
          } else {
              paciente.classList.remove("invisivel");
          }
            
        });

    } else {

        pacientes.array.forEach((paciente) => {
            paciente.classList.remove("invisivel");
        });
        
    }


});
