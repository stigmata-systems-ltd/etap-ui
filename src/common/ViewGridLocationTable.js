import React, { Component } from "react";




class ViewGridLocationTable extends Component {


    render() {

        return (
            <div class="table-responsive pt-3 data-table">

                <table className="table table-striped table-hover table-bordered">
                    <tr>
                        <td>Grid Lat.</td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>

                    </tr>
                    <tr>
                        <td>Grid Long.</td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>
                        <td><input type="text" className="form-control" /></td>

                    </tr>

                </table>
            </div>

        );
    }
}

export default ViewGridLocationTable;
