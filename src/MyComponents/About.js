import React from "react";

export const About = () => {
    return (
        <section className="about-page container">
            <div className="about-card">
                <span className="section-kicker">About this app</span>
                <h1>Designed to keep daily planning simple and beautiful.</h1>
                <p>
                    This todo list is a lightweight React CRUD example for capturing
                    the tasks you want to complete in a day. Use it like a polished
                    set of sticky notes: add what matters, keep the next action clear,
                    and remove tasks when they are finished.
                </p>
            </div>
        </section>
    )
}
