package ar.com.zireael.holamundo.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import java.util.Locale;

@Configuration // Se agrega a la configuración de Spring.
public class WebConfig implements WebMvcConfigurer {
    /* Para trabajar la internacionalización, hay que crear un listener. */
    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver slr = new SessionLocaleResolver();
        slr.setDefaultLocale(new Locale("es")); // Se especifica el idioma por default.
        return slr;
    }

    // Interceptor paea cambiar idioma de manera dinámica.
    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor() {
        // Se define parámetro para cambiar de idioma.
        LocaleChangeInterceptor lci = new LocaleChangeInterceptor();
        lci.setParamName("lang");
        return lci;
    }

    @Override
    public void addInterceptors(InterceptorRegistry register) {
        register.addInterceptor(localeChangeInterceptor());
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/login"); // Se mapean paths que no pasan por controlador.
        registry.addViewController("/errores/403").setViewName("/errores/403");
    }// Agregar un path por default.
}
