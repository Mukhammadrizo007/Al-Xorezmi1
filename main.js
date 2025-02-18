let secret = "783";

function sirliSoz() {
  let input = document.getElementById("dr").value;
  let message = document.getElementById("message");

  if (input === secret) {
    message.textContent = "You won!😁";
    document.body.style.backgroundColor = "green";
  } else {
    message.textContent = "You could not find!🙃";
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
      message.textContent = "";
      document.body.style.backgroundColor = "orange";
    }, 1000);
  }
}

let secret1 = "Книга";

function sirliSoz1() {
  let input = document.getElementById("dr1").value;
  let message = document.getElementById("message1");

  if (input === secret1) {
    message.textContent = "You won!😁";
    document.body.style.backgroundColor = "green";
  } else {
    message.textContent = "You could not find!🙃";
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
      message.textContent = "";
      document.body.style.backgroundColor = "orange";
    }, 1000);
  }
}

let secret0 = "Алгебры";

function sirliSoz0() {
  let input = document.getElementById("dr0").value;
  let message = document.getElementById("message1");

  if (input === secret0) {
    message.textContent = "You won!😁";
    document.body.style.backgroundColor = "green";
  } else {
    message.textContent = "You could not find!🙃";
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
      message.textContent = "";
      document.body.style.backgroundColor = "orange";
    }, 1000);
  }
}

let secret2 = "16";

function sirliSoz2() {
  let input = document.getElementById("dr2").value;
  let message = document.getElementById("message1");

  if (input === secret2) {
    message.textContent = "You won!😁";
    document.body.style.backgroundColor = "green";
  } else {
    message.textContent = "You could not find!🙃";
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
      message.textContent = "";
      document.body.style.backgroundColor = "orange";
    }, 1000);
  }
}
