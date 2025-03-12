package backend.lenguaje.poo.empresa;

public class Principal {
    public static void main(String[] args) {
        Persona persona1 = new Persona("Alejandra", 27);
        Empleado empleado1 = new Empleado("Benja", 30, 5000);
        Empleado empleado2 = new Empleado("Javi", 40, 4000);
        Empresa empresa = new Empresa();

       empresa.agregarEmpleado(empleado1);
       empresa.agregarEmpleado(empleado2);


        System.out.println(persona1);
        System.out.println(persona1.getEdad());
        persona1.setEdad(35);
        System.out.println(persona1);

        System.out.println(empleado1);

        empresa.mostrarEmpleados();
    }
}
