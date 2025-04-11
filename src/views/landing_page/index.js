import React from "react";
import "../../assets/css/landing_page.css";
import uicase from "../../assets/images/social-media-analytics.webp"

export default function LandingPage() {
    return (
        <main className="content-container container">
            <header>
                <h1 className="display-4 fw-bold mb-3 tech-gradient-text">
                    You Have Unique UI Ideas
                </h1>
                <p className="lead mb-4">
                    A community where developers can share creative UI ideas,
                    and we'll work with you to turn them into real products.
                </p>
            </header>

            <h5 className="fw-bold mb-3">Let's turn your UI Ideas into Reality</h5>

            <section>
                <button className="btn btn-primary btn-lg px-4">
                    Submit Your Idea Now
                </button>
            </section>

            <figure className="mt-5 d-none d-md-block">
                <img src={uicase} alt="UI Showcase" loading="lazy" className="ui-case-image" />
                <figcaption className="mt-2 text-muted">
                    Some UI designs that have been realized from community ideas
                </figcaption>
            </figure>
        </main>
    );
}