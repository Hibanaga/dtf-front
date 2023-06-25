import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import { Props } from './index';

const LayoutHead: FunctionComponent<Props> = ({ title, name, description, children }) => {
    return (
        <Head>
            <title>{title}</title>

            {name && (
                <>
                    <meta
                        property="title"
                        content={name}
                    />
                    <meta
                        property="og:title"
                        content={name}
                    />
                </>
            )}
            {description && (
                <>
                    <meta
                        name="description"
                        content={description}
                    />
                    <meta
                        property="og:description"
                        content={description}
                    />
                </>
            )}

            {children}
        </Head>
    );
};

export default LayoutHead;
