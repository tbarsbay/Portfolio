import { connect } from "react-redux";

import { workHistoryActionCreator } from "../actions/work_history";

function mapStateToProps({ workHistory }) {
    console.log("Map state to props", workHistory);
    return workHistory;
}

function mapDispatchToProps(dispatch) {
    return {
        fetchWorkHistory: workHistoryActionCreator.fetchWorkHistory
    };
}

export default connect(mapStateToProps, mapDispatchToProps);