package com.example.chat.controller;

import com.example.chat.model.Room;
import com.example.chat.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

}
