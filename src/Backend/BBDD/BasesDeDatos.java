package Backend.BBDD;

import java.sql.*;

public class BasesDeDatos {
    public static void main(String[] args) throws SQLException {
    String url = "jdbc:mysql://localhost:3306/cine_prueba";
    String user = "root";
    String pass = "admin";

    String sqlSelect = "SELECT * FROM peliculas";

    System.out.println("Conectado a la BBDD");

    Connection con = DriverManager.getConnection(url, user, pass);
    PreparedStatement pst = con.prepareStatement(sqlSelect);
    ResultSet rs = pst.executeQuery();

    // Iterar sobre ResultSet y mostrar los resultados
    while (rs.next()) {
        int id = rs.getInt("id");
        String titulo = rs.getString("titulo");
        String genero = rs.getString("genero");
        int duracion = rs.getInt("duracion");

        System.out.println("ID: " + id + ", Título: " + titulo + ", Genero: " + genero + ", Duración: " + duracion);
    }

    // TODO: Hacer un menú a través del cual hagamos un CRUD



    }
}