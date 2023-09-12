
document.getElementById("user-form").addEventListener("submit",function(e) {
    const names = document.getElementById("input-name").value;
    const secondName = document.getElementById("input-secName").value;
    const date = document.getElementById("input-date").value;

    let usuario = {
        nombre: names,
        apellido: secondName,
        nacimiento: date
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usuario})
    })

        .then(resp => resp.json())
        .then(userForm => {
    
        console.log(userForm)
       })
       .catch(error => {
        console.error('Error:', error);
        });
        e.preventDefault();
    })
   
