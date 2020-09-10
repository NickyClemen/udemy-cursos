package com.zireael.springboot.backend.apirest.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenEnhancerChain;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;

import java.util.Arrays;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    @Qualifier("authenticationManager") // Especifica el Bean que se quiera inyectar.
    private AuthenticationManager authenticationManager;

    @Autowired
    private InfoAdicionalToken infoAdicionalToken;

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        // Permisos de los endpoints de la aplicación.
        security.tokenKeyAccess("permiteAll()") // permiteAll() le da permiso a todos.
        // Permiso al endpoint que se encarga de validar el token.
            .checkTokenAccess("isAuthenticated()"); /* Enpoint: /oauth/check_token. isAuthenticated() solamente usuarios
            autenticados. */
        /* Están protegidos vía autenticación Http Basic (Header Authetication Basic: Client id + Client Secret).
        El token se envía en Bearer. */

    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        // Tipo de almanenamiento.
        clients.inMemory()
                .withClient("angularapp")
                // Contraseña.
                .secret(passwordEncoder.encode("Ciren2020"))
                // El scope/alcance.
                .scopes("read", "write")
                // Cómo obtener el token.
                .authorizedGrantTypes("password", "refresh_token")
                // Validez.
                .accessTokenValiditySeconds(3600)
                // Tiempo de expiración del refresh_token
                .refreshTokenValiditySeconds(3600);
                /* password es cuando se ingresa con credenciales (intercambio mediante login de usuario).
                AuthorizationCode: No es para autenticar con contraseña, sino que es un código que entrega
                el backend (redireccionamiento para obtener token de acceso vía URL).
                Implicit: Es mucho más débil. Se envía solamente el id del cliente, el password y con eso se hace el
                redireccionamiento. Se utiliza para aplicaciones públicas.
                refresh_token: Permite obtener un token de acceso renovado/actualizado. Permite continuar accediendo
                sin tener que volver a iniciar sesión. */
    } // Registrar el front end. Doble autenticación: El cliente front end, y el usuario que inicia sesión.

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        // Enlazar información adicional,
        TokenEnhancerChain tokenEnhancerChain = new TokenEnhancerChain();
        tokenEnhancerChain.setTokenEnhancers(Arrays.asList(infoAdicionalToken, accessTokenConverter()));

        endpoints.authenticationManager(authenticationManager)
                // .tokenStore(tokenStore()) Esto es opcional. Ya lo hace el componente de manera implícita.
                .accessTokenConverter(accessTokenConverter())
                /* Está encargado de todo lo relacionado al JWT. Almacena los datos del usuario y todo la información
                extra (claims). Traduce los datos codiificados para la validación. Lo usa por debajo, JWTTokenStorage:
                Se encarga de crear el JWT, eliminarlo, buscar el token asociado (persistencia del token).
                También trabaja con un token de instancia. */
                .tokenEnhancer(tokenEnhancerChain);
    } /* Se encarga de todo el proceso de auntenticación y de validar el token. También hace el proceso de validación. */

    /*@Bean
    public TokenStore tokenStore() {
        return new new JwtTokenStore(accessTokenConverter());
    }*/

    @Bean
    public JwtAccessTokenConverter accessTokenConverter() {
        JwtAccessTokenConverter jwtAccessTokenConverter = new JwtAccessTokenConverter();
        jwtAccessTokenConverter.setSigningKey(JwtConfig.RSA_PRIVADA);
        jwtAccessTokenConverter.setVerifierKey(JwtConfig.RSA_PUBLICA);

        return jwtAccessTokenConverter;
    }
}
