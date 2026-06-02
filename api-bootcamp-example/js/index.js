const attendeesContainerElem = document.querySelector("#attendees");

async function getAttendees() {
  const response = await fetch(
    "https://majazocom.github.io/Data/attendees.json",
  );
  const attendees = await response.json();
  console.log(attendees);

  for (let i = 0; i < attendees.length; i++) {
    console.log(attendees[i]);

    if (attendees[i].attending == true && attendees[i].allergies.length > 0) {
      const attendeeElem = document.createElement("p");
      attendeeElem.textContent = attendees[i].name;
      console.log(attendeeElem);

      attendeesContainerElem.appendChild(attendeeElem);
    }
  }
}

getAttendees();
