import React from 'react';

import Preview from '../components/preview.component';

import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'>
        <div className='welcome-section'>
            <h1 className='title'>Welcome to Khaki!</h1>
            <div className='app-preview'>
                <h3 className='subtitle'>A place to find someone like you.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque gravida aliquam ipsum, vel gravida ante pellentesque vitae. 
                    Morbi turpis dolor, tincidunt sit amet scelerisque sed, tempus ut velit. 
                    Aliquam eu mauris at odio sodales bibendum et a risus. Integer velit mi, eleifend porta ornare quis, pulvinar eget dui. 
                    Mauris orci mi, rutrum quis eleifend sagittis, rutrum ut lorem. Donec tempor, 
                    justo eu lacinia feugiat, ipsum libero tincidunt mi, eu mattis leo sapien vel magna.
                </p>
            </div>
        </div>
        <div className='description-container'>
            <h2>Curabitur sit amet quam velit.</h2>
            <p>
            Pellentesque eu nisi vitae diam vehicula semper vel in nulla. 
            Donec mi elit, venenatis at ultrices ullamcorper, cursus quis nunc. 
            Vivamus sapien mauris, malesuada nec rhoncus ac, faucibus at massa. 
            Praesent quis euismod felis, vitae imperdiet felis. 
            Aenean vel consequat orci. Curabitur sodales nisl id nunc ornare, 
            ac maximus risus laoreet. 
            Quisque pretium ac elit a condimentum.
            </p>
        </div>
        
        <Preview />
        <div className='button-container'>
        </div> 
    </div>
);

export default HomePage;