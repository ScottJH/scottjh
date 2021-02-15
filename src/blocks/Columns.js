import React, { Component } from 'react';

class Columns extends Component {
    render() {
        const columns = this.props.columns;
        const colCount = this.props.columns.length;
        const bg = this.props.bg;

        let sectionClasses = "block-columns";

        if (bg) {
            sectionClasses += ` bg-${bg}`
        }

        let colClass = "col w-full";
        if (colCount === 2) {
            colClass += "  md:w-1/2"
        }
        if (colCount === 3) {
            colClass += "  md:w-1/3"
        }
        return (
            <section className={sectionClasses}>
                <div className="block-columns__inner pt-8 pb-8">
                    <div className="row">
                        {
                            columns.map((column, key) => <div key={key} className={colClass} dangerouslySetInnerHTML={{__html: column}} />
                        )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Columns;
