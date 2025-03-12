package backend.lenguaje.poo.empresa;

public class Empleado extends Persona {
    // Atributos
    private double salario;

    public Empleado (String nombre, int edad, double salario) {
        super(nombre, edad);
        this.salario = salario;
    }

    //Getter Setter
    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String toString() {
        return "Nombre: " + getNombre() + " ,Edad: " + getEdad() + " ,Salario: " + salario;
    }
}
