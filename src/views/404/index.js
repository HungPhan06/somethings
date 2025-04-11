import React from "react";

export default function Page404() {
    return (
        <div style={{ paddingTop: '40%' }}>
            <div className='d-center d-card-404'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-404'>
                            404
                        </h1>
                    </div>
                    <div className='text-page-not-found'>
                        Page not found
                    </div>
                    <div className='text-not-exits pt-2'>
                        Oops!, the page you looking for does not exist
                    </div>
                    <div className='col-12 d-center' style={{ paddingTop: 80 }}>
                        <button
                            onClick={() => { window.location = window.location.origin }}
                            className='btn-style-1'
                        >
                            <span style={{ marginLeft: 8 }}>Go Back Home</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}