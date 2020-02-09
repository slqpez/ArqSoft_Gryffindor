package com.slqpez.operation;

import com.slqpez.model.Resta;
import com.slqpez.model.Suma;

public interface IOpertion {
    int sumar(Suma s);
    int restar(Resta r);
    void mostrarSuma(int rs);
    void mostrarResta(int rr);

}
