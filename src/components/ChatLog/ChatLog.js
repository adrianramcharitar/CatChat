import { getTime, isSameDay, format } from 'date-fns';
import './ChatLog.css';

class ChatLog extends Component {
    componentWillMount() {}

    componentDidUpdate() {}

    getTime(timestamp) {
        if (!timestamp) {
            return '';
        }

        let sourceTime = getTime(timestamp);
        let today = getTime(new Date());
        let daysMatch = isSameDay(sourceTime, today);
        let timeText = '';

        if (daysMatch) {
            timeText = format(sourceTime, 'h:mm A');
        } else {
            timeText = '> 1 day ago';
        }
        return timeText;
    }

    render() {
        return;
    }
}
