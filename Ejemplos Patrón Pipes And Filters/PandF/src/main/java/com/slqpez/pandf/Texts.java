package com.slqpez.pandf;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Texts {
     public static void main(String[] args) throws FileNotFoundException, IOException  {
        FileInputStream leer = new FileInputStream("primero.txt");
        Escritura es = new Escritura();
        es.leerYEscribir(leer);
        
         
    }
     
}