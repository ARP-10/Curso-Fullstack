package backend.lenguaje.poo.coche;

public class Coche {
    // Atributos
    private String marca;
    private String modelo;
    private int anio;

    // Constructor
    public Coche (String marca, String modelo, int anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    // Getters Setters
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getAnio() {
        return anio;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    // Metodos
    public String arrancarCoche () {
        return "El coche " + getMarca() + " ," + getModelo() + " está arrancado";
    }

    public String apagarCoche() {
        return "El coche " + getMarca() + " ," + getModelo() + " está apagado";
    }
}
