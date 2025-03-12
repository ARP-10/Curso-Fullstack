package backend.lenguaje.poo.estudiante;

import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {
        Estudiante est1 = new Estudiante("Javier", 5.5);
        Estudiante est2 = new Estudiante("Pedro", 8);
        Estudiante est3 = new Estudiante("María", 3.2);
        Estudiante est4 = new Estudiante("Marta", 7);

        ArrayList<Estudiante> notas = new ArrayList<>();
        notas.add(est1);
        notas.add(est2);
        notas.add(est3);
        notas.add(est4);

        System.out.println(notas);

        for (Estudiante estudiante : notas) {
            if (estudiante.getNota() > 7) {
                System.out.println(estudiante.getNombre());
            }
        }
    }

}
