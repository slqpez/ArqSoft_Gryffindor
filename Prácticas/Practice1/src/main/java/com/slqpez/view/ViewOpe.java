package com.slqpez.view;

import com.slqpez.model.Resta;
import com.slqpez.model.Suma;
import com.slqpez.operation.MotorCalculo;
import java.util.Scanner;

public class ViewOpe {

    Scanner n = new Scanner(System.in);
    MotorCalculo p = new MotorCalculo();
    Suma s = new Suma();
    Resta r = new Resta();

    public void processDates() {
        System.out.println("Ingrese la pareja de números que desee sumar y restar a la vez.");
        System.out.print("Ingrese el primer número: ");
        s.setA(Integer.parseInt(n.nextLine()));
        r.setMinuendo(s.getA());
        System.out.println("");
        System.out.print("Ingrese el segundo número: ");
        s.setB(Integer.parseInt(n.nextLine()));
        r.setSustraendo((s.getB()));
        int rs = p.sumar(s);
        int rr = p.restar(r);
        p.mostrarSuma(rs);
        p.mostrarResta(rr);
    }

//    public void anotherProcess()  {
//        System.out.println("Ingrese ´1´ si desea sumar, o ´2´ si desea restar: ");
//        char choise = n.nextLine().charAt(0);
//        if (choise == '1') {
//            System.out.println("Ingrese la pareja de números que desee sumar.");
//            System.out.print("Ingrese el primer número: ");
//            s.setA(Integer.parseInt(n.nextLine()));
//            System.out.print("");
//            System.out.print("Ingrese el segundo número: ");
//            s.setB(Integer.parseInt(n.nextLine()));
//            int rs = p.sumar(s);
//            p.mostrarSuma(rs);
//        } else if (choise == '2') {
//            System.out.println("Ingrese la pareja de números que desee restar.");
//            System.out.print("Ingrese el primer número: ");
//            r.setMinuendo(Integer.parseInt(n.nextLine()));
//            System.out.print("");
//            System.out.print("Ingrese el segundo número: ");
//            r.setSustraendo(Integer.parseInt(n.nextLine()));
//            int rr = p.restar(r);
//            p.mostrarResta(rr);
//        }
//    }
}
