import React from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import { getUserNotifications, deleteUserNotification } from "../../_actions/user.actions";

import { ReactComponent as TrashIcon } from "../../images/trash-icon.svg";

const notifications = [
  {
    NotificationId: 1,
    Message: "bla bla 1"
  },
  {
    NotificationId: 2,
    Message: "bla bla 2"
  },
  {
    NotificationId: 3,
    Message: "bla bla 3"
  },
]

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requestObject: {
        sortBy: 'NotificationId ASC',
        start: 0,
        end: 20
      },
    };
  }

  componentDidMount() {
    this.props.getUserNotifications(this.state.requestObject)
  }

  handleDeleteNotification = id => {
    this.props.deleteNotification(id);
  }

  render() {
    const { user } = this.props;
    return (
      <div className="app bg-pink">
        <div className="notifications">
          <div className="orders__sidebar">
            <div className="orders__sidebar_title">
              <div className="orders__sidebar_title_container">
                <span className="orders__sidebar_title_container_text">
                  Notifications
                </span>
              </div>
            </div>
          </div>
          <div className="notifications__main">
            <div className="notifications__main_cont">
              <div className="notify-item">
                {user.notifications && JSON.stringify(user.notifications) !== "[]"
                ? <div>
                    {user.notifications.notificationsList.data.map(i => {
                      return(
                        <div className="notify-item__container" key={i.NotificationId}>
                          <div className="notify-item__container_body">
                            <span className="notify-item__container_body_text">
                              {i.Message}
                            </span>
                            <span className="notify-item__container_body_data">
                              Sun 23-06-2019 03:00 PM
                            </span>
                          </div>
                          <div className="trash-btn">
                            <TrashIcon onClick={() => this.handleDeleteNotification(i.NotificationId)} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                : <p>No notifications yet</p>
                }
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUserNotifications: getUserNotifications,
  deleteNotification: deleteUserNotification,
};

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

const connectedNotifications = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);

export { connectedNotifications as Notifications };
