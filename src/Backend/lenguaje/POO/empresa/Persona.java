package backend.lenguaje.poo.empresa;

public class Persona {
    // Atributos
    private String nombre;
    private int edad;

    // Constructor
    public Persona (String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Getter y Setter
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    // Metodo para imprimir los atributos
    @Override
    public String toString() {
        return "Nombre: " + nombre + " ,Edad: " + edad;
    }
}
