import React, { Component } from 'react';
import { connect } from "react-redux";
import GistComponent from '../components/gist/GistComponent';
import GISTS from "../redux/gists/actions/index";

class HomePage extends Component {
    render() {
        const { gistsState, nextPage, prevPage } = this.props;
        return (
            <div>
                <GistComponent gists={gistsState} nextPage={nextPage} prevPage={prevPage} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const fetchingGistsSuccess = state.gists.success;
    if (fetchingGistsSuccess) {
        const gistsArray = state.gists.gistsArray;
        const nextPage = state.gists.pageDetails.next;
        const prevPage = state.gists.pageDetails.prev;
        return {
            gistsState: gistsArray,
            nextPage: nextPage,
            prevPage: prevPage
        };
    }
};

function mapDispatchToProps(dispatch) {
    return {
        getGistsAction: dispatch(GISTS.request()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
