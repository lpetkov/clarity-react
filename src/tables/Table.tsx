/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

import * as React from "react";
import {classNames} from "../utils";
import {ClassNames} from "../tables";

/**
 * Table Props
 * @param {className} css property
 * @param {isVertical} table orientation
 * @param {isCompact} compaction property
 * @param {isNonBordered} Border property
 * @param {dataqa} quality engineering testing field
 */
export type TableProps = {
    className?: string;
    isVertical?: boolean;
    isCompact?: boolean;
    isNonBordered?: boolean;
    dataqa?: string;
};

export class Table extends React.PureComponent<TableProps> {
    render() {
        const {
            className, //prettier hack
            isVertical,
            isCompact,
            isNonBordered,
            children,
            dataqa,
        } = this.props;
        return (
            <table
                data-qa={dataqa}
                className={classNames([
                    ClassNames.TABLE, //prettier hack
                    isVertical && ClassNames.TABLE_VERTICAL,
                    isCompact && ClassNames.TABLE_COMPACT,
                    isNonBordered && ClassNames.TABLE_NO_BORDER,
                    className,
                ])}
            >
                {children}
            </table>
        );
    }
}
