package com.example.chat.model;

import java.io.Serializable;

/**
 * Created by vlad on 3/14/2017.
 */
public class Message implements Serializable {

    private String message;

    public Message() {

    }

    public Message(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
