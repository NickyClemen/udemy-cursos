package jdbc.domain;

public class Usuario {
    private int idUsuario;
    private String username;
    private String password;

    public int getIdUsuario() {
        return this.idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "idUsuario=" + this.idUsuario +
                ", usuario='" + this.username + '\'' +
                ", password='" + this.password + '\'' +
                '}';
    }
}
