package com.slqpez.pandf;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 *
 * @author Santiago López
 */
public class Escritura {

    public FileOutputStream leerYEscribir(FileInputStream leer) throws FileNotFoundException, IOException {
        int char1;
        FileOutputStream escribir;

        //creamos los objetos de E/S
        escribir = new FileOutputStream("segundo.txt");

        char1 = leer.read();

        while (char1 != -1) {
            escribir.write(char1);
            char1 = leer.read();
        }

        leer.close();
        escribir.close();
        return escribir;
    }
}
