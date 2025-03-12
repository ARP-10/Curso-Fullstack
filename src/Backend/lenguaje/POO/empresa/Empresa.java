package backend.lenguaje.poo.empresa;

import java.util.ArrayList;
import java.util.List;

public class Empresa {
    // Atributos
    private List<Empleado> empleados;

    // Constructor
    public Empresa() {
        this.empleados = new ArrayList<>();
    }

    public void agregarEmpleado(Empleado empleado) {
        empleados.add(empleado);
    }

    public void mostrarEmpleados() {
        for (Empleado emp: empleados) {
            System.out.println(emp.toString());
        }
    }
}
