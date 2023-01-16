Para propósitos de entrevista para la compañía Innovasyst. Se creó un proyecto demo en Angular que realiza las operaciones CRUD el cual utiliza como backend el endpoint “https://gorest.co.in/public/v2/users”. El mismo se colocó en un manejador de versión Git. La aplicación consta de las siguientes vistas:Login,New User ,Edit User y User List.

1.Para la pantalla “Login” sé creo una validación forzada que utiliza como credenciales “Username:user1” y “Password:123”. El mismo consta con algunas validaciones tales como verificar el valor de los campos y si las credenciales son válidas.

2.Para la pantalla “New User” se creó una forma que contiene los campos Name,Email y Gender. Estos campos deben estar llenos para poder someter la forma. La misma lógica se aplica para la pantalla “Edit User”.

3.Del usuario haberse autenticado de manera correcta, este navegará para la pantalla “User List”. El cual descargara 10 usuarios del api “https://gorest.co.in/public/v2/users” en una tabla que tiene como control de usuarios los botones “Delete” , “Edit” y "New User".

4.Al usuario presionar “Delete” este enviará un API call el cual borrara el usuario con el ID seleccionado.

5.Para poner el proyecto bajo un control de version se utilizo el terminal para crear las configuraciones necesarias para agregar el proyecto a github como repositorio privado.Para este se descargo las version de .git para Windows.Una vez descargado fui a mi proyecto y realizar un .git init con el proposito de crear los archivos iniciales para la configuracion del proyecto en git.Una vez culminado este paso se creo un Commit para que los cambios realizados sean insertados en el push que se realizara al final para asi insertar los cambios al respositorio remoto.

Git URL:https://github.com/JuanPabloTorres/InnovasystDemo Branch:NewUserBtn

Para el hosting se utilizo firebase.
Hosting Url:https://innovasyst-demo.web.app/Login
