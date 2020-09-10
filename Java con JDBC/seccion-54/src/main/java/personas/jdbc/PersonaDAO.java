package personas.jdbc;

import java.sql.SQLException;
import java.util.List;

import personas.dto.PersonaDTO;

public interface PersonaDAO {
    List<PersonaDTO> select() throws SQLException;
    int insert(PersonaDTO personaDTO) throws SQLException;
    int update(PersonaDTO personaDTO) throws SQLException;
    int delete(PersonaDTO personaDTO) throws SQLException;
}
