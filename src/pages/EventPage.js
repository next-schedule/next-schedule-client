import axios from "axios";
import { useEffect, useState } from "react";

function EventPage() {
  const API_URL = process.env.REACT_APP_SERVER_URL;
  const [events, setEvents] = useState([]);
  const storedToken = localStorage.getItem("authToken")

  useEffect(() => {
    const fetchEvents = () => {
      axios.get(`${API_URL}/api/events`, {headers: {Authorization: `Bearer ${storedToken}`}})
        .then(eventList => {
          setEvents(eventList.data)
          console.log(eventList.data)
        })
        .catch(error => {
          console.log("error fetching events", error)
        })
    };

    fetchEvents();
  }, [])

  // console.log(events.map(element => element.title))
  
  return(
    <div>
      {events.map(element =>
        <div key={element._id}> 
          <h1>{element.title}</h1>
        </div>
      ) }
    </div>
  );
};

export default EventPage;