/* window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded its ready!");


  const location = document.getElementById("locationInput")
  const numberOfTickets = document.getElementById("numberOfTicketsInput")
  const dataTicket = document.querySelector(".dataTicket")
  const ticketButton = document.getElementById("getTicket")
  const allInputs = document.querySelectorAll("input");

  allInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value === "") {
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });
  });

  ticketButton.addEventListener("click", (event) => {
    event.preventDefault();

    const Location = location.value;

    if (Location === "") {
      location.classList.add("no es válido");
    } else {
      location.classList.remove("no es válido")
    }

    if (Location !== "") {
      dataTicket.innerHTML =
        <div class="Location">
          <h4 id="selectLocation" class="nameLocation" > Has selecionado la localidad ${Location} </h4>
          <p id="selectNumberOfTickets"> y ${numberOfTickets} boletas.</p>
        </div>

      locationInput.value = "";

      ticketButton.classList.add("btn-success");

      setTimeout(() => {
        ticketButton.classList.remove("btn-success");
      }, 1500);
    else {
        ticketButton.classList.add("btn-danger");

        setTimeout(() => {
          ticketButton.classList.remove("btn-danger")
        }, 1500);
      }
    }
  });
}) */

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded its ready! At last!")

  const location = document.getElementById("locationInput");
  const numberOfTickets = document.getElementById("numberOfTicketsInput");
  const name = document.getElementById("nameInput");
  const email = document.getElementById("emailInput");
  const ticketButton = document.getElementById("getTicket");
  const dataTicket = document.querySelector(".dataTicket");
  const allInputs = document.querySelectorAll("input");


  allInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value === "") {
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });
  });

  ticketButton.addEventListener("click", (event) => {
    event.preventDefault();

    const location = locationInput.value;
    const numberOfTickets = numberOfTicketsInput.value;
    const name = nameInput.value;
    const email = emailInput.value;

    if (location === "") {
      locationInput.classList.add("is-invalid");
    } else {
      locationInput.classList.remove("is-invalid");
    }

    if (numberOfTickets === "") {
      numberOfTicketsInput.classList.add("is-invalid");
    } else {
      numberOfTicketsInput.classList.remove("is-invalid");
    }

    if (name === "") {
      nameInput.classList.add("is-invalid");
    } else {
      nameInput.classList.remove("is-invalid");
    }

    if (email === "") {
      emailInput.classList.add("is-invalid");
    } else { emailInput.classList.remove("is-invalid"); }

    if (location !== "" && numberOfTickets !== "" && name !== "" && email !== "") {
      Swal.fire(dataTicket.innerHTML = `Felicidades  ${name}! Has seleccionado ${numberOfTickets}  boletas en la localidad ${location}</h4 >`);


      locationInput.value = "";
      numberOfTicketsInput.value = "";
      nameInput.value = "";
      emailInput.value = "";

      ticketButton.classList.add("btn-success");

      setTimeout(() => {
        ticketButton.classList.remove("btn-success");
      }, 500);
    } else {
      ticketButton.classList.add("btn-danger");

      setTimeout(() => {
        ticketButton.classList.remove("btn-danger");
      }, 1500);
    }
  });
});