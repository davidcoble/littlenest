import React from 'react';

const ContactPage = () => (
    <div className='content'>
        <h1>Contact Us</h1>

        <table>
            <tbody>
            <tr>
                <td className='time'>
                    <h2>address</h2>
                    North Seattle Church<br/>
                    2150 N 122<sup>nd</sup> St<br/>
                    Seattle, WA<br/>
                    98133<br/>
                </td>
                <td className='time'>

                    <h2>phone</h2>
                    <p>206-853-5670</p>
                </td>
                <td className='description'>
                    <h2>email</h2>
                    <a href="mailto:info@littlenest.org">info@littlenest.org</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
);

export default ContactPage;
