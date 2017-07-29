package com.example.chat.controller;

import com.example.chat.model.Message;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

/**
 * Created by parci on 7/29/2017.
 */
@Controller
public class ChatRoomSocketController {

    private static final Logger LOG = LoggerFactory.getLogger(ChatRoomSocketController.class);

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/{roomId}")
    public void sendMessage(@DestinationVariable Long roomId, String message) {
        LOG.debug("ChatRoomController -> postMessage - posting message " + message + " to room " + roomId);

        Message chatMessage = new Message(message);

        simpMessagingTemplate.convertAndSend("/socket/" + roomId, chatMessage);
    }

}
