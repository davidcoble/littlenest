import React from 'react';

const SchedulePage = () => (
    <div className='content'>
        <h2>Daily Schedule</h2>

        <p>9:30am-1:30pm Monday through Friday</p>
        <br/>
        <p>Our schedule is flexible and may vary depending on our current
            lesson plan or the children's interests. Here's an idea of what a
            typical day will include.</p>
        <br/>
        <table className='schedule'>
            <tbody>
            <tr>
                <td className="time">
                    &nbsp;9:30 &ndash; &nbsp;9:45
                </td>
                <td className="description">
                    Families arrive / Free choice play
                </td>
            </tr>
            <tr>
                <td className="time">
                    &nbsp;9:45 &ndash; 10:00
                </td>
                <td className="description">
                    Snack / Announcements / Jobs
                </td>
            </tr>
            <tr>
                <td className="time">
                    10:00 &ndash; 11:00
                </td>
                <td className="description">
                    Free choice work time
                </td>
            </tr>
            <tr>
                <td className="time">
                    11:00 &ndash; 11:15
                </td>
                <td className="description">
                    Outside time / set up lunch
                </td>
            </tr>
            <tr>
                <td className="time">
                    11:15 &ndash; 12:00
                </td>
                <td className="description">
                    Handwashing and Lunch
                </td>
            </tr>
            <tr>
                <td className="time">
                    12:00 &ndash; 12:45
                </td>
                <td className="description">
                    Free choice work time
                </td>
            </tr>
            <tr>
                <td className="time">
                    12:45 &ndash; &nbsp;1:30
                </td>
                <td className="description">
                    Outside time / Indoor end of the day activities (story, music, sharing, etc.)
                </td>
            </tr>
            </tbody>
        </table>


    </div>
);

export default SchedulePage;
