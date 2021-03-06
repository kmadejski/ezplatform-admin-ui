import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlloyEditor from 'alloyeditor';

export default class EzBtnTable extends Component {
    static get key() {
        return 'eztable';
    }

    /**
     * Lifecycle. Renders the UI of the button.
     *
     * @method render
     * @return {Object} The content which should be rendered.
     */
    render() {
        if (this.props.renderExclusive) {
            return <AlloyEditor.ButtonTableEdit {...this.props} />;
        }

        const css = 'ae-button ez-btn-ae ez-btn-ae--table';

        return (
            <button className={css} onClick={this.props.requestExclusive} tabIndex={this.props.tabIndex}>
                <svg className="ez-icon ez-btn-ae__icon">
                    <use xlinkHref="/bundles/ezplatformadminui/img/ez-icons.svg#table-add"></use>
                </svg>
                <p className="ez-btn-ae__label">Table</p>
            </button>
        );
    }
}

AlloyEditor.Buttons[EzBtnTable.key] = AlloyEditor.EzBtnTable = EzBtnTable;

EzBtnTable.propTypes = {
    editor: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    tabIndex: PropTypes.number.isRequired,
};
