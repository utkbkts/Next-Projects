import EventBox from "./EventBox.jsx"
import SectionHeader from "./SectionHeader.jsx";
const getevents = async () => {
  const res = await fetch("http://localhost:4000/events");

  return res.json();
};

const Events = async () => {
  const events = await getevents();
  return (
    <div className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle={"World Tour"} title={"Up Coming"}/>
        <EventBox events={events}/>
      </div>
    </div>
  );
};

export default Events;
