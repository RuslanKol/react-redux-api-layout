import React, { useState, useRef, useEffect } from "react";
import DateSquare from "../../components/DateSquare";
import TimeSquare from "../../components/TimeSquare";

import { ReactComponent as CloseImg } from "../../images/delete-button.svg";
import { ReactComponent as SideArrow } from "../../images/side-arrow.svg";

const ScheduleDeliveryModal = props => {
  const moment = require("moment");
  moment().format();

  let [schedulePickup, setSchedulePickup] = useState(null);
  let [scheduleDelivery, setScheduleDelivery] = useState(null);

  let newDays = [];
  for (let i = 0; i < 30; i++) {
    newDays.push({
      id: i,
      date: moment().add(i, "days")
    });
  }
  let [days, setDays] = useState(newDays);
  let [selectedDate, setSelectedDate] = useState(days[0]);

  let time = moment();
  time.add(0, "hours");
  time.minute(0);
  let newTimes = [];
  for (let i = 0, minutes = 0; i < 96; i++) {
    newTimes.push({
      id: i,
      start: moment(time.add(minutes, "minutes")),
      end: moment(time.add(minutes + 15, "minutes"))
    });
  }

  let [times, setTimes] = useState(newTimes);
  let [selectedTime, setSelectedTime] = useState(times[0]);

  useEffect(() => {
    if (scheduleDelivery && schedulePickup) {
      console.log(`schedulePickup: ${schedulePickup}`);
      console.log(`scheduleDelivery: ${scheduleDelivery}`);
      props.close();
    }
  }, [schedulePickup, scheduleDelivery, props]);

  const scrollDate = useRef(null);
  const scrollTime = useRef(null);

  const scrollDateRight = e => {
    e.preventDefault();
    scrollDate.current.scrollLeft = scrollDate.current.scrollLeft + 270;
  };
  const scrollDateLeft = e => {
    e.preventDefault();
    scrollDate.current.scrollLeft = scrollDate.current.scrollLeft - 270;
  };

  const scrollTimeRight = e => {
    e.preventDefault();
    scrollTime.current.scrollLeft = scrollTime.current.scrollLeft + 270;
  };
  const scrollTimeLeft = e => {
    e.preventDefault();
    scrollTime.current.scrollLeft = scrollTime.current.scrollLeft - 270;
  };

  return (
    <div className="black-modal">
      <div className="schedule-delivery">
        <div className="schedule-delivery-modal__close" onClick={props.close}>
          <CloseImg />
        </div>
        <div className="schedule-delivery-modal">
        <div className="schedule-delivery-modal__container">
          {!scheduleDelivery ?
          <span className="schedule-delivery-modal__container_title">
            Schedule Pickup
          </span>
          :
          <span className="schedule-delivery-modal__container_title">
            Schedule Delivery
          </span>
          }
          <div className="schedule-delivery-modal__container_body">
            <div className="schedule-delivery-modal__container_body_block">
              <span className="schedule-delivery-modal__container_body_block_title">
                Choosen Slot
              </span>
              <span className="schedule-delivery-modal__container_body_block_selected-date">
                {`${selectedDate.date.format(
                  "dddd, MMM D"
                )} at ${selectedTime.start.format(
                  "H:mm A"
                )} - ${selectedTime.end.format("H:mm A")}`}
              </span>
            </div>
            <div className="schedule-delivery-modal__container_body_block">
              <span className="schedule-delivery-modal__container_body_block_title">
                Pick a Date
              </span>
              <div className="schedule-delivery-modal__container_body_block_asdasd">
                <SideArrow
                  className="date-arrow-left"
                  onClick={e => scrollDateLeft(e)}
                />
                <div
                  className="schedule-delivery-modal__container_body_block_date-block"
                  ref={scrollDate}
                >
                  {days.map(day => {
                    return (
                      <DateSquare
                        key={day.id}
                        active={day.id === selectedDate.id}
                        date={day}
                        month={day.date.format("MMM")}
                        day={day.date.format("D")}
                        dayOfWeek={day.date.format("ddd")}
                        select={setSelectedDate}
                      />
                    );
                  })}
                </div>
                <SideArrow
                  className="date-arrow-right"
                  onClick={e => scrollDateRight(e)}
                />
              </div>
            </div>
            <div className="schedule-delivery-modal__container_body_block">
              <span className="schedule-delivery-modal__container_body_block_title">
                Pick a slot
              </span>
              <div className="schedule-delivery-modal__container_body_block_asdasd">
                <SideArrow
                  className="date-arrow-left"
                  onClick={e => scrollTimeLeft(e)}
                />
                <div
                  className="schedule-delivery-modal__container_body_block_date-block"
                  ref={scrollTime}
                >
                  {times.map(time => {
                    return (
                      <TimeSquare
                        key={time.id}
                        active={time.id === selectedTime.id}
                        time={time}
                        start={time.start.format("H:mm A")}
                        end={time.end.format("H:mm A")}
                        selectTime={setSelectedTime}
                      />
                    );
                  })}
                </div>
                <SideArrow
                  className="date-arrow-right"
                  onClick={e => scrollTimeRight(e)}
                />
              </div>
            </div>
          </div>
          <div className="schedule-delivery-modal__container_block-button">
            {!scheduleDelivery ? (
              <button
                className="schedule-delivery-modal__container_block-button_button"
                onClick={() => {
                    setScheduleDelivery(`
                      date: ${selectedDate.date},
                      start: ${selectedTime.start.format('LT')},
                      end: ${selectedTime.end.format('LT')}
                    `);
                    setSelectedDate(days[1]);
                  }
                }
              >
                schedule pickup
              </button>
            ) : (
              <button
                className="schedule-delivery-modal__container_block-button_button"
                onClick={() => {
                  setSchedulePickup(`
                    date: ${selectedDate.date},
                    start: ${selectedTime.start.format('LT')},
                    end: ${selectedTime.end.format('LT')}
                  `);
                }}
              >
                schedule delivery
              </button>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ScheduleDeliveryModal;
