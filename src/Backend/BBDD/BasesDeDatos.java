package Backend.BBDD;

import java.sql.*;

public class BasesDeDatos {
    public static void main(String[] args) throws SQLException {
    String url = "jdbc:mysql://localhost:3306/cine_prueba";
    String user = "root";
    String pass = "admin";

    Scanner sc = new Scanner(System.in);

    System.out.println("Conectado a la BBDD");

    Connection con = DriverManager.getConnection(url, user, pass);

    // TODO: Hacer un menú a través del cual hagamos un CRUD
    while(true) {
        System.out.println("Escoge una opcion");
        int opcion = sc.nextInt();
        sc.nextLine();

        System.out.println("1. Listar la tabla peliculas");
        System.out.println("2. Actualizar una fila");
        System.out.println("3. Crear una fila");
        System.out.println("4. Eliminar una fila");
        System.out.println("5. Salir")


        switch(opcion) {
            case 1:
                // Listar
                String sqlSelect = "SELECT * FROM peliculas";
                PreparedStatement pst = con.prepareStatement(sqlSelect);
                ResultSet rs = pst.executeQuery();

                while (rs.next()) {
                    int id = rs.getInt("id");
                    String titulo = rs.getString("titulo");
                    String genero = rs.getString("genero");
                    int duracion = rs.getInt("duracion");

                    System.out.println("ID: " + id + ", Título: " + titulo + ", Genero: " + genero + ", Duración: " + duracion);
                }
                break;

            case 2: 
                // Actualizar
                System.out.println("Introduce el ID de la pelicula a actualizar: ");
                int idActualizar = sc.nextInt();
                sc.nextLine();
                System.out.println("Introduce el titulo: ");
                String nuevoTitulo - sc.nextLine();
                String sqlUpdate = "UPDATE peliculas SET titulo =? WHERE id =?";
                PreparedStatement pst2 = con.prepareStatement(sqlUpdate);
                pst2.setString(1, nuevoTitulo);
                pst2.setInt(2, idActualizar);
                pst2.executeUpdate();
                System.out.println("Pelicula actualizada correctamente");                
                break;

            case 3: 
                // Crear
                System.out.println("Introduce el título de la nueva película:");
                String titulo = sc.nextLine();
                System.out.println("Introduce el género:");
                String genero = sc.nextLine();
                System.out.println("Introduce la duración:");
                int duracion = sc.nextInt();
                String sqlInsert = "INSERT INTO peliculas (titulo, genero, duracion) VALUES (?, ?, ?)";
                PreparedStatement pst3 = con.prepareStatement(sqlInsert);
                pst3.setString(1, titulo);
                pst3.setString(2, genero);
                pst3.setInt(3, duracion);
                pst3.executeUpdate();
                System.out.println("Película creada correctamente.");                    
                break;

            case 4: 
            // Eliminar
                System.out.println("Introduce el ID de la película a eliminar:");
                int idEliminar = sc.nextInt();
                String sqlDelete = "DELETE FROM peliculas WHERE id = ?";
                PreparedStatement pst4 = con.prepareStatement(sqlDelete);
                pst4.setInt(1, idEliminar);
                pst4.executeUpdate();
                System.out.println("Película eliminada correctamente.");                    
                break;

            case 5: 
                // Salir
                System.out.println("Saliendo del programa...");
                // Cerrar recursos
                rs.close();
                pst.close();
                con.close();
                sc.close();
                break;

            default:
                System.out.println("Opcion no valida");
        }
    }

    // Cerrar recursos
    rs.close();
    pst.close();
    con.close();

    }
}