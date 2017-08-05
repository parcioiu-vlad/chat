package com.example.chat.config;

import com.nimbusds.jwt.SignedJWT;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.security.PublicKey;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by parci on 7/16/2017.
 */
@Service
public class TokenProvider {

    public boolean validateToken(String authToken) throws IllegalArgumentException, IOException, CertificateException, ParseException {

        File file = new ClassPathResource("cert").getFile();
        CertificateFactory f = CertificateFactory.getInstance("X.509");
        X509Certificate certificate = (X509Certificate)f.generateCertificate(new FileInputStream(file));
        PublicKey pk = certificate.getPublicKey();
        //TODO download cert from https://www.googleapis.com/oauth2/v1/certs and validate the token
        //TODO put downloaded certificate into cache

        SignedJWT signedJWT;

        signedJWT = SignedJWT.parse(authToken);
        signedJWT.getHeader().getKeyID();


        return true;
    }

    public Authentication getAuthentication(String token) {

        Collection<? extends GrantedAuthority> authorities = new ArrayList<>();

        User principal = new User("test", "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, "", null);
    }

}
