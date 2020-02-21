
package com.slqpez.operation;

import com.slqpez.model.Resta;
import com.slqpez.model.Suma;

public class MotorCalculo implements IOpertion{

    @Override
    public int sumar(Suma s) {
       return (s.getA() + s.getB());
    }

    @Override
    public int restar(Resta r) {
        return (r.getMinuendo() - r.getSustraendo());
    }

    @Override
    public void mostrarSuma(int rs) {
        System.out.println("El resultado de la suma es: " + rs);
    }

    @Override
    public void mostrarResta(int rr) {
        System.out.println("El resultado de la resta es: " + rr);
    }
    
    
}
