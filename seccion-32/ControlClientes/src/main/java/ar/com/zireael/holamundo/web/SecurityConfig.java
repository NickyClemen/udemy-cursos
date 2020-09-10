package ar.com.zireael.holamundo.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication() // Almacenar usuarios en la memoria.
            .withUser("admin")
                .password("{noop}admin") // {noop} indica que nos e debe encriptar.
                    .roles("ADMIN", "USER") // Spring agrega el "ROLE_".
            .and()
                .withUser("user")
                    .password("{noop}user")
                        .roles("USER");
    } /* Método para agregar usuarios, y personalizar los que hacen login en la app. Autenticación. */

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/editar/**", "/agregar/**", "/eliminar") // URL que se restringen.
                    .hasRole("ADMIN") // Usuarios que pueden acceder.
                .antMatchers("/")
                    .hasAnyRole("USER", "ADMIN")
                .and()
                    .formLogin()
                    .loginPage("/login")
                .and()
                    .exceptionHandling().accessDeniedPage("/errores/403");
    } /* Método para restringuir las urls de la app, en función del rol asignado. Autorización. */
}
