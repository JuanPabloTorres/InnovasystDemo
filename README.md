Para propósitos de entrevista para la compañía Innovasyst. Se creó un proyecto demo en Angular que realiza las operaciones CRUD el cual utiliza como backend el endpoint “https://gorest.co.in/public/v2/users”. El mismo se colocó en un manejador de versión Git. La aplicación consta de las siguientes vistas:Login,New User ,Edit User y User List.

Para la pantalla “Login” sé creo una validación forzada que utiliza como credenciales “Username:user1” y “Password:123”. El mismo consta con algunas validaciones tales como verificar el valor de los campos y si las credenciales son válidas.

Para la pantalla “New User” se creó una forma que contiene los campos Name,Email y Gender. Estos campos deben estar llenos para poder someter la forma. La misma lógica se aplica para la pantalla “Edit User”.

Del usuario haberse autenticado de manera correcta, este navegará para la pantalla “User List”. El cual descargara 10 usuarios del api “https://gorest.co.in/public/v2/users” en una tabla que tiene como control de usuarios los botones “Delete” y “Edit”.

Al usuario presionar “Delete” este enviará un API call el cual borrara el usuario con el ID seleccionado.

Git URL:https://github.com/JuanPabloTorres/InnovasystDemo Branch:master
