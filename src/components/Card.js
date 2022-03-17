import React from 'react'

export default function Card(props) {
    let { image, text, number } = props;

    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img className='before1' src={image} alt='before1' />
                < div className="card-body" >
                    <p className="card-text">{text}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">{number} mins</small>

                    </div>
                </div >
            </div>
        </div>

    )
}
