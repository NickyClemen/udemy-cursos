package test;

import entidad.*;

public class ForEachTest {

    public static void main(String[] args) {

        int edades[] = { 15, 20, 41, 50 };

        for(int edad : edades) {

            System.out.println(edad);

        }

        Persona[] personas = { new Persona("Nicole"), new Persona("Cirilla") };

        for(Persona persona : personas) {

            String nombre = persona.getNombre();
            int id = persona.getIdPersona();
            System.out.println("ID #" + id + " " + nombre + ".");

        }

    }

}
