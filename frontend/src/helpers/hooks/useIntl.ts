import {
    useIntl,
} from 'react-intl';

export default function() {
    const intl = useIntl();

    return (id: string) => intl.formatMessage({
        id,
    });
}
