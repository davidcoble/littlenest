import React from 'react';

const GuestPage = () => (
    <div className="content">
        <h1 className='title'>Guest Teachers</h1>
        <h2 className='teacher'>Bronwen Houck, Creative Dance</h2>
        <table>
            <tbody>
            <tr>
                <td className='teacher'>
                    <img width="200" src="/images/bronwen2.jpg"/>
                </td>
                <td className='description'>
                    <p>Bronwen Houck is a Seattle native and lifelong dance enthusiast. She
                        began dancing at the Creative Dance Center from a very young age and
                        was a member of Kaleidoscope Dance Company, a professional modern company
                        of young people based in Seattle, from 1984-1993. With Kaleidoscope she
                        performed in and around the Pacific Northwest as well as traveling with
                        the company to Japan, Canada, Australia, and Brazil. Bronwen went on to
                        study modern dance under Ze'eva Cohen at Princeton University. She earned
                        a Certificate in Theatre and Dance as well as a BA in Art History from
                        Princeton. </p>
                    <p>Bronwen is currently on the faculty of the Creative Dance Center in Haller
                        Lake (just up the street from Little Nest!) where she teaches Nurturing
                        Baby and Parent/Child classes. She is so excited to be leading movement
                        classes with the Little Nest students! When she is not teaching dance
                        Bronwen enjoys the adventures of life with two young children (one current
                        Little Nester and one alum) and works as a professional portrait and event
                        photographer
                        (<a href="http://www.bronwenhouckphoto.com">www.bronwenhouckphoto.com</a>).
                    </p>
                </td>
            </tr>
            </tbody>
        </table>

        <h2 className='teacher'>Katy Webber, <a className='teacher' href="http://www.musikalmagik.com">Musikal Magik</a></h2>
        <table>
            <tbody>
            <tr>
                <td className='teacher'>
                    <img width="300" src="/images/Katy.jpg"/>
                </td>
                <td className='description'>
                    <p>Katy is thrilled to be a part of the Little Nest Preschool! Using
                        ideas from early childhood music philosophers such as Dalcrose,
                        Susuki, and Orff, she teaching using childrens folk tunes from all
                        around the world with a jazzy flare and even throws some ASL and
                        Spanish into the mix.</p>
                    <p>Katy grew up in Everett, WA and moved down to Seattle 12 years ago
                        to go to Cornish College of the Arts because Brendan Frasier went
                        there. She graduated in 2003 with a BA in jazz performance and stepped
                        right into early childhood music education with Soundbridge, Seattle
                        Symphony.</p>
                    <p>She now runs her small
                        business, <a href="http://www.musikalmagik.com">Musikal Magik</a>
                        along with Betsy Dischel teaching early childhood music classes all
                        over the North & West Seattle area. She also performs British Panto,
                        vaudeville, and sings in various music groups as well as performing
                        solo with her Ukulele.</p>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
);

export default GuestPage;
