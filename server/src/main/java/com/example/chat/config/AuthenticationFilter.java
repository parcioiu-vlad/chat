package com.example.chat.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.cert.CertificateException;
import java.text.ParseException;

/**
 * Created by parci on 7/16/2017.
 */
public class AuthenticationFilter extends OncePerRequestFilter {

    private static final Logger LOG = LoggerFactory.getLogger(AuthenticationFilter.class);

    private TokenProvider tokenProvider;

    private final String authHeaderName = "token";

    public AuthenticationFilter(TokenProvider tokenProvider) {

        this.tokenProvider = tokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String jwt = this.resolveToken(request);
        if (StringUtils.hasText(jwt)) {
            try {
                if (this.tokenProvider.validateToken(jwt)) {
                    Authentication authentication = this.tokenProvider.getAuthentication(jwt);
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            } catch (ParseException | IllegalArgumentException | IOException | CertificateException e) {
                LOG.error("AuthenticationFilter -> doFilterInternal()", e);
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            }
        }
        else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }
        filterChain.doFilter(request, response);
    }


    private String resolveToken(HttpServletRequest request) {

        String bearerToken = request.getHeader(authHeaderName);

        if (StringUtils.isEmpty(bearerToken)) {
            bearerToken = request.getParameter(authHeaderName);
        }

        return bearerToken;
    }
}
