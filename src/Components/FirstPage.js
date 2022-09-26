import React, { Component } from "react";
import '../App.css';

class firstPage extends Component {
    render() {
        return (
            <div id="appCapsule" className="extra-header-active">
                <div className="tab-content mt-1">
                    <div className="tab-pane fade show active">
                        <div className="section full mt-1">
                            <div className="title">
                                <h2>Add List</h2>
                            </div>
                            <div className="wide-block pt-2 pb-2">
                                <div className="form-wrapper">
                                    <form>
                                        <div className="form-group boxed mt-3 mb-2">
                                            <div className="input-wrapper">
                                                <textarea type="text" className="form-control" id="notes" placeholder="Enter a new list" />
                                            </div>
                                        </div>
                                        <div className="form-group boxed mt-3 mb-2">
                                            <div className="input-wrapper">
                                                <input type="date" className="form-control" id="create-date" />
                                            </div>
                                        </div>
                                        <div className="form-group boxed mt-3 mb-2">
                                            <div className="input-wrapper">
                                                <input type="time" className="form-control" id="create-time" />
                                            </div>
                                        </div>
                                        <button className="btn btn-primary shadowed mt-2 m-5 right">Add</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default firstPage;