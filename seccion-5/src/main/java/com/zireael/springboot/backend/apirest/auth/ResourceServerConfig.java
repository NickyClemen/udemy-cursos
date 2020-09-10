package com.zireael.springboot.backend.apirest.auth;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {
    // Implementar las reglas de seguridad.
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers(HttpMethod.GET, "/api/clientes", "/api/clientes/page/**", "/api/uploads/img/**")
                .permitAll()
            /*.antMatchers(HttpMethod.GET, "/api/clientes/{id}")
                .hasAnyRole("USER", "ADMIN")
            .antMatchers(HttpMethod.POST, "/api/clientes/upload")
                .hasAnyRole("USER", "ADMIN")
            .antMatchers(HttpMethod.POST, "/api/clientes")
                .hasRole("ADMIN")
            .antMatchers("/api/clientes/**")
                .hasRole("ADMIN")*/
            .anyRequest().authenticated()
            .and()
            .cors().configurationSource(corsConfigurationSource());
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        // Permitir el dominio.
        config.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        // Permitir los métodos.
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        // Permitir contraseñas.
        config.setAllowCredentials(true);
        // Headers.
        config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));

        // Registrar los CORS.
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }

    // Filtro en la prioridad más alta.
    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<CorsFilter>(new CorsFilter(corsConfigurationSource()));
        // Entre más bajo el orden, mayor es la prioridad.
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);

        return bean;
    }
}
