// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

// Función para agregar un amigo
function addFriend() {
    //Obtener el nombre del amigo
    let friend = document.getElementById('amigo');
    let friendName = friend.value.trim();

    //Validar que el nombre no esté vacío
    if (friendName === ""){
        alert("Por favor, inserte un nombre");
        return;
    }

    //Validar que el nombre contenga solo letras y espacios y no números
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(friendName)){
        alert("Por favor, inserte un nombre válido");
        return;
    }

    //Agregar el nombre a la lista
    friends.push(friendName);

    //Actualizar la lista de amigos y que pueda ser visible
    updateFriendList();

    //Limpiar el campo de texto(input)
    friend.value = "";
}

// Función para actualizar la lista de amigos
function updateFriendList(){
    let friendList = document.getElementById('friendsList');

    //Limpiar la lista
    friendList.innerHTML = "";

    //Iterar sobre la lista de amigos y agregarlos a la lista
    for (let i = 0; i < friends.length; i++){
        let friend = friends[i];
        let listItem = `<li class="friend-item">${friend}</li>`;
        friendList.innerHTML += listItem;
    }

}