import React from 'react';

const TuitionPage = () => (
    <div className='content'>

        <h2>Tuition</h2>
        <br/>
        <br/>
        <p>
            Little nest tuition rates reflect our low student-to-teacher ratios.
            We do not refund tuition for missed days, school closures or
            vacations. Some make-up days are possible as classroom availability
            allows.
        </p>
        <br/>
        <br/>
        <table className='schedule'>
            <tbody>
            <tr>
                <th colSpan='2'>
                    <p>2018-2019 School Year</p>
                    <p>9:30am to 1:30pm Monday - Friday</p>
                    <p>Choose 2, 3, 4 or 5 days per week</p>
                </th>
            </tr>
            <tr>
                <td className='time'>2 days/week
                </td>
                <td className='description'>$354.00/month
                </td>
            </tr>
            <tr>
                <td className='time'>3 days/week
                </td>
                <td className='description'>$466.00/month
                </td>
            </tr>
            <tr>
                <td className='time'>4 days/week
                </td>
                <td className='description'>$578.00/month
                </td>
            </tr>
            <tr>
                <td className='time'>5 days/week
                </td>
                <td className='description'>$690.00/month
                </td>
            </tr>
            </tbody>
        </table>
        <div>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <table className='schedule'>
                    <tbody>
                    <tr>
                        <td>
                            <input type="hidden" name="cmd" value="_s-xclick"/>
                            <input type="hidden" name="hosted_button_id" value="A48BH3XFYNW46"/>
                            <table>
                                <tbody>
                                <tr>
                                    <td><input type="hidden" name="on0" value="Tuition"/>Pay Tuition Here:</td>
                                    <td><select name="os0">
                                        <option value="2 days / week">2 days / week $354.00 USD</option>
                                        <option value="3 days / week">3 days / week $466.00 USD</option>
                                        <option value="4 days / week">4 days / week $578.00 USD</option>
                                        <option value="5 days / week">5 days / week $690.00 USD</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td><input type="hidden" name="on1" value="for"/>for (please list student's name and month):</td>
                                    <td><input type="test" name="os1" /></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td className="center">
                            <input type="hidden" name="currency_code" value="USD"/>
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
                                   name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                                 height="1"/>

                        </td>
                    </tr>

                    </tbody>
                </table>
            </form>
        </div>

        <br/>
        <br/>
    </div>
);

export default TuitionPage;
