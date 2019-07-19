import React from 'react';

const ReleaseForm = ({ submitHandler }) => {

    let _releaseName, _releaseDate;
    const handleSubmit = (e) => {
        console.log('ReleaseForm -> handleSubmit')
        submitHandler(e, {
            name: _releaseName.value,
            date: _releaseDate.value
        }
        );
        clearForm();
    }

    const clearForm = () => {
        _releaseDate.value = '';
        _releaseName.value = '';
    }

    return (
        <form onSubmit={handleSubmit} className="form-inline" style={{ paddingTop: "25px", paddingBottom: "15px" }}>
            <label className="sr-only" for="inlineFormInputName2">Release Name</label>
            <input type="text" ref={input => _releaseName = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Set the name" />

            <label className="sr-only" for="inlineFormInputGroupUsername2">Release Date</label>
            <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">

                </div>
                <input type="text" ref={input => _releaseDate = input} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Set the date" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    )
};

export default ReleaseForm;