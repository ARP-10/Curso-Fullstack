package backend.lenguaje.poo.coche;

public class Principal {
    public static void main(String[] args) {
        Coche coche1 = new Coche("Skoda", "Octavia RS", 2008);
        System.out.println(coche1.arrancarCoche());
        System.out.println(coche1.apagarCoche());
    }
}
