package com.example.chat.service;

import com.example.chat.model.Room;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by vlad on 4/2/2017.
 */
@Service
public class RoomService {

    private static final Logger LOG = LoggerFactory.getLogger(RoomService.class);

    /**
     * Mock room number counter
     * TODO remove this
     */
    private static long roomId = 0;

    /**
     * Mock room list
     */
    private static List<Room> roomList = new ArrayList<>();

    public List<Room> getAllRooms() {
        return roomList;
    }

    public Room createRoom(Room room) {
        //TODO remove mock, add real implementation

        LOG.debug("RoomService -> createRoom - creating room " + room.toString());

        room.setId(roomId++);
        roomList.add(room);

        LOG.debug("RoomService -> createRoom - room created " + room.toString());

        return room;
    }

}
