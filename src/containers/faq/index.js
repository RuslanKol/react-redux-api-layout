import React from "react";
import Footer from "../../components/Footer";
import Accordeon from '../../components/Accordeon';


const faq = [
    {
        id: 1,
        title: 'What is GoLoundry',
        text: "lorem ipsum"
    },
    {
        id: 2,
        title: 'What is GoLoundry',
        text: "lorem ipsum"
    },
    {
        id: 3,
        title: 'What is GoLoundry',
        text: "lorem ipsum"
    }
]

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveFaq: 1,
        }
    }
    render() {
        return(
            <div className="app bg-pink">
                <div className="faq">
                    <div className="orders__sidebar">
                        <div className="orders__sidebar_title">
                            <div className="orders__sidebar_title_container">
                                <span className="orders__sidebar_title_container_text">
                                FAQ
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="faq__main">
                        {faq.map(el => {
                            return (
                                <React.Fragment key={el.id} >
                                    <div className="faq__main_cont">
                                        <Accordeon 
                                            title={el.title}
                                            description={el.text}
                                        />
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FAQ;