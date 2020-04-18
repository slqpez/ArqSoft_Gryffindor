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
        Entidad contact = new Entidad(10L, "Robin", "CGarcia", "+57 310 891 71 02", "robin.corona@gmail.com");
        return  contact;
    }

}
