package backend.lenguaje.poo.estudiante;

public class Estudiante {
    // Atributos
    private String nombre;
    private double nota;

    // Constructor
    public Estudiante(String nombre, double nota){
        this.nombre = nombre;
        this.nota = nota;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre + " ,Nota: " + nota;
    }
}
