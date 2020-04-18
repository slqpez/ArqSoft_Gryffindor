package co.edu.udea.microserviciosudearegistration.api;


import co.edu.udea.microserviciosudearegistration.dto.Entidad;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ResponseBody
public class ContactApi {

    @GetMapping(value = "/contacto")
    public String contacto() throws JsonProcessingException, JsonProcessingException {
        Entidad contact;
        contact = new Entidad();
        contact.setId(1037663148);
        contact.setFirstName("Alejandro");
        contact.setLastName("Muñoz Acevedo");
        contact.setPhoneNumber("+57 320 542 9746");
        contact.setEmail("alejandro.munoza@udea.edu.co");
        ObjectMapper mapper = new ObjectMapper();
        String Json = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(contact);
        return Json;
    }

}
