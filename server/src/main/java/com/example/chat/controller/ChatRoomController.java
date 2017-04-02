package com.example.chat.controller;

import com.example.chat.model.Message;
import com.example.chat.model.Room;
import com.example.chat.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by vlad on 3/13/2017.
 */
@RestController
@RequestMapping(value = "rest/v1/rooms")
public class ChatRoomController {

    private static final Logger LOG = LoggerFactory.getLogger(ChatRoomController.class);

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private RoomService roomService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Room> getRooms() {
        return roomService.getAllRooms();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Room createRoom(@RequestBody Room room) {
        return roomService.createRoom(room);
    }

    @RequestMapping(method = RequestMethod.POST, value = "{roomId}")
    public void postMessage(@RequestBody String message, @PathVariable Long roomId) {

        LOG.debug("ChatRoomController -> postMessage - posting message " + message + " to room " + roomId);

        Message chatMessage = new Message(message);
        simpMessagingTemplate.convertAndSend("/socket/" + roomId, chatMessage);
    }
}
