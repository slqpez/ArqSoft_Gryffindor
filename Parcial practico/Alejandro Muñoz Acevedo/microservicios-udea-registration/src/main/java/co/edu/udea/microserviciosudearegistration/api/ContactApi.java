package co.edu.udea.microserviciosudearegistration.api;


import co.edu.udea.microserviciosudearegistration.dto.Entidad;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ResponseBody
public class ContactApi {

    @GetMapping (value="/contacto")
    public Object contacto(){
        Entidad contact = new Entidad(1037663148, "Alejandro", "Muñoz Acevedo", "+57 320 542 9746", "alejandro.munoza@udea.edu.co");
        return  contact;
    }

}
