package com.zireael.springboot.backend.apirest.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableGlobalMethodSecurity(securedEnabled = true) // Configuración de seguridad global.
@Configuration
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {
    // AuthorizationServerConfigurerAdpater está deprecated.
    @Autowired
    private UserDetailsService usuarioService;

    @Bean /* Notación para registrar los métodos retornados, y poder utilizarlos en otras partes.
    Muy parecida a @Component para las clases. */
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    @Autowired
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(this.usuarioService).passwordEncoder(passwordEncoder());
        // passwordEncoder: Métodos de Spring para encriptar contraseñas.
    }

    @Override
    @Bean
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest()
                .authenticated()
        .and()
                .csrf().disable() /* Deshabilitar CSRF (Cross-site request forgery): Falsificación de petición de sitios cruzados.
                Proteger el formulario. */
                // Deshabilitar la autencicación del lado de Spring. Lo deja en Stateless.
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
