import React from "react"
import Select from "./select"

function ProjectMainPage() {
    return (
        <form action="">
            <div className="container custom-container">
                <p className="text1">SELECT LOUNGE</p>
                <div className="row">
                    <div className="form-group col-md-4 col-12">
                        <label for="booking-ref-no">Booking Reference Number</label>
                        <input
                            type="text"
                            id="booking-ref-no"
                            className="form-control"
                            placeholder="BI6788G5535"
                        />
                    </div>
                    <div className="form-group col-md-4 col-12">
                        <label for="booking-ref-no">Booking Date and Time </label>
                        <input
                            type="text"
                            id="booking-ref-no"
                            className="form-control"
                            placeholder="12 May 2019"
                        />
                    </div>
                    <div className="form-group col-md-4 col-12">
                        <label for="booking-ref-no">Created By </label>
                        <input
                            type="text"
                            id="booking-ref-no"
                            className="form-control"
                            placeholder="Nathasha Ground ID 1234"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label for="airport-service">Airport of Service </label>
                        <Select name="airport-service" id="airport-service" classselect="form-control" optionsData={[{
                            key: "BIa",
                            value: "Bia value",
                        },
                        {
                            key: "tes",
                            value: "Btesa value",
                        },
                        {
                            key: "tsdades",
                            value: "Btedsadsa value",
                        },

                        ]} />
                        {/* <select
                            name="airport-service"
                            id="airport-service"
                            className="form-control"
                        >
                            <option value="BIA">BIA</option>
                            <option value="BIA">BIA</option>
                            <option value="BIA">BIA</option>
                        </select> */}
                    </div>
                    <div className="form-group col-sm-4">
                        <label for="terminal"> Terminal</label>
                        <Select name="terminal" id="terminal" classselect="form-control" optionsData={[
                            {
                                key: "terminal 1",
                                value: "terminal 1",
                            },
                            {
                                key: "terminal 2",
                                value: 'terminal 2',
                            },
                            {
                                key: "terminal 3",
                                value: "terminal 3",
                            },
                        ]} />
                        {/* <select name="terminal" id="terminal" className="form-control">
                            <option value="Terminal 1">Terminal 1</option>
                            <option value="Terminal 2">Terminal 2</option>
                            <option value="Terminal 3">Terminal 3</option>
                        </select> */}
                    </div>
                    <div className="form-group  col-sm-4">
                        <label for="arival-lounge">Select Lounge </label>
                        <select name="airport-service" id="arival-lounge" className="form-control">
                            <option value="arival lounge">arival lounge</option>
                            <option value="arival lounge">arival lounge</option>
                            <option value="arival lounge">arival lounge</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6 col-lg-4">
                        <label for="type-of-account"> Select Type Of Account</label>
                        <select name="terminal" id="type-of-account" className="form-control">
                            <option value="Select Corporate ">Select Corporate</option>
                            <option value="Select Corporate ">Select Corporate </option>
                            <option value="Select Corporate ">Select Corporate </option>
                        </select>
                    </div>
                    <div className="form-group col-sm-6 col-lg-4">
                        <label for="group-or-event">Select Group or Event </label>
                        <select name="group-or-event" id="group-or-event" className="form-control">
                            <option value="arival lounge"> Select</option>
                            <option value="arival lounge">Select1 </option>
                            <option value="arival lounge">Select2 </option>
                        </select>
                    </div>
                    <div className="form-group col-sm-6 col-lg-4">
                        <label for="booker-details">Select Booker Details </label>
                        <select name="booker-details" id="booker-details" className="form-control">
                            <option value="arival lounge">
                                {" "}
                                Sunil Nail for IBM Account BIA 1234
          </option>
                            <option value="arival lounge">
                                Sunil Nail for IBM Account BIA 1234{" "}
                            </option>
                            <option value="arival lounge">
                                Sunil Nail for IBM Account BIA 1234{" "}
                            </option>
                        </select>
                    </div>
                </div>
                <div className="row"></div>
                <div className="row"></div>
                <div className="wrap-adult-child-infant">
                    <p> Number Of Passenger</p>
                    <div className="row">
                        <div className="form-group col-sm-2">
                            <label for="adult">Adult</label>
                            <select name="adult" id="adult" className="form-control">
                                <option value="arival lounge"> Select</option>
                                <option value="arival lounge">Select1 </option>
                                <option value="arival lounge">Select2 </option>
                            </select>{" "}
                        </div>
                        <div className="form-group col-sm-2">
                            <label for="child">Child </label>
                            <select name="child" id="child" className="form-control">
                                <option value="arival lounge"> 0</option>
                                <option value="arival lounge">1 </option>
                                <option value="arival lounge">2 </option>
                            </select>{" "}
                        </div>
                        <div className="form-group col-sm-2">
                            <label for="infant">Infant </label>
                            <select name="infant" id="infant" className="form-control">
                                <option value="arival lounge"> 0</option>
                                <option value="arival lounge">1 </option>
                                <option value="arival lounge">2 </option>
                            </select>{" "}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-lg-4 col-sm-6">
                        <label for="type">Type </label>
                        <select name="type" id="type" className="form-control">
                            <option value="Individual">Individual</option>
                            <option value="Family ">Family </option>
                            <option value="Individual">Individual </option>
                        </select>
                    </div>
                    <div className="form-group col-sm-6 col-lg-4">
                        <label for="select-lounge-package"> Select Lounge Package</label>
                        <select
                            name="select-lounge-package"
                            id="select-lounge-package"
                            className="form-control"
                        >
                            <option value="Select Corporate ">lounge 1</option>
                            <option value="Select Corporate ">lounge 1 </option>
                            <option value="Select Corporate ">lounge 1 </option>
                        </select>
                    </div>
                    <div className="form-group col-sm-6 col-lg-4">
                        <label for="expected-hour-stay">Expected Hours of Stay</label>
                        <input
                            type="text"
                            id="expected-hour-stay"
                            className="form-control"
                            placeholder="3"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-md-4">
                        <label for="from-time">From </label>
                        <input
                            type="text"
                            id="from-time"
                            className="form-control"
                            placeholder="18:15"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="to-time"> To </label>
                        <input
                            type="text"
                            id="to-time"
                            className="form-control"
                            placeholder="  22:15"
                        />
                    </div>
                </div>
                <div className="wrap-additional-service">
                    <p>SELECT ADDITIONAL SERVICES</p>
                    <p>Passenger Detail</p>
                    <div className="row" style={{ position: "relative" }}>
                        <div className="form-group col-xl-2 col-sm-4">
                            <label for="select-name-type">
                                <small>Select Type </small>
                            </label>
                            <select
                                name="select-name-type"
                                id="select-name-type"
                                className="form-control"
                            >
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value=" Mr.">Mr.</option>
                            </select>
                        </div>
                        <div className="form-group col-xl-4 col-sm-8">
                            <label for="passenger-name">
                                <small>passenger Name</small>{" "}
                            </label>
                            <input
                                type="text"
                                id="passenger-name"
                                className="form-control"
                                placeholder="Advik"
                            />
                        </div>
                        <div className="form-group col-xl-2 col-sm-4">
                            <label for="passenger-nationalality">
                                <small> passenger-Nationalality </small>{" "}
                            </label>
                            <input
                                type="text"
                                id="passenger-nationalality"
                                className="form-control"
                                placeholder="Hindu"
                            />
                        </div>
                        <div className="form-group col-xl-2 col-sm-4">
                            <label for="passenger-age">
                                <small>Passenger age</small>
                            </label>
                            <input
                                type="text"
                                id="passenger-age"
                                className="form-control"
                                placeholder="06"
                            />
                        </div>

                        <div className="form-group col-xl-1 col-sm-4">
                            <label for="type-person">
                                <small> Select Type </small>{" "}
                            </label>
                            <select name="type-person" id="type-person" className="form-control">
                                <option value="child">Child</option>
                                <option value="adult ">Adult </option>
                                <option value="infant "> Infant</option>
                            </select>
                        </div>
                        <div
                            className="form-group col-sm-12 col-xl-1"
                            style={{
                                display: 'flex',

                                alignItems: 'flex-end'
                            }}
                        >
                            <button
                                className="btn"
                                style={{ background: '#19477d', color: "white" }}
                                id="add-passenger"
                            >
                                + Add
          </button>
                        </div>
                    </div>
                </div>
                <div className="flight-details">
                    <p>Flight Details</p>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label for="flight-no">
                                <small>Flight Number</small>
                            </label>
                            <input
                                type="text"
                                id="flight-no"
                                className="form-control"
                                placeholder="KGH23466"
                            />
                        </div>
                        <div className="form-group col-sm-4">
                            <label for="flight-date-time">
                                <small>Flight Date and Time</small>
                            </label>
                            <input
                                type="date"
                                id="flight-date-time"
                                className="form-control"
                                placeholder="12 MAY 2019 13:04:59"
                            />
                        </div>
                        <div className="form-group col-sm-4">
                            <label for="destination">
                                <small>Origin\Destination</small>
                            </label>
                            <input
                                type="text"
                                id="destination"
                                className="form-control"
                                placeholder="BLR 01"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label for="boarding-time">
                                <small>Boarding Time</small>{" "}
                            </label>
                            <input
                                type="date"
                                id="boarding-time"
                                className="form-control"
                                placeholder="13 MAY 2019 13:04:59"
                            />
                        </div>

                        <div className="form-group col-sm-4">
                            <label>Remarks</label>
                            <select
                                name="airport-service"
                                id="airport-service"
                                className="form-control"
                            >
                                <option value="wheelchair">Wheelchair</option>
                                <option value="wheelchair">Wheelchair</option>
                                <option value="wheelchair">Wheelchair</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="comment">
                    <p>comment</p>
                    <div className="row">
                        <div className="form-group col-sm-8">
                            <input
                                type="text"
                                id="comment"
                                className="form-control"
                                style={{ height: "120px" }}
                                placeholder="write comment.."
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="line"
                    style={{
                        height: "1px",
                        width: "100%",
                        background: "grey"
                    }}
                ></div>

                <div className="row bottom-amount">
                    <div className="col custom-total-amount">TOTAL AMOUNT</div>
                    <div className="col text-right custom-amount">BHD 38</div>
                </div>
            </div>
        </form>

    )
}

export default ProjectMainPage